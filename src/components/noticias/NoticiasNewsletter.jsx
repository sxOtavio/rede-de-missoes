export default function NoticiasNewsletter() {
  return (
    <div className="mt-16 bg-gray-800 rounded-2xl py-12 px-6 text-center text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        📬 Receba nossas notícias
      </h2>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Cadastre-se para receber atualizações sobre nossos projetos e eventos.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Seu melhor email"
          className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#E07B39] outline-none"
        />
        <button
          type="button"
          className="bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold px-6 py-3 rounded-lg transition-colors"
        >
          Inscrever
        </button>
      </div>
    </div>
  );
}
