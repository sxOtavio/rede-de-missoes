// app/sobre/page.tsx
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";   
import Image from "next/image";
import Link from "next/link";

export default function QuemSomos() {
  return (
    
    <div>
    <Header/>
      {/* Container principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900">
            Quem Somos
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça a história e missão da Rede de Missões ADAN
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/sobre.jpg"
              alt="Rede de Missões ADAN"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-bold">Há 15 anos transformando vidas</p>
            </div>
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Nossa História
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>Rede de Missões ADAN</strong> nasceu do sonho de um grupo de 
              missionários que acredita que o amor de Deus transforma vidas. 
              Começamos com pequenos projetos em comunidades carentes e hoje 
              alcançamos milhares de pessoas em todo o Brasil.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nossa missão é propagar o evangelho através de ações sociais, 
              educação e assistência espiritual, levando esperança e amor a 
              quem mais precisa.
            </p>

            {/* Botão */}
            <Link
              href="/projetos"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Conheça Nossos Projetos →
            </Link>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Nossos Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🙏</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fé</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Acreditamos que a fé em Deus é o fundamento de tudo o que fazemos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Amor</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Servimos com amor incondicional, imitando o coração de Cristo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Solidariedade</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Estendemos a mão ao próximo, levando esperança a quem precisa.
              </p>
            </div>
          </div>
        </div>

        {/* Números */}
        <div className="mt-20 m-5 bg-blue-600 rounded-2xl py-12 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-black">15+</p>
              <p className="text-sm font-medium text-blue-200">Anos de história</p>
            </div>
            <div>
              <p className="text-4xl font-black">200+</p>
              <p className="text-sm font-medium text-blue-200">Crianças atendidas</p>
            </div>
            <div>
              <p className="text-4xl font-black">10+</p>
              <p className="text-sm font-medium text-blue-200">Comunidades</p>
            </div>
            <div>
              <p className="text-4xl font-black">50+</p>
              <p className="text-sm font-medium text-blue-200">Missionários</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}