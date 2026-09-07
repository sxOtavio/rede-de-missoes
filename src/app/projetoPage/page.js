// app/projetos/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Projetos() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              Projeto Purim
            </h1>
            <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Acolhendo vidas, restaurando esperanças
            </p>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 1: HISTÓRIA DO PURIM */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Imagem */}
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <Image
                  src="/images/projeto-purim.jpeg"
                  alt="Projeto Purim"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-none"></div>
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <span className="bg-[#E07B39] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Projeto Purim
                  </span>
                </div>
              </div>

              {/* Texto */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Nossa História
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O <strong className="text-[#E07B39]">Projeto Purim</strong> nasceu durante a pandemia, com a intenção de ajudar famílias em situação de vulnerabilidade. O que começou como uma ação emergencial se tornou um trabalho contínuo, que hoje é referência em acolhimento e solidariedade.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O Purim atua fornecendo <strong>alimentos, roupas e ovos</strong> a famílias carentes, além de oferecer acolhimento e apoio espiritual. É um projeto que devolve dignidade e esperança a quem mais precisa.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hoje, o Projeto Purim é uma das principais frentes do <strong>Instituto Templo da Alegria (ITA)</strong>, e continua crescendo para alcançar cada vez mais pessoas.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 2: RESPONSÁVEIS */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Responsáveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-[#E07B39] text-3xl mb-2">👤</p>
                <p className="font-bold text-gray-800">Reinaldo Bastos</p>
                <p className="text-sm text-gray-500">Coordenação Geral</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-[#E07B39] text-3xl mb-2">👤</p>
                <p className="font-bold text-gray-800">Breno</p>
                <p className="text-sm text-gray-500">Líder</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-[#E07B39] text-3xl mb-2">👤</p>
                <p className="font-bold text-gray-800">Márcia</p>
                <p className="text-sm text-gray-500">Líder</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-[#E07B39] text-3xl mb-2">👤</p>
                <p className="font-bold text-gray-800">Flávio</p>
                <p className="text-sm text-gray-500">Líder</p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 3: GALERIA DE FOTOS */}
          {/* ============================================================ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Galeria de Fotos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={`/images/purim-galeria-${item}.jpg`}
                    alt={`Projeto Purim - Foto ${item}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
              {/* Placeholder para fotos que ainda não chegaram */}
              <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-400 text-sm text-center px-2">
                  + Fotos <br /> em breve
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">
              Fotos do acervo do Projeto Purim. Mais imagens em breve.
            </p>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 4: COMO AJUDAR */}
          {/* ============================================================ */}
          <div className="bg-gray-800 rounded-2xl py-12 px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Faça parte do Projeto Purim
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Sua contribuição ajuda a transformar vidas e levar esperança a quem mais precisa.
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
          {/* SEÇÃO 5: OUTROS PROJETOS DO ITA */}
          {/* ============================================================ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Conheça também
            </h2>
            <p className="text-center text-gray-600 mb-8">
              O Projeto Purim é um dos projetos do Instituto Templo da Alegria. Conheça também:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl block mb-3">📚</span>
                <h3 className="font-bold text-gray-800">Atividades Kid's</h3>
                <p className="text-sm text-gray-600 mt-2">Projeto "Charme" e aulas de reforço</p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl block mb-3">🛠️</span>
                <h3 className="font-bold text-gray-800">Oficinas para Adultos</h3>
                <p className="text-sm text-gray-600 mt-2">Capacitação e acolhimento</p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl block mb-3">🌍</span>
                <h3 className="font-bold text-gray-800">ITA África</h3>
                <p className="text-sm text-gray-600 mt-2">Frente missionária internacional</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}