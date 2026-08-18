// app/noticias/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Dados das notícias
const noticias = [
  {
    id: 1,
    titulo: "Escola Tempo de Alegria completa 15 anos",
    resumo: "Celebramos 15 anos de transformação na vida de centenas de crianças em situação de vulnerabilidade.",
    conteudo: "A Escola Tempo de Alegria completou 15 anos de existência...",
    imagem: "/images/noticia1.jpg",
    data: "15 de Agosto, 2024",
    categoria: "Educação",
    autor: "Pastor João Silva",
    destaque: true
  },
  {
    id: 2,
    titulo: "Missão Urbana alcança mais de 500 pessoas",
    resumo: "Projeto de evangelismo e ação social levou esperança a comunidades carentes do Distrito Federal.",
    conteudo: "Neste último final de semana, nossa equipe de missões...",
    imagem: "/images/noticia2.jpg",
    data: "10 de Agosto, 2024",
    categoria: "Missões",
    autor: "Missionária Maria Santos",
    destaque: false
  },
  {
    id: 3,
    titulo: "Nova turma de voluntários é formada",
    resumo: "Programa de capacitação preparou 20 novos voluntários para atuar nos projetos sociais.",
    conteudo: "No último sábado, formamos mais uma turma...",
    imagem: "/images/noticia3.jpg",
    data: "5 de Agosto, 2024",
    categoria: "Voluntariado",
    autor: "Coordenador Carlos Lima",
    destaque: false
  },
  {
    id: 4,
    titulo: "Campanha de arrecadação de alimentos",
    resumo: "Campanha solidária arrecadou mais de 2 toneladas de alimentos para famílias carentes.",
    conteudo: "A campanha de arrecadação de alimentos...",
    imagem: "/images/noticia4.jpg",
    data: "1 de Agosto, 2024",
    categoria: "Ação Social",
    autor: "Equipe de Projetos Sociais",
    destaque: false
  },
  {
    id: 5,
    titulo: "Culto de Celebração e Ação de Graças",
    resumo: "Evento especial reuniu mais de 300 pessoas em um culto de louvor e gratidão.",
    conteudo: "Realizamos um culto especial para celebrar...",
    imagem: "/images/noticia5.jpg",
    data: "25 de Julho, 2024",
    categoria: "Eventos",
    autor: "Pastor Pedro Oliveira",
    destaque: false
  },
  {
    id: 6,
    titulo: "Parceria com igrejas locais fortalece missão",
    resumo: "Nova parceria com igrejas do DF amplia alcance dos projetos missionários.",
    conteudo: "Estabelecemos uma nova parceria com igrejas...",
    imagem: "/images/noticia6.jpg",
    data: "20 de Julho, 2024",
    categoria: "Parcerias",
    autor: "Coordenador de Missões",
    destaque: false
  }
];

// Categorias únicas
const categorias = ["Todas", ...new Set(noticias.map(n => n.categoria))];

export default function NoticiasPage() {
  const [categoria, setCategoria] = useState("Todas");
  const [busca, setBusca] = useState("");

  // Filtrar notícias
  const noticiasFiltradas = noticias.filter(noticia => {
    const matchCategoria = categoria === "Todas" || noticia.categoria === categoria;
    const matchBusca = noticia.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                       noticia.resumo.toLowerCase().includes(busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  // Notícia em destaque (a mais recente com destaque: true)
  const noticiaDestaque = noticias.find(n => n.destaque === true) || noticias[0];

  // Notícias normais (sem a de destaque)
  const noticiasNormais = noticiasFiltradas.filter(n => n.id !== noticiaDestaque.id);

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              Notícias
            </h1>
            <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Fique por dentro das últimas novidades e eventos da Rede de Missões ADAN
            </p>
          </div>

          {/* Busca */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar notícias..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none bg-white"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                🔍
              </span>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  categoria === cat
                    ? "bg-[#E07B39] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Notícia em Destaque */}
          {noticiasFiltradas.length > 0 && (
            <div className="mb-12">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={noticiaDestaque.imagem || "/images/placeholder.jpg"}
                      alt={noticiaDestaque.titulo}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#E07B39] text-white text-xs font-bold px-3 py-1 rounded-full">
                      🔥 Destaque
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                      <span>{noticiaDestaque.categoria}</span>
                      <span>•</span>
                      <span>{noticiaDestaque.data}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                      {noticiaDestaque.titulo}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {noticiaDestaque.resumo}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Por {noticiaDestaque.autor}
                    </p>
                    <Link
                      href={`/noticias/${noticiaDestaque.id}`}
                      className="inline-flex items-center text-[#E07B39] font-bold hover:text-[#c96a2e] transition-colors"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid de Notícias */}
          {noticiasNormais.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticiasNormais.map((noticia) => (
                <div
                  key={noticia.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={noticia.imagem || "/images/placeholder.jpg"}
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
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">📭</p>
              <p className="text-gray-600 text-lg">
                Nenhuma notícia encontrada para esta categoria.
              </p>
            </div>
          )}

          {/* Newsletter */}
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
              <button className="bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold px-6 py-3 rounded-lg transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}