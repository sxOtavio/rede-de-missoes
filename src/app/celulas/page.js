// app/celulas/page.js
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CelulasPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              Células
            </h1>
            <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comunhão, acolhimento e crescimento para todas as idades
            </p>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 1: CÉLULA DE ADULTOS */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-auto min-h-[300px] bg-gray-100">
                <Image
                  src="/icones/celula.jpeg"
                  alt="Célula de Adultos"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-none"></div>
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <span className="bg-[#E07B39] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Célula de Adultos
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Célula de Adultos
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A <strong className="text-[#E07B39]">Célula de Adultos</strong> é um espaço de comunhão, estudo da Palavra e oração, onde homens e mulheres se reúnem para compartilhar a vida e crescer juntos na fé.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cada encontro é preparado com carinho para que você se sinta em casa, em um ambiente familiar e acolhedor.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  É um lugar de pertencimento, onde ninguém caminha sozinho.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Todos os sábados às 15h
                </p>
              </div>
            </div>

            {/* Tabela de responsáveis */}
            <div className="overflow-x-auto p-6">
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
                    <td className="px-4 py-3 text-gray-800 font-medium">Breno Santana </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">Lider</td>
                    <td className="px-4 py-3">
                      <a href="mailto:reinaldo.bastos@marinha.mil.br" className="text-[#E07B39] hover:text-[#c96a2e] hover:underline transition-colors text-sm break-all">
                        📧 exemplo@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
                      <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-800 font-medium">Thamires Fontenele  </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">Lider</td>
                    <td className="px-4 py-3">
                      <a href="mailto:reinaldo.bastos@marinha.mil.br" className="text-[#E07B39] hover:text-[#c96a2e] hover:underline transition-colors text-sm break-all">
                        📧 exemplo@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 2: CÉLULA KIDS I */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-auto min-h-[300px] bg-gray-100">
                <Image
                  src="/icones/celula.jpeg"
                  alt="Célula Kids I"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-none"></div>
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <span className="bg-[#E07B39] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Célula Kids I
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Célula Kids I
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A <strong className="text-[#E07B39]">Célula Kids I</strong> é um espaço especialmente preparado para as crianças menores, com atividades lúdicas, histórias bíblicas e momentos de aprendizado e diversão.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aqui, as crianças aprendem sobre o amor de Deus de forma leve e acolhedora, desenvolvendo valores e amizades desde cedo.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  É um lugar onde cada criança é especial e amada.
                </p>
                <br/>
                <p className="text-gray-700  leading-relaxed">
                  <b>Todos os sábados às 15h</b>
                </p>
                <br/>
              </div>
            </div>

            {/* Tabela de responsáveis */}
            <div className="overflow-x-auto p-6">
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
                    <td className="px-4 py-3 text-gray-800 font-medium">Flábio Machado </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">Líder</td>
                    <td className="px-4 py-3">
                      <a href="mailto:exemplo@gmail.com" className="text-[#E07B39] hover:text-[#c96a2e] hover:underline transition-colors text-sm break-all">
                        📧 exemplo@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
                                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-800 font-medium">Daniela Machado  </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">Líder</td>
                    <td className="px-4 py-3">
                      <a href="mailto:exemplo@gmail.com" className="text-[#E07B39] hover:text-[#c96a2e] hover:underline transition-colors text-sm break-all">
                        📧 exemplo@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 3: CÉLULA KIDS II */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-auto min-h-[300px] bg-gray-100">
                <Image
                  src="/icones/celula.jpeg"
                  alt="Célula Kids II"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-none"></div>
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <span className="bg-[#E07B39] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Célula Kids II
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Célula Kids II
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A <strong className="text-[#E07B39]">Célula Kids II</strong> é voltada para as crianças maiores, com atividades mais desafiadoras, estudos bíblicos adaptados e momentos de partilha.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aqui, as crianças são incentivadas a crescer na fé, desenvolver o pensamento crítico e construir relacionamentos saudáveis.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  É um espaço de crescimento, aprendizado e amizade.
                </p>
                <br/>
                <p className="text-gray-700  leading-relaxed">
                  <b>Todos os sábados às 15h</b>
                </p>
                <br/>
              </div>
            </div>

            {/* Tabela de responsáveis */}
            <div className="overflow-x-auto p-6">
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
                    <td className="px-4 py-3 text-gray-800 font-medium">Márcia Vieira </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">Líder</td>
                    <td className="px-4 py-3">
                      <a href="mailto:exemplo@gmail.com" className="text-[#E07B39] hover:text-[#c96a2e] hover:underline transition-colors text-sm break-all">
                        📧 exemplo@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
                                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-800 font-medium">Anna Amâncio</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">Líder</td>
                    <td className="px-4 py-3">
                      <a href="mailto:exemplo@gmail.com" className="text-[#E07B39] hover:text-[#c96a2e] hover:underline transition-colors text-sm break-all">
                        📧 exemplo@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 4: O QUE ACONTECE NAS CÉLULAS */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              O Que Acontece nas Células
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Cada encontro é preparado com carinho para que você se sinta em casa. Veja o que você vai encontrar:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow border-t-4 border-[#E07B39]">
                <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Estudo da Palavra
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Momentos de aprendizado e reflexão sobre a Bíblia, com
                  aplicação prática para o dia a dia.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow border-t-4 border-[#E07B39]">
                <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🙏</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Oração
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Intercessão e oração uns pelos outros, compartilhando
                  necessidades e vitórias.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow border-t-4 border-[#E07B39]">
                <div className="w-16 h-16 bg-[#fef0e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Comunhão
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Um tempo de amizade, partilha e apoio mútuo, onde cada
                  pessoa é valorizada.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 5: COMO PARTICIPAR */}
          {/* ============================================================ */}
          <div className="bg-gray-800 rounded-2xl py-12 px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Faça parte de uma Célula
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Encontre a célula ideal para você ou para seus filhos e comece a
              viver essa experiência de comunhão e crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contatoPage"
                className="inline-block px-8 py-3 bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Encontre uma Célula →
              </Link>
              <Link
                href="/doacoesPage"
                className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-gray-800 font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Apoie esse Projeto →
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
              As Células são uma das frentes do ITA Estrutural.
              Conheça também:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/cursos"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">📚</span>
                <h3 className="font-bold text-gray-800">Cursos</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Homem Máximo, Mulher Única e mais
                </p>
              </Link>
              <Link
                href="/atividadesKids"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">🎨</span>
                <h3 className="font-bold text-gray-800">Atividades Kid's</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Momento Charme e aulas de reforço
                </p>
              </Link>
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
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}