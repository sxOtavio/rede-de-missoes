import "./globals.css";

export const metadata = {
  title: "Projeto PURIM - Rede de Missões da Igreja Adventista do Sétimo Dia",
  description: "Projeto PURIM ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
