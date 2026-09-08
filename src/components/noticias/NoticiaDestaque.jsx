import Image from "next/image";
import Link from "next/link";

export default function NoticiaDestaque({ noticia }) {
  return (
    <div className="mb-12">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto">
            <Image
              src={noticia.imagem}
              alt={noticia.titulo}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#E07B39] text-white text-xs font-bold px-3 py-1 rounded-full">
              🔥 Destaque
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
              <span>{noticia.categoria}</span>
              <span>•</span>
              <span>{noticia.data}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {noticia.titulo}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {noticia.resumo}
            </p>
            <p className="text-sm text-gray-500 mb-4">Por {noticia.autor}</p>
            <Link
              href={`/noticias/${noticia.id}`}
              className="inline-flex items-center text-[#E07B39] font-bold hover:text-[#c96a2e] transition-colors"
            >
              Ler mais →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
