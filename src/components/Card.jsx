// components/Card.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ projeto }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Imagem */}
      <div className="relative h-48 w-full">
          <img
            src={projeto.imagem}
            alt={projeto.nome}
            loading="eager" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/images/placeholder.jpg'; // Fallback
            }}
          />
      </div>
      
      {/* Conteúdo */}
      <div className="p-6 m-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {projeto.titulo}
        </h3>
        <p className="text-gray-600 text-2sm leading-relaxed mb-4">
          {projeto.descricao}
        </p>
        
        {/* Botão */}
        <div className="inline-block px-5 py-2 bg-gradient-to-r ${projeto.cor} text-black font-semibold rounded-full text-sm transition-all hover:opacity-90 hover:scale-105">
          <Link
            href={projeto.link}
               >
            Saiba mais →
          </Link>
        </div>
      </div>
    </div>
  );
}