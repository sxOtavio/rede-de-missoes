// app/sobre/page.tsx
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function QuemSomos() {
  return (
    <div className="bg-[#f8f7f3] min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Quem Somos
          </h1>
          <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça o Instituto Tempo de Alegria, o Projeto Purim e as frentes
            de atuação que transformam vidas em Brasília e no mundo.
          </p>
        </div>

        {/* ============================================================ */}
        {/* SEÇÃO 1: INSTITUTO TEMPLO DA ALEGRIA */}
        {/* ============================================================ */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Título da Seção */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-[#E07B39] pl-4">
              Instituto Tempo de Alegria (ITA)
            </h2>
          </div>

          {/* Texto do ITA */}
          <div className="mb-4">
            <p className="text-lg leading-relaxed text-gray-700">
              O{" "}
              <strong className="text-[#E07B39]">
                Instituto Tempo de Alegria (ITA)
              </strong>{" "}
              é uma organização social e missionária que atua em Brasília e em
              frentes internacionais, levando esperança, acolhimento e
              desenvolvimento a comunidades em situação de vulnerabilidade.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg leading-relaxed text-gray-700">
              Nossa missão é devolver dignidade e esperança a cada pessoa,
              acreditando que o amor de Deus se faz presente através de ações
              concretas de solidariedade.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg leading-relaxed text-gray-700">
              O ITA acredita que a transformação social acontece quando fé e
              ação caminham juntas. Por isso, atuamos em diferentes frentes para
              alcançar crianças, jovens, adultos e famílias inteiras.
            </p>
          </div>

          {/* Frentes de atuação do ITA */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Frentes de atuação:
            </h3>
            <ul className="space-y-3 ml-6">
              <li className="text-lg leading-relaxed text-gray-700 flex items-start gap-3">
                <span className="text-[#E07B39] text-xl">✦</span>
                <span>
                  <strong className="text-gray-800">ITA Estrutural</strong> —
                  sede em Brasília com projetos sociais
                </span>
              </li>
              <li className="text-lg leading-relaxed text-gray-700 flex items-start gap-3">
                <span className="text-[#E07B39] text-xl">✦</span>
                <span>
                  <strong className="text-gray-800">ITA África</strong> — frente
                  missionária internacional
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SEÇÃO: ATIVIDADES DO ITA */}
        {/* ============================================================ */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-[#E07B39] pl-4">
              Atividades do Instituto Tempo da Alegria
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            O ITA abriga diferentes frentes de atuação. Conheça cada
            uma delas e descubra como você pode fazer parte dessa missão.
          </p>

          {/* Grid de blocos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bloco: ITA África */}
            <Link
              href="/ITAAfrica"
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-[#fef0e8] rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#E07B39] transition-colors">
                  ITA África
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Acolhimento e assistência a famílias em situação de
                  vulnerabilidade. Fornece alimentos, roupas e apoio espiritual.
                </p>
                <span className="inline-flex items-center text-[#E07B39] font-bold text-sm group-hover:gap-2 transition-all">
                  Saiba mais →
                </span>
              </div>
            </Link>

            {/* Bloco: ITA Estrutural */}
            <Link
              href="/ITAEstrutural"
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-[#fef0e8] rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#E07B39] transition-colors">
                  ITA Estrutural
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A sede em Brasília que abriga os projetos sociais, oficinas
                  para adultos e atividades para crianças.
                </p>
                <span className="inline-flex items-center text-[#E07B39] font-bold text-sm group-hover:gap-2 transition-all">
                  Saiba mais →
                </span>
              </div>
            </Link>

            {/* Bloco: Igreja ADAN */}
            <Link
              href="https://igrejaadan.com/"
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-[#fef0e8] rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">⛪</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#E07B39] transition-colors">
                  Igreja ADAN
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A comunidade de fé que sustenta e impulsiona todos os projetos
                  sociais do ITA Estrutural.
                </p>
                <span className="inline-flex items-center text-[#E07B39] font-bold text-sm group-hover:gap-2 transition-all">
                  Saiba mais →
                </span>
              </div>
            </Link>
          </div>

        </div>

        {/* ============================================================ */}
        {/* SEÇÃO 3: VALORES */}
        {/* ============================================================ */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossos Valores
          </h2>

          <div className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center transition-all duration-300 hover:shadow-lg hover:border-t-4 hover:border-[#E07B39] hover:scale-105">
              <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🙏</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fé</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Acreditamos que a fé em Deus é o fundamento de tudo o que
                fazemos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center transition-all duration-300 hover:shadow-lg hover:border-t-4 hover:border-[#E07B39] hover:scale-105">
              <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Solidariedade
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Estendemos a mão ao próximo, levando esperança a quem precisa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center transition-all duration-300 hover:shadow-lg hover:border-t-4 hover:border-[#E07B39] hover:scale-105">
              <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Comunidade
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Construímos uma rede de apoio que acolhe e fortalece cada
                pessoa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
