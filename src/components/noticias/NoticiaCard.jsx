import Image from "next/image";
import Link from "next/link";

export default function NoticiaCard({ noticia }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={noticia.imagem}
          alt={noticia.titulo}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3 bg-[#E07B39] text-white text-xs font-bold px-3 py-1 rounded-full">
          {noticia.categoria}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <span>{noticia.data}</span>
          <span>•</span>
          <span>Por {noticia.autor}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {noticia.titulo}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {noticia.resumo}
        </p>
        <Link
          href={`/noticias/${noticia.id}`}
          className="text-[#E07B39] font-bold text-sm hover:text-[#c96a2e] transition-colors inline-flex items-center"
        >
          Ler mais →
        </Link>
      </div>
    </article>
  );
}
