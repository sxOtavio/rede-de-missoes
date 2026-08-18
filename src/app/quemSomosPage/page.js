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
        
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Quem Somos
          </h1>
          <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça a história do Projeto Purim e da Rede Missões ADAN
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/sobre.jpg"
              alt="Projeto Purim e Rede Missões ADAN"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-bold">Rede Missões ADAN | Projeto Purim</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nossa História
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O <strong>Projeto Purim</strong> é uma das frentes de atuação da <strong>Rede de Missões ADAN</strong>, que nasceu do chamado para levar esperança, alimento e espiritualidade a crianças e pessoas em situação de vulnerabilidade social.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nossa missão é levar <strong>amor, acolhimento e a mensagem de fé</strong> a quem mais precisa, através de ações que envolvem doação de alimentos, apoio espiritual e assistência social. Acreditamos que cada gesto de solidariedade transforma vidas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Trabalhamos para devolver a dignidade e a esperança a pessoas marginalizadas pela sociedade, construindo uma rede de apoio que acolhe, fortalece e reintegra cada pessoa à comunidade.
            </p>
            <Link
              href="/projetosPage"
              className="inline-block px-6 py-3 bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Saiba Mais →
            </Link>
          </div>
        </div>

        {/* Valores */}
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

        {/* Números */}
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