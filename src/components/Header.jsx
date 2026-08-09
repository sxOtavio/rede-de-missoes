"use client";

export default function Header() {
  return (
    <header className="w-full h-30 bg-blue-600 text-white" style={{ padding: '0 2rem' }}>
      <div className="flex w-full h-full items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-30 w-auto" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Rede de Missões
          </h1>
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex gap-10 text-lg md:text-xl lg:text-2xl font-bold tracking-wide">
            <li className="cursor-pointer hover:text-blue-200 transition-colors">Home</li>
            <li className="cursor-pointer hover:text-blue-200 transition-colors">Quem somos</li>
            <li className="cursor-pointer hover:text-blue-200 transition-colors">Ministérios</li>
            <li className="cursor-pointer hover:text-blue-200 transition-colors">Projetos</li>
            <li className="cursor-pointer hover:text-blue-200 transition-colors">Doações</li>
            <li className="cursor-pointer hover:text-blue-200 transition-colors">Contato</li>
            <li className="cursor-pointer hover:text-blue-200 transition-colors">Notícias</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}