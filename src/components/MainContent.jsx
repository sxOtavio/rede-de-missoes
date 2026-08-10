// components/MainContent.jsx
import Card from './Card';
import { projetos } from '@/data/projetos';

export default function MainContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Cabeçalho */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Rede Missões <span className="text-blue-600">ADAN</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transformando vidas em Brasília e para o mundo 🌎
        </p>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid de Cards */}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetos.map((projeto) => (
          <Card key={projeto.id} projeto={projeto} />
        ))}
      </div>

      {/* Chamada para ação */}
      <div className="text-center mt-16 to-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Quer ajudar?
        </h2>
        <p className="text-gray-600 mb-4">
          Sua doação pode transformar vidas. Contribua com o Projeto Purim ou qualquer um dos nossos projetos.
        </p>
        <a
          href="/como-ajudar"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
        >
          Como ajudar →
        </a>
      </div>
    </main>
  );
}