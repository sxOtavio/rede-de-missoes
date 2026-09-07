"use client";

import Link from "next/link";

const menuItems = [
  { nome: "Quem somos", href: "/quemSomosPage" },
  { nome: "Projeto", href: "/projetoPage" },
  { nome: "Doações", href: "/doacoesPage" },
  { nome: "Contato", href: "/contatoPage" },
  { nome: "Notícias", href: "/noticiasPage" },
];

export default function Header() {
  return (
    <header className="w-full bg-[#f8f7f3] text-black/90 shadow-md shadow-black/5 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-3 md:flex-row md:justify-between md:gap-0 md:px-6 md:py-0 lg:px-8">
        <Link
          className="flex items-center justify-center gap-3 md:justify-start"
          href="/"
        >
          <img
            src="/logoPurim.jpeg"
            alt="logo"
            className="h-14 w-auto sm:h-16 md:h-20 lg:h-24"
          />
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
            
          </h1>
        </Link>

        <nav className="w-full overflow-x-auto md:w-auto">
          <ul className="flex min-w-max items-center justify-center gap-3 text-sm font-bold tracking-wide sm:gap-4 sm:text-base md:gap-5 md:text-lg lg:gap-8 lg:text-xl">
            {menuItems.map((item) => (
              <li key={item.nome}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-black/90 transition-colors hover:text-grey-200"
                >
                  {item.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}