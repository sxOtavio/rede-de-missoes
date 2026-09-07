"use client";

// components/MainContent.jsx
import Card from "./Card";
import { useEffect } from "react";
import { useNoticias } from "@/hooks/useNoticias";
export default function MainContent() {
  const { noticiasData, loadNoticiasData } = useNoticias();
  //---- Faz uma fetch no banco para ver os noticias existentes -------
  useEffect(() => {
    loadNoticiasData();
  }, [loadNoticiasData]);
  console.log("Dados do Noticias:", noticiasData);

  const noticiasEmDestaque = noticiasData
    .filter((noticia) => noticia.destaque === true && noticia.ativo !== false)
    .map((noticia) => ({
      id: noticia.id,
      nome: noticia.titulo,
      titulo: noticia.titulo,
      descricao: noticia.resumo || noticia.conteudo,
      imagem: noticia.imagem_url || "/images/heroProjetosSociais.png",
      link: noticia.slug
        ? `/noticias/${noticia.slug}`
        : `/noticias/${noticia.id}`,
    }));

  return (
    <main className="max-w-7xl bg-[#F3F4F8] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Cabeçalho */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Projeto <span className="text-purple-600">P</span>
          <span className="text-blue-600">U</span>
          <span className="text-green-600">R</span>
          <span className="text-yellow-600">I</span>
          <span className="text-red-600">M</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transformando vidas em Brasília e mudando o mundo 🌎
        </p>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full" />
      </div>
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Notícias em destaque
      </h2>
      {/* Grid de Cards */}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticiasEmDestaque.map((noticia) => (
          <Card key={noticia.id} projeto={noticia} />
        ))}
      </div>

      {/* Chamada para ação */}
      <div className="text-center mt-16 to-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Quer ajudar?</h2>
        <p className="text-gray-600 mb-4">
          Sua doação pode transformar vidas. Contribua com o Projeto Purim ou
          qualquer um dos nossos projetos.
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
