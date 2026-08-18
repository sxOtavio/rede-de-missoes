// app/projetos/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projetos } from "@/data/projetos";

export default function Projetos() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        {/* Container principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              Nossos Projetos
            </h1>
            <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os projetos que transformam vidas através da missão
            </p>
          </div>

          {/* Grid de projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projetos.map((projeto) => (
              <Card key={projeto.id} projeto={projeto} />
            ))}
          </div>

          {/* CTA Final */}
          <div className="mt-16 bg-gray-800 rounded-2xl py-12 px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Quer fazer parte dessa missão?
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Sua contribuição ajuda a transformar vidas e levar esperança a quem mais precisa.
            </p>
            <Link
              href="/doacoes"
              className="inline-block px-8 py-3 bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Faça uma Doação →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

// Componente Card
function Card({ projeto }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      {/* Imagem */}
      <div className="relative h-48 w-full">
        <Image
          src={projeto.imagem || "/images/projeto-placeholder.jpg"}
          alt={projeto.titulo}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute bottom-3 left-3">
          <span className="text-xs font-bold text-white bg-[#E07B39]/80 px-3 py-1 rounded-full">
            {projeto.categoria || "Projeto Social"}
          </span>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-6 bg-white transition-colors duration-300 group-hover:bg-[#fef0e8]">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {projeto.titulo}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {projeto.descricao}
        </p>
        
        <Link
          href={projeto.link || "/projetos"}
          className="inline-block px-5 py-2 bg-[#E07B39] hover:bg-[#c96a2e] text-white font-semibold rounded-lg text-sm transition-all shadow-md hover:shadow-lg"
        >
          Saiba mais →
        </Link>
      </div>
    </div>
  );
}