"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-4 py-6 text-sm text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2>Endereço: Rua Exemplo, 123 - Cidade, Estado</h2>
          <h2>Telefone: (11) 1234-5678</h2>
          <h2>Email: contato@rede-de-missoes.com</h2>
        </div>

        <div className="text-center text-base font-semibold">logo das redes sociais</div>

        <div className="text-center md:text-right">política de privacidade · notícias</div>
      </div>
    </footer>
  );
}