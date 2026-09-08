export default function NoticiasHeader({ search, onSearch }) {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-gray-800">
          Notícias
        </h1>
        <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full" />
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Fique por dentro das últimas novidades e eventos da Rede de Missões
          ADAN
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <input
            type="search"
            placeholder="Buscar notícias..."
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none bg-white"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            🔍
          </span>
        </div>
      </div>
    </>
  );
}
