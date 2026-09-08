"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoticiaCard from "@/components/noticias/NoticiaCard";
import NoticiaDestaque from "@/components/noticias/NoticiaDestaque";
import NoticiasFilters from "@/components/noticias/NoticiasFilters";
import NoticiasHeader from "@/components/noticias/NoticiasHeader";
import NoticiasNewsletter from "@/components/noticias/NoticiasNewsletter";
import { useNoticias } from "@/hooks/useNoticias";

function normalizeNoticia(noticia) {
  return {
    id: noticia.id,
    titulo: noticia.titulo || noticia.title || "Sem título",
    resumo:
      noticia.resumo ||
      noticia.summary ||
      noticia.conteudo ||
      noticia.content ||
      "",
    imagem:
      noticia.imagem_url ||
      noticia.imagem ||
      noticia.image_url ||
      "/images/placeholder.jpg",
    data: noticia.data || noticia.created_at || "",
    categoria: noticia.categoria || noticia.category || "Notícias",
    autor: noticia.autor || noticia.author || "Equipe Rede de Missões",
    destaque: noticia.destaque === true,
    ativo: noticia.ativo !== false,
  };
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(date);
}

export default function NoticiasPage() {
  const { noticiasData, loading, error, loadNoticiasData } = useNoticias();
  const [categoria, setCategoria] = useState("Todas");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    loadNoticiasData();
  }, [loadNoticiasData]);

  const noticias = useMemo(
    () =>
      noticiasData
        .map(normalizeNoticia)
        .filter((noticia) => noticia.ativo)
        .map((noticia) => ({
          ...noticia,
          data: formatDate(noticia.data),
        })),
    [noticiasData],
  );

  const categorias = useMemo(
    () => ["Todas", ...new Set(noticias.map((noticia) => noticia.categoria))],
    [noticias],
  );

  const noticiasFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return noticias.filter((noticia) => {
      const matchCategoria =
        categoria === "Todas" || noticia.categoria === categoria;
      const matchBusca =
        !termo ||
        `${noticia.titulo} ${noticia.resumo}`.toLowerCase().includes(termo);
      return matchCategoria && matchBusca;
    });
  }, [busca, categoria, noticias]);

  const noticiaDestaque =
    noticiasFiltradas.find((noticia) => noticia.destaque) ||
    noticiasFiltradas[0];
  const noticiasNormais = noticiasFiltradas.filter(
    (noticia) => noticia.id !== noticiaDestaque?.id,
  );

  return (
    <>
      <Header />
      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NoticiasHeader search={busca} onSearch={setBusca} />
          <NoticiasFilters
            categories={categorias}
            activeCategory={categoria}
            onChange={setCategoria}
          />

          {loading ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">Carregando notícias...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                Não foi possível carregar as notícias.
              </p>
            </div>
          ) : noticias.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">📭</p>
              <p className="text-gray-600 text-lg">
                Nenhuma notícia cadastrada.
              </p>
            </div>
          ) : noticiasFiltradas.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">📭</p>
              <p className="text-gray-600 text-lg">
                Nenhuma notícia encontrada para este filtro.
              </p>
            </div>
          ) : (
            <>
              <NoticiaDestaque noticia={noticiaDestaque} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {noticiasNormais.map((noticia) => (
                  <NoticiaCard key={noticia.id} noticia={noticia} />
                ))}
              </div>
            </>
          )}

          <NoticiasNewsletter />
        </div>
      </main>
      <Footer />
    </>
  );
}
