// app/api/checkout/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const payload = {
    // ... (seus dados de Order, Cart, Payment, Customer)
  };

  try {
    // ✅ Use este endpoint para criar a página de checkout:
    const response = await fetch("https://cieloecommerce.cielo.com.br/api/public/v1/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "MerchantId": process.env.CIELO_MERCHANT_ID,
        "MerchantKey": process.env.CIELO_MERCHANT_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro ao criar checkout na Cielo");
    }

    // Retorna a URL de pagamento (CheckoutUrl) para o front-end
    return NextResponse.json({ checkoutUrl: data.CheckoutUrl });
  } catch (error) {
    console.error("Erro no checkout Cielo:", error);
    return NextResponse.json(
      { error: "Falha ao processar doação." },
      { status: 500 }
    );
  }
}