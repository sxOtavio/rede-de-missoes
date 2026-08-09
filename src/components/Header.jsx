"use client";

const menuItems = [
  'Home',
  'Quem somos',
  'Ministérios',
  'Projetos',
  'Doações',
  'Contato',
  'Notícias',
];

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-3 md:flex-row md:justify-between md:gap-0 md:px-6 md:py-0 lg:px-8">
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <img src="/logo.png" alt="logo" className="h-14 w-auto sm:h-16 md:h-20 lg:h-24" />
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
            Rede de Missões
          </h1>
        </div>

        <nav className="w-full overflow-x-auto md:w-auto">
          <ul className="flex min-w-max items-center justify-center gap-3 text-sm font-bold tracking-wide sm:gap-4 sm:text-base md:gap-5 md:text-lg lg:gap-8 lg:text-xl">
            {menuItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer whitespace-nowrap text-white/90 transition-colors hover:text-blue-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}