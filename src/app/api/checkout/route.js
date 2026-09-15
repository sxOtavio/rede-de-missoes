// app/api/checkout/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("API - Requisição recebida no checkout");

  let body;
  try {
    body = await request.json();
    console.log("API - Dados recebidos:", body);
  } catch (err) {
    console.error("Body inválido ou vazio:", err);
    return NextResponse.json(
      { error: "Corpo da requisição inválido ou vazio." },
      { status: 400 }
    );
  }

  const { valor, nome, email, cpf } = body;

  if (!valor || valor <= 0) {
    return NextResponse.json(
      { error: "Valor da doação inválido." },
      { status: 400 }
    );
  }

  // Payload do Link de Pagamento
  const payload = {
    Type: "Service",
    Name: "Doação Instituto Tempo de Alegria",
    Description: "Doação para o Instituto Tempo de Alegria",
    Price: Math.round(valor * 100),
    Shipping: {
      Type: "WithoutShipping",
    },
  };

  try {
    const response = await fetch(
      "https://cieloecommerce.cielo.com.br/api/public/v1/products/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          MerchantId: process.env.CIELO_MERCHANT_ID,
          MerchantKey: process.env.CIELO_MERCHANT_KEY,
        },
        body: JSON.stringify(payload),
      }
    );

    const rawText = await response.text();
    console.log("=== RESPOSTA BRUTA DA CIELO ===");
    console.log("Status HTTP:", response.status);
    console.log("Corpo:", rawText);
    console.log("===============================");

    let data;
    try {
      data = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        {
          error: `Cielo retornou resposta não-JSON (status ${response.status})`,
          raw: rawText,
        },
        { status: 500 }
      );
    }

    if (!response.ok) {
      console.error("Resposta da Cielo:", data);
      throw new Error(data.Message || data.message || "Erro ao criar link de pagamento");
    }

    // A resposta inclui o link curto (ShortUrl) e o ID
    console.log("Link de pagamento criado:", data);
    
    return NextResponse.json({ 
      checkoutUrl: data.ShortUrl || data.url,
      linkId: data.Id 
    });

  } catch (error) {
    console.error("Erro no Link de Pagamento Cielo:", error);
    return NextResponse.json(
      { error: "Falha ao processar doação." },
      { status: 500 }
    );
  }
}