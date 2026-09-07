// app/sobre/page.tsx
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";   
import Image from "next/image";
import Link from "next/link";

export default function QuemSomos() {
  return (
    <div className="bg-[#f8f7f3] min-h-screen">
      <Header/>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Quem Somos
          </h1>
          <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça o Instituto Templo da Alegria, o Projeto Purim e as frentes de atuação que transformam vidas em Brasília e no mundo.
          </p>
        </div>

        {/* ============================================================ */}
        {/* SEÇÃO 1: INSTITUTO TEMPLO DA ALEGRIA */}
        {/* ============================================================ */}
        <div className="max-w-4xl mx-auto mb-16">
          
          {/* Título da Seção */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-[#E07B39] pl-4">
              Instituto Templo da Alegria (ITA)
            </h2>
          </div>

          {/* Texto do ITA */}
          <div className="mb-4">
            <p className="text-lg leading-relaxed text-gray-700">
              O <strong className="text-[#E07B39]">Instituto Templo da Alegria (ITA)</strong> é uma organização social e missionária que atua em Brasília e em frentes internacionais, levando esperança, acolhimento e desenvolvimento a comunidades em situação de vulnerabilidade.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg leading-relaxed text-gray-700">
              Nossa missão é devolver dignidade e esperança a cada pessoa, acreditando que o amor de Deus se faz presente através de ações concretas de solidariedade. O ITA é o guarda-chuva que abriga diversos projetos transformadores.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg leading-relaxed text-gray-700">
              O ITA acredita que a transformação social acontece quando fé e ação caminham juntas. Por isso, atuamos em diferentes frentes para alcançar crianças, jovens, adultos e famílias inteiras.
            </p>
          </div>

          {/* Frentes de atuação do ITA */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Frentes de atuação:</h3>
            <ul className="space-y-3 ml-6">
              <li className="text-lg leading-relaxed text-gray-700 flex items-start gap-3">
                <span className="text-[#E07B39] text-xl">✦</span>
                <span><strong className="text-gray-800">ITA Estrutural</strong> — sede em Brasília com projetos sociais</span>
              </li>
              <li className="text-lg leading-relaxed text-gray-700 flex items-start gap-3">
                <span className="text-[#E07B39] text-xl">✦</span>
                <span><strong className="text-gray-800">ITA África</strong> — frente missionária internacional</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SEÇÃO 2: PROJETO PURIM */}
        {/* ============================================================ */}
        <div className="max-w-4xl mx-auto mb-16">
          
          {/* Título da Seção */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-[#E07B39] pl-4">
              Projeto Purim
            </h2>
          </div>

          {/* Texto do Purim */}
          <div className="mb-4">
            <p className="text-lg leading-relaxed text-gray-700">
              O <strong className="text-[#E07B39]">Projeto Purim</strong> nasceu durante a pandemia, com a intenção de ajudar famílias em situação de vulnerabilidade. 
              O que começou como uma ação emergencial se tornou um trabalho contínuo, que hoje é referência em acolhimento e solidariedade.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg leading-relaxed text-gray-700">
              O Purim atua fornecendo <strong>alimentos, roupas e ovos</strong> a famílias carentes, além de oferecer acolhimento e apoio espiritual. 
              É um projeto que devolve dignidade e esperança a quem mais precisa.
            </p>
          </div>

          {/* Responsáveis */}
          <div className="mt-6 p-6 bg-white rounded-2xl shadow-md border-l-4 border-[#E07B39]">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Responsáveis</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-[#E07B39]">●</span>
                <span><strong>Coordenação Geral:</strong> Reinaldo Bastos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E07B39]">●</span>
                <span><strong>Líderes:</strong> Breno, Márcia e Flávio</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SEÇÃO 3: VALORES */}
        {/* ============================================================ */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossos Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center transition-all duration-300 hover:shadow-lg hover:border-t-4 hover:border-[#E07B39] hover:scale-105">
              <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🙏</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fé</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Acreditamos que a fé em Deus é o fundamento de tudo o que fazemos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center transition-all duration-300 hover:shadow-lg hover:border-t-4 hover:border-[#E07B39] hover:scale-105">
              <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Solidariedade</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Estendemos a mão ao próximo, levando esperança a quem precisa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center transition-all duration-300 hover:shadow-lg hover:border-t-4 hover:border-[#E07B39] hover:scale-105">
              <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comunidade</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Construímos uma rede de apoio que acolhe e fortalece cada pessoa.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SEÇÃO 4: NÚMEROS */}
        {/* ============================================================ */}
        <div className="mt-20 mb-8 bg-gray-800 rounded-2xl py-12 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="transition-all duration-300 hover:scale-110">
              <p className="text-4xl font-black">2</p>
              <p className="text-sm font-medium text-gray-300">Casas de acolhimento</p>
            </div>
            <div className="transition-all duration-300 hover:scale-110">
              <p className="text-4xl font-black">140+</p>
              <p className="text-sm font-medium text-gray-300">Vidas transformadas</p>
            </div>
            <div className="transition-all duration-300 hover:scale-110">
              <p className="text-4xl font-black">20</p>
              <p className="text-sm font-medium text-gray-300">Meta de casas</p>
            </div>
            <div className="transition-all duration-300 hover:scale-110">
              <p className="text-4xl font-black">1000</p>
              <p className="text-sm font-medium text-gray-300">Meta de atendidos</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}