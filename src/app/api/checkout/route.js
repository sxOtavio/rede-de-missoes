// app/api/checkout/route.js
import { NextResponse } from "next/server";

async function getCieloAccessToken() {
  const clientId = process.env.CIELO_CLIENT_ID;
  const clientSecret = process.env.CIELO_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Credenciais da Cielo não configuradas no .env");
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

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

//  Mapeamento das formas de pagamento para exibição
const FORMAS_PAGAMENTO = {
  pix: "PIX",
  debito: "Cartão de Débito",
  credito: "Cartão de Crédito",
};

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

  const { valorBruto, valorLiquido, formaPagamento, nome, email, cpf } = body;

  // Validações
  if (!valorBruto || valorBruto <= 0) {
    console.error("Valor bruto inválido:", valorBruto);
    return NextResponse.json(
      { error: "Valor da doação inválido." },
      { status: 400 }
    );
  }

  if (!valorLiquido || valorLiquido <= 0) {
    console.error("Valor líquido inválido:", valorLiquido);
    return NextResponse.json(
      { error: "Valor líquido inválido." },
      { status: 400 }
    );
  }

  try {
    const accessToken = await getCieloAccessToken();
    console.log("API - Token obtido com sucesso");


    const metodoPagamento = FORMAS_PAGAMENTO[formaPagamento] || "Pagamento";

    const descricao = [
      `Doação ao ITA - Projeto Purim`,
      `Método: ${metodoPagamento}`,
      `Valor líquido ao projeto: R$ ${valorLiquido.toFixed(2)}`,
      `Importante: pague exatamente R$ ${valorBruto.toFixed(2)} no ${metodoPagamento} para que o valor chegue integralmente ao projeto.`,
    ].join(" | ");

    const payload = {
      Type: "Service",
      Name: `Doação ITA - ${metodoPagamento}`,
      Description: descricao,
      Price: Math.round(valorBruto * 100),
      Shipping: {
        Type: "WithoutShipping",
      },
    };

    console.log("API - Payload enviado para Cielo:", payload);

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

    const checkoutUrl = data.shortUrl || data.url || data.ShortUrl || data.Url;

    if (!checkoutUrl) {
      console.error("URL não encontrada na resposta:", data);
      return NextResponse.json(
        { error: "Cielo não retornou a URL do link de pagamento" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      checkoutUrl: checkoutUrl,
      linkId: data.id,
      valorBruto: valorBruto,
      valorLiquido: valorLiquido,
      metodoPagamento: metodoPagamento,
    });

  } catch (error) {
    console.error("Erro no Link de Pagamento Cielo:", error);
    return NextResponse.json(
      { error: error.message || "Falha ao processar doação." },
      { status: 500 }
    );
  }
}