import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // false para 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // senha de 16 dígitos SEM espaços
  },
});

export async function sendAdminCadastroEmail({ nome, email }) {
  const destinatario = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

  return transporter.sendMail({
    from: process.env.SMTP_USER,
    to: destinatario,
    subject: "Nova solicitação de cadastro",
    text: [
      "Uma nova pessoa solicitou acesso à Rede de Missões.",
      "",
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      "Status: pendente de aprovação",
      "",
      "Acesse o painel administrativo para analisar e liberar o acesso.",
    ].join("\n"),
  });
}
