import { NextResponse } from "next/server";
import { transporter } from "@/lib/email";

export async function GET() {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "Teste SMTP Gmail",
      text: "Se você recebeu isso, a configuração funcionou!",
    });
    return NextResponse.json({ success: true, message: "E-mail enviado!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}