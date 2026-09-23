// app/projetos/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Galeria from "@/components/galeria/Galeria";

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
                  O <strong className="text-[#E07B39]">Projeto Purim</strong>{" "}
                  nasceu durante a pandemia, com a intenção de ajudar famílias
                  em situação de vulnerabilidade. O que começou como uma ação
                  emergencial se tornou um trabalho contínuo, que hoje é
                  referência em acolhimento e solidariedade.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O Purim atua fornecendo{" "}
                  <strong>alimentos, roupas e ovos</strong> a famílias carentes,
                  além de oferecer acolhimento e apoio espiritual. É um projeto
                  que devolve dignidade e esperança a quem mais precisa.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hoje, o Projeto Purim é uma das principais frentes do{" "}
                  <strong>Instituto Templo da Alegria (ITA)</strong>, e continua
                  crescendo para alcançar cada vez mais pessoas.
                </p>
              </div>
            </div>
          </div>

  {/* ============================================================ */}
{/* SEÇÃO 2: RESPONSÁVEL */}
{/* ============================================================ */}
<div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    Responsável
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-[#fef0e8] text-gray-800">
          <th className="px-4 py-3 rounded-tl-lg font-bold text-sm">Nome do responsável</th>
          <th className="px-4 py-3 font-bold text-sm">Cargo</th>
          <th className="px-4 py-3 rounded-tr-lg font-bold text-sm">Contato</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
          <td className="px-4 py-3 text-gray-800 font-medium">
            Reinaldo Bastos
          </td>
          <td className="px-4 py-3 text-gray-600 text-sm">
            Coordenação Geral
          </td>
          <td className="px-4 py-3">
            <a
              href="mailto:reinaldo.bastos@marinha.mil.br"
              className="text-[#E07B39] hover:text-[#c96a2e] hover:underline transition-colors text-sm break-all"
            >
              📧 exemplo@gmail.com
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
          <Galeria />

          {/* ============================================================ */}
          {/* SEÇÃO 4: COMO AJUDAR */}
          {/* ============================================================ */}
          <div className="bg-gray-800 rounded-2xl py-12 px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Faça parte do Projeto Purim
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
             O Projeto Purim é um das atividades do Instituto Tempo da Alegria. Conheça também:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/projetos"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">📚</span>
                <h3 className="font-bold text-gray-800">Projetos</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Momento charme e Oficina para meninos
                </p>
              </Link>
              <Link
                href="/celulas"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">🛠️</span>
                <h3 className="font-bold text-gray-800">Celulas</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Capacitação e acolhimento
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
