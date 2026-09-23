"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { nome: "Quem somos", href: "/quemSomosPage" },
  {
    nome: "Atividades",
    href: "#",
    submenu: [
      { nome: "Projeto Purim", href: "/projetoPurim" },
      
      {
        nome: "ITA Estrutural",
        href: "/ITAEstrutural",
        submenu: [
          { nome: "Projetos", href: "/projetos" },
          { nome: "Células", href: "/celulas" },
          { nome: "Cursos", href: "/cursos" },
        ],
      },
    ],
  },
  { nome: "Doações", href: "/doacoesPage" },
  { nome: "Contato", href: "/contatoPage" },
  { nome: "Notícias", href: "/noticiasPage" },
];

export default function Header() {
  const [submenuAberto, setSubmenuAberto] = useState(null);
  const [subSubmenuAberto, setSubSubmenuAberto] = useState(null);
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [mobileSubmenuAberto, setMobileSubmenuAberto] = useState(null);

  return (
    <header className="w-full bg-[#f8f7f3] text-black/90 shadow-md shadow-black/5 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <Link className="flex items-center gap-3" href="/">
          <img
            src="/logoPurim.jpeg"
            alt="logo"
            className="h-14 w-auto sm:h-16 md:h-20 lg:h-24"
          />
        </Link>

        {/* 🔥 Botão Hambúrguer (mobile) */}
        <button
          onClick={() => setMenuMobileAberto(!menuMobileAberto)}
          className="lg:hidden text-3xl text-gray-800 focus:outline-none"
          aria-label="Abrir menu"
        >
          {menuMobileAberto ? "✕" : "☰"}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-lg font-bold tracking-wide">
            {menuItems.map((item) => (
              <li
                key={item.nome}
                className="relative"
                onMouseEnter={() => item.submenu && setSubmenuAberto(item.nome)}
                onMouseLeave={() => {
                  setSubmenuAberto(null);
                  setSubSubmenuAberto(null);
                }}
              >
                {item.submenu ? (
                  <>
                    <button className="whitespace-nowrap text-black/90 transition-colors hover:text-[#E07B39] flex items-center gap-1">
                      {item.nome}
                      <span className="text-xs">▼</span>
                    </button>

                    {submenuAberto === item.nome && (
                      <div className="absolute top-full left-0 pt-2 w-56 z-50">
                        <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                          {item.submenu.map((sub) => (
                            <div
                              key={sub.nome}
                              className="relative"
                              onMouseEnter={() =>
                                sub.submenu && setSubSubmenuAberto(sub.nome)
                              }
                              onMouseLeave={() => setSubSubmenuAberto(null)}
                            >
                              {sub.submenu ? (
                                <>
                                  {/* 🔥 Link clicável + seta para abrir submenu */}
                                  <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#fef0e8] hover:text-[#E07B39] transition-colors">
                                    <Link
                                      href={sub.href}
                                      className="flex-1 cursor-pointer"
                                    >
                                      {sub.nome}
                                    </Link>
                                    <button
                                      onClick={() =>
                                        setSubSubmenuAberto(
                                          subSubmenuAberto === sub.nome
                                            ? null
                                            : sub.nome
                                        )
                                      }
                                      className="text-xs px-1"
                                    >
                                      ▶
                                    </button>
                                  </div>

                                  {subSubmenuAberto === sub.nome && (
                                    <div className="absolute top-0 left-full ml-1 w-52 z-50">
                                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                                        {sub.submenu.map((subSub) => (
                                          <Link
                                            key={subSub.nome}
                                            href={subSub.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#fef0e8] hover:text-[#E07B39] transition-colors"
                                          >
                                            {subSub.nome}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={sub.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#fef0e8] hover:text-[#E07B39] transition-colors"
                                >
                                  {sub.nome}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="whitespace-nowrap text-black/90 transition-colors hover:text-[#E07B39]"
                  >
                    {item.nome}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 🔥 Menu Mobile */}
      {menuMobileAberto && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col py-2">
            {menuItems.map((item) => (
              <li key={item.nome} className="border-b border-gray-100 last:border-0">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileSubmenuAberto(
                          mobileSubmenuAberto === item.nome ? null : item.nome
                        )
                      }
                      className="w-full flex items-center justify-between px-6 py-3 text-left font-bold text-gray-800 hover:bg-[#fef0e8] transition-colors"
                    >
                      {item.nome}
                      <span className="text-xs">
                        {mobileSubmenuAberto === item.nome ? "▲" : "▼"}
                      </span>
                    </button>

                    {mobileSubmenuAberto === item.nome && (
                      <ul className="bg-gray-50 py-1">
                        {item.submenu.map((sub) => (
                          <li key={sub.nome}>
                            {sub.submenu ? (
                              <>
                                {/* 🔥 Link clicável + submenu no mobile */}
                                <Link
                                  href={sub.href}
                                  className="block px-10 py-2 text-sm text-gray-700 hover:bg-[#fef0e8] transition-colors font-medium"
                                >
                                  {sub.nome}
                                </Link>
                                <ul className="bg-gray-100">
                                  {sub.submenu.map((subSub) => (
                                    <li key={subSub.nome}>
                                      <Link
                                        href={subSub.href}
                                        className="block px-14 py-2 text-sm text-gray-600 hover:bg-[#fef0e8] transition-colors"
                                      >
                                        {subSub.nome}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <Link
                                href={sub.href}
                                className="block px-10 py-2 text-sm text-gray-700 hover:bg-[#fef0e8] transition-colors"
                              >
                                {sub.nome}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-6 py-3 font-bold text-gray-800 hover:bg-[#fef0e8] transition-colors"
                  >
                    {item.nome}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}