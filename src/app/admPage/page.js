"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminFotos from "@/components/admin/AdminFotos";
import AdminHero from "@/components/admin/AdminHero";
import AdminNoticias from "@/components/admin/AdminNoticias";
import AdminTabs from "@/components/admin/AdminTabs";

const initialHero = {
  titulo: "",
  subtitulo: "",
  descricao:
    "",
  textoBotao: "",
  imagem: "",
  button_link: "/noticiasPage",
};

const initialNoticias =[];
const initialFotos = [];

export default function AdminDashboard() {
  const [abaAtiva, setAbaAtiva] = useState("hero");
  const [hero, setHero] = useState(initialHero);
  const [noticias, setNoticias] = useState(initialNoticias);
  const [fotos] = useState(initialFotos);

  const handleHeroChange = (campo, valor) => {
    setHero((current) => ({ ...current, [campo]: valor }));
  };

  const handleNoticiaChange = (id, campo, valor) => {
    setNoticias((current) =>
      current.map((noticia) =>
        noticia.id === id ? { ...noticia, [campo]: valor } : noticia,
      ),
    );
  };

  const adicionarNoticia = () => {
    setNoticias((current) => [
      ...current,
      {
        id: Date.now(),
        titulo: "Nova notícia",
        subtitulo: "",
        conteudo: "",
        resumo: "",
        imagem: "",
        autor: "",
        destaque: false,
        tags: [],
        ativo: true,
      },
    ]);
  };

  const excluirNoticia = (id) => {
    setNoticias((current) => current.filter((noticia) => noticia.id !== id));
  };

  return (
    <div className="bg-[#f8f7f3] min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800">
              Painel Administrativo
            </h1>
            <p className="text-gray-600 mt-1">
              Gerencie todo o conteúdo do site
            </p>
          </div>
        </div>

        <AdminTabs activeTab={abaAtiva} onChange={setAbaAtiva} />
        {abaAtiva === "hero" && (
          <AdminHero hero={hero} onChange={handleHeroChange} />
        )}
        {abaAtiva === "noticias" && (
          <AdminNoticias
            noticias={noticias}
            onChange={handleNoticiaChange}
            onAdd={adicionarNoticia}
            onDelete={excluirNoticia}
          />
        )}
        
        {abaAtiva === "fotos" && <AdminFotos fotos={fotos} />}
      </main>
      <Footer />
    </div>
  );
}
