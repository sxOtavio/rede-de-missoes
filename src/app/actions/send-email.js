"use server";

import { transporter } from "@/lib/email";

export async function sendEmail(formData) {
  const name = formData.get("nome");
  const email = formData.get("email");
  const phone = formData.get("telefone");
  const title = formData.get("assunto");
  const message = formData.get("mensagem");
console.log("Dados do formulário recebidos:", { name, email, phone, title, message });
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,// Substitua pelo e-mail de destino do projeto
      subject: ` ${title} - Novo contato de ${name}:`,
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return { success: false, error: "Falha ao enviar e-mail." };
  }
}
