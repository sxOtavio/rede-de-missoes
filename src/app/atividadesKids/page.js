// app/atividadesKids/page.js
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AtividadesKidsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              Atividades Kid's
            </h1>
            <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Cuidando, educando e transformando a vida das crianças
            </p>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 1: HISTÓRIA */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <Image
                  src="/images/nossaHistoria.jpeg"
                  alt="Atividades Kid's"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-none"></div>
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <span className="bg-[#E07B39] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Atividades Kid's
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Nossa História
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As{" "}
                  <strong className="text-[#E07B39]">Atividades Kid's</strong>{" "}
                  nasceram do desejo de cuidar das crianças da comunidade,
                  oferecendo um espaço seguro, acolhedor e cheio de amor. O que
                  começou com algumas atividades recreativas se tornou um
                  projeto completo de apoio educacional e social.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hoje, atendemos crianças em situação de vulnerabilidade,
                  oferecendo atividades que desenvolvem autoestima, aprendizado
                  e valores cristãos. Cada criança é única e especial para nós.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As Atividades Kid's são uma das frentes do{" "}
                  <strong>Instituto Templo da Alegria (ITA)</strong>, e
                  continuam crescendo para alcançar cada vez mais crianças.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 2: MOMENTO CHARME */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#fef0e8] rounded-full flex items-center justify-center">
                    <span className="text-2xl">💄</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Momento Charme
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O <strong className="text-[#E07B39]">Momento Charme</strong> é
                  um projeto especial dedicado às meninas. O objetivo é
                  ajudá-las a se sentirem mais bonitas, confiantes e
                  valorizadas, trabalhando autoestima, autocuidado e identidade.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Durante os encontros, as meninas participam de atividades de
                  beleza, maquiagem, penteados e conversas sobre autoestima,
                  sempre com uma abordagem lúdica e acolhedora.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mais do que beleza, o Momento Charme ensina que cada menina é
                  única, especial e merece se sentir bem consigo mesma.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#E07B39] text-lg">✦</span>
                    <span>Autoestima e autocuidado</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#E07B39] text-lg">✦</span>
                    <span>Atividades de beleza e maquiagem</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#E07B39] text-lg">✦</span>
                    <span>Conversas sobre identidade e valores</span>
                  </li>
                </ul>
                <br/>
                <p className="text-gray-700  leading-relaxed">
                  <b>Todos os sábados às 14h</b>
                </p>
                <br/>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#fef0e8] text-gray-800">
                        <th className="px-4 py-3 rounded-tl-lg font-bold text-sm">
                          Nome do responsável
                        </th>
                        <th className="px-4 py-3 font-bold text-sm">Cargo</th>
                        <th className="px-4 py-3 rounded-tr-lg font-bold text-sm">
                          Contato
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-gray-800 font-medium">
                          Daniela Machado 
                        </td>
                        <td className="px-4 py-3 text-gray-600 text-sm">
                          Lider
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

              <div className="order-1 lg:order-2 relative h-64 lg:h-96 rounded-2xl overflow-hidden ">
                <Image
                  src="/icones/iconeCharme.png"
                  alt="Momento Charme"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO: OFICINA DE MENINOS */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden p-4 flex items-center justify-center">
                <Image
                  src="/icones/iconeOficina.png"
                  alt="Projeto de oficina"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#Fdf7eb] rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#111A2C]">
                    Oficina de Meninos
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  O{" "}
                  <strong className="text-[#DBA31F]">
                    Projeto Oficina de Meninos
                  </strong>{" "}
                  é uma iniciativa dedicada a orientar e capacitar os jovens da
                  comunidade da Estrutural - DF.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Através de atividades práticas, ensinamentos bíblicos e
                  mentoria, criamos um ambiente seguro onde os rapazes recebem
                  acompanhamento moral e espiritual, preparando-os para os
                  desafios da vida diária.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  O nosso propósito vai muito além do ensino de habilidades
                  práticas; o nosso grande objetivo é transformar vidas, guiados
                  pela missão de estar sempre{" "}
                  <strong className="text-gray-800">
                    "Formando Homens de Valor"
                  </strong>
                  .
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#DBA31F] text-lg">✦</span>
                    <span>Formação de caráter e valores cristãos</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#DBA31F] text-lg">✦</span>
                    <span>Atividades práticas e orientação para o futuro</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#DBA31F] text-lg">✦</span>
                    <span>Acompanhamento espiritual e estudo da palavra</span>
                  </li>
                </ul>
                <br/>
                <p className="text-gray-700  leading-relaxed">
                  <b>Todos os sábados às 14h</b>
                </p>
                <br/>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#fef0e8] text-gray-800">
                        <th className="px-4 py-3 rounded-tl-lg font-bold text-sm">
                          Nome do responsável
                        </th>
                        <th className="px-4 py-3 font-bold text-sm">Cargo</th>
                        <th className="px-4 py-3 rounded-tr-lg font-bold text-sm">
                          Contato
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-gray-800 font-medium">
                          Flábio Machado 
                        </td>
                        <td className="px-4 py-3 text-gray-600 text-sm">
                          Lider
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
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEÇÃO 5: COMO AJUDAR */}
          {/* ============================================================ */}
          <div className="bg-gray-800 rounded-2xl py-12 px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Faça parte das Atividades Kid's
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Sua contribuição ajuda a transformar a vida de crianças,
              oferecendo educação, cuidado e esperança.
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
              As Atividades Kid's são uma das frentes do ITA Estrutural. Conheça
              também:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/projetoPurim"
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
                <p className="text-sm text-gray-600 mt-2">A sede em Brasília</p>
              </Link>
              <Link
                href="/itaAfricaPage"
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-[#E07B39]"
              >
                <span className="text-4xl block mb-3">🌍</span>
                <h3 className="font-bold text-gray-800">ITA África</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Frente missionária internacional
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
