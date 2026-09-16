"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchNoticiaById } from "@/services/NoticiasServices";

function formatDate(value) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  }).format(date);
}

export default function NoticiaPage() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("ID da notícia não informado");
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    fetchNoticiaById(id, { signal: controller.signal })
      .then(setNoticia)
      .catch((loadError) => {
        if (loadError.name !== "AbortError") {
          setError(loadError.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f8f7f3] py-16 text-center">
          <p className="text-lg text-gray-600">Carregando notícia...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !noticia) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f8f7f3] py-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Não foi possível encontrar esta notícia.
          </p>
          <Link href="/noticiasPage" className="font-bold text-[#E07B39]">
            Voltar para notícias
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const imagem = noticia.imagem_url || "/images/placeholder.jpg";
  const texto = noticia.conteudo || noticia.resumo || "Esta notícia não possui conteúdo disponível.";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8f7f3] py-10 md:py-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/noticiasPage"
            className="inline-flex items-center text-sm font-bold text-[#E07B39] hover:text-[#c96a2e] transition-colors mb-8"
          >
            ← Voltar para notícias
          </Link>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-64 sm:h-80 md:h-[28rem] w-full">
              <Image
                src={imagem}
                alt={noticia.titulo}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-5">
                <span className="font-semibold text-[#E07B39]">
                  {noticia.categoria || "Notícias"}
                </span>
                {noticia.data && <span>•</span>}
                {noticia.data && <span>{formatDate(noticia.data)}</span>}
                {noticia.autor && <span>•</span>}
                {noticia.autor && <span>Por {noticia.autor}</span>}
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-5">
                {noticia.titulo}
              </h1>

              {noticia.subtitulo && (
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {noticia.subtitulo}
                </p>
              )}

              <div className="text-lg text-gray-700 leading-8 whitespace-pre-wrap">
                {texto}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
