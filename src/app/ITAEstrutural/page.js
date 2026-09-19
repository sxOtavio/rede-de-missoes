// app/itaEstruturalPage/page.js
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ItaEstruturalPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              ITA Estrutural
            </h1>
            <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A sede do Instituto Tempo da Alegria em Brasília
            </p>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 1: HISTÓRIA DO ITA */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Imagem */}
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <Image
                  src="/images/ita-estrutural.jpeg"
                  alt="ITA Estrutural"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-none"></div>
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <span className="bg-[#E07B39] text-white text-xs font-bold px-3 py-1 rounded-full">
                    ITA Estrutural
                  </span>
                </div>
              </div>

              {/* Texto */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Nossa História
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O <strong className="text-[#E07B39]">Instituto Tempo da Alegria (ITA)</strong> nasceu do sonho de transformar vidas através da fé e da solidariedade. O que começou como uma pequena iniciativa missionária em Brasília se tornou um projeto que acolhe pessoas em situação de vulnerabilidade, oferecendo mais do que assistência oferecendo dignidade e esperança.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A sede do <strong>ITA Estrutural</strong> é o coração da organização, de onde partem todas as ações sociais, missionárias e de acolhimento. É daqui que nascem os projetos que transformam vidas em Brasília e no mundo.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nossa missão é devolver a esperança a quem precisa e mostrar que o amor de Deus se faz presente através de ações concretas. O ITA é o guarda-chuva que abriga diversos projetos transformadores.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 2: FRENTES DE ATUAÇÃO */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Frentes de Atuação
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              O ITA Estrutural abriga diferentes projetos, cada um com seu propósito, mas todos com a mesma missão: transformar vidas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <Link
                href="/projetoPurim"
                className="group p-6 bg-gray-50 rounded-xl hover:bg-[#fef0e8] hover:shadow-md transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <p className="text-[#E07B39] text-4xl mb-3">🍞</p>
                <p className="font-bold text-gray-800 group-hover:text-[#E07B39] transition-colors">
                  Projeto Purim
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Acolhimento e assistência social
                </p>
              </Link>
              <Link
                href="/atividadesKids"
                className="group p-6 bg-gray-50 rounded-xl hover:bg-[#fef0e8] hover:shadow-md transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <p className="text-[#E07B39] text-4xl mb-3">📚</p>
                <p className="font-bold text-gray-800 group-hover:text-[#E07B39] transition-colors">
                  Atividades Kid's
                </p>
                <p className="text-sm text-gray-500 mt-1">
                   Projeto "Charme" e reforço
                </p>
              </Link>
                            <Link
                href="/celulasAdultos"
                className="group p-6 bg-gray-50 rounded-xl hover:bg-[#fef0e8] hover:shadow-md transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <p className="text-[#E07B39] text-4xl mb-3">🛠️</p>
                <p className="font-bold text-gray-800 group-hover:text-[#E07B39] transition-colors">
                  Celulas para Adultos
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Capacitação e acolhimento
                </p>
              </Link>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 4: COMO AJUDAR */}
          {/* ============================================================ */}
          <div className="bg-gray-800 rounded-2xl py-12 px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Faça parte do ITA Estrutural
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Sua contribuição ajuda a transformar vidas e levar esperança a
              quem mais precisa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/doacoesPage"
                className="inline-block px-8 py-3 bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Faça uma Doação →
              </Link>
              <Link
                href="/contatoPage"
                className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-gray-800 font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Seja Voluntário →
              </Link>
            </div>
          </div>
          {/* ============================================================ */}
          {/* SEÇÃO 6: OUTRAS ATIVIDADES */}
          {/* ============================================================ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Conheça também
            </h2>
            <p className="text-center text-gray-600 mb-8">
              O ITA Estrutural é uma das frentes do Instituto Templo da Alegria.
              Conheça também:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/projetoPurim"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">🌍</span>
                <h3 className="font-bold text-gray-800">ITA Africa</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Acolhimento e assistência social
                </p>
              </Link>
              <Link
                href="https://igrejaadan.com/"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">⛪</span>
                <h3 className="font-bold text-gray-800">Igreja ADAN</h3>
                <p className="text-sm text-gray-600 mt-2">
                  A comunidade de fé que sustenta o ITA
                </p>
              </Link>
              <Link
                href="/doacoesPage"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">🤝</span>
                <h3 className="font-bold text-gray-800">Faça uma Doação</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Ajude a transformar vidas
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