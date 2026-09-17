// app/api/checkout/route.js
import { NextResponse } from "next/server";

/**
 * Gera o token de acesso OAuth da Cielo
 * Usa ClientID + ClientSecret em Basic Auth
 */
async function getCieloAccessToken() {
  const clientId = process.env.CIELO_CLIENT_ID;
  const clientSecret = process.env.CIELO_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Credenciais da Cielo não configuradas no .env");
  }

  // Concatena e codifica em Base64 para o Basic Auth
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  // 🔥 ENDPOINT CORRETO para Link de Pagamento (conforme documentação oficial)
  const response = await fetch("https://cieloecommerce.cielo.com.br/api/public/v2/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao obter token (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

/**
 * Cria um Link de Pagamento na Cielo
 * POST /api/checkout
 */
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

  try {
    // 1. Obtém o token de acesso
    const accessToken = await getCieloAccessToken();
    console.log("API - Token obtido com sucesso");

    // 2. Monta o payload do Link de Pagamento
    const payload = {
      Type: "Service",
      Name: "Doação Instituto Tempo de Alegria",
      Description: "Doação para o Instituto Tempo de Alegria",
      Price: Math.round(valor * 100),
      Shipping: {
        Type: "WithoutShipping",
      },
    };

    // 3. Cria o Link de Pagamento (endpoint correto conforme documentação)
    const response = await fetch(
      "https://cieloecommerce.cielo.com.br/api/public/v1/products/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
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

    console.log("Link de pagamento criado:", data);

    return NextResponse.json({
      checkoutUrl: data.ShortUrl || data.Url || data.url,
      linkId: data.Id || data.id,
    });

  } catch (error) {
    console.error("Erro no Link de Pagamento Cielo:", error);
    return NextResponse.json(
      { error: error.message || "Falha ao processar doação." },
      { status: 500 }
    );
  }
}