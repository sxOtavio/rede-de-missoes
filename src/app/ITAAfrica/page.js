// app/itaAfricaPage/page.js
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ItaAfricaPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              ITA África
            </h1>
            <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Missão além-fronteiras: levando esperança ao continente africano
            </p>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 1: HISTÓRIA */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Imagem */}
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <Image
                  src="/images/ita-africa.jpeg"
                  alt="ITA África"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-none"></div>
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <span className="bg-[#E07B39] text-white text-xs font-bold px-3 py-1 rounded-full">
                    ITA África
                  </span>
                </div>
              </div>

              {/* Texto */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Nossa Missão
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O <strong className="text-[#E07B39]">ITA África</strong> é a frente missionária internacional do Instituto Templo da Alegria. Nasceu do chamado de levar esperança, educação e assistência a comunidades em território africano que vivem em situação de grande vulnerabilidade.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Atuamos com projetos de apoio social, infraestrutura e evangelismo, promovendo transformação e dignidade onde há maior necessidade. Cada ação é realizada em parceria com líderes locais, respeitando a cultura e as necessidades de cada comunidade.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Acreditamos que o amor de Deus ultrapassa fronteiras e que cada gesto de solidariedade faz a diferença. O ITA África é a prova de que a missão não tem limites.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 2: O QUE FAZEMOS */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              O Que Fazemos
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Nossas ações na África são divididas em três frentes principais, todas com o mesmo propósito: transformar vidas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow border-t-4 border-[#E07B39]">
                <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍞</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Assistência Social
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Distribuição de alimentos, roupas e itens essenciais para
                  famílias em situação de vulnerabilidade.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow border-t-4 border-[#E07B39]">
                <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Educação
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Apoio a escolas e projetos educacionais, oferecendo material
                  e capacitação para crianças e jovens.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow border-t-4 border-[#E07B39]">
                <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⛪</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Evangelismo
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Levando a Palavra de Deus e plantando igrejas em comunidades
                  que ainda não foram alcançadas.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 4: OUTRAS ATIVIDADES */}
          {/* ============================================================ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Conheça também
            </h2>
            <p className="text-center text-gray-600 mb-8">
              O ITA África é uma das frentes do Instituto Templo da Alegria.
              Conheça também:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/projetoPage"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">🍞</span>
                <h3 className="font-bold text-gray-800">Projeto Purim</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Acolhimento e assistência social
                </p>
              </Link>
              <Link
                href="/ITAEstrutural"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">🏠</span>
                <h3 className="font-bold text-gray-800">ITA Estrutural</h3>
                <p className="text-sm text-gray-600 mt-2">
                  A sede em Brasília
                </p>
              </Link>
              <Link
                href="/igrejaAdanPage"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">⛪</span>
                <h3 className="font-bold text-gray-800">Igreja ADAN</h3>
                <p className="text-sm text-gray-600 mt-2">
                  A comunidade de fé que sustenta o ITA
                </p>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}