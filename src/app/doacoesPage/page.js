// app/doacoes/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Doacoes() {
  const [valor, setValor] = useState(50);
  const [formaPagamento, setFormaPagamento] = useState("pix");

  const valoresSugeridos = [25, 50, 100, 200, 500];

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              Faça uma Doação
            </h1>
            <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Sua contribuição transforma vidas e leva esperança a quem mais precisa
            </p>
          </div>

          {/* Card Principal */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
            <div className="bg-gray-800 px-6 py-8 text-white">
              <h2 className="text-2xl font-bold text-center">
                🙏 Doe e faça a diferença
              </h2>
              <p className="text-gray-300 text-center mt-2">
                Sua doação ajuda a manter nossos projetos
              </p>
            </div>

            <div className="p-6 md:p-8">
              {/* Valores Sugeridos */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Escolha um valor
                </label>
                <div className="flex flex-wrap gap-3">
                  {valoresSugeridos.map((v) => (
                    <button
                      key={v}
                      onClick={() => setValor(v)}
                      className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${
                        valor === v
                          ? "bg-[#E07B39] text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      R$ {v}
                    </button>
                  ))}
                  <button
                    onClick={() => setValor(0)}
                    className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${
                      valor === 0
                        ? "bg-[#E07B39] text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Outro
                  </button>
                </div>
              </div>

              {/* Valor Personalizado */}
              {valor === 0 && (
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Valor personalizado
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                      R$
                    </span>
                    <input
                      type="number"
                      placeholder="Digite o valor"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none"
                      min="1"
                      onChange={(e) => setValor(Number(e.target.value))}
                    />
                  </div>
                </div>
              )}

              {/* Forma de Pagamento */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Forma de pagamento
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <button
                    onClick={() => setFormaPagamento("pix")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formaPagamento === "pix"
                        ? "border-[#E07B39] bg-[#fef0e8]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl block">📱</span>
                    <span className="text-sm font-medium">PIX</span>
                  </button>
                  <button
                    onClick={() => setFormaPagamento("cartao")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formaPagamento === "cartao"
                        ? "border-[#E07B39] bg-[#fef0e8]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl block">💳</span>
                    <span className="text-sm font-medium">Cartão</span>
                  </button>
                  <button
                    onClick={() => setFormaPagamento("boleto")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formaPagamento === "boleto"
                        ? "border-[#E07B39] bg-[#fef0e8]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl block">📄</span>
                    <span className="text-sm font-medium">Boleto</span>
                  </button>
                </div>
              </div>

              {/* Informações do Doador */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Doação Recorrente */}
              <div className="flex items-center gap-3 mb-8">
                <input
                  type="checkbox"
                  id="recorrente"
                  className="w-5 h-5 text-[#E07B39] rounded focus:ring-[#E07B39]"
                />
                <label htmlFor="recorrente" className="text-gray-700">
                  Tornar minha doação <strong>recorrente</strong> (mensal)
                </label>
              </div>

              {/* Botão Final */}
              <button className="w-full bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl">
                Doar R$ {valor > 0 ? valor.toFixed(2) : "..."}
              </button>
            </div>
          </div>

          {/* Impacto */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-black text-[#E07B39]">R$ 25</p>
              <p className="text-sm text-gray-600 mt-2">Alimenta uma criança por 1 mês</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-black text-[#E07B39]">R$ 50</p>
              <p className="text-sm text-gray-600 mt-2">Mantém 1 aluno na escola</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-black text-[#E07B39]">R$ 100</p>
              <p className="text-sm text-gray-600 mt-2">Apoia um missionário por mês</p>
            </div>
          </div>

          {/* Chave PIX */}
          <div className="mt-12 bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              📱 Doe via PIX
            </h3>
            <p className="text-gray-600 mb-2">Chave PIX:</p>
            <div className="bg-[#f8f7f3] rounded-lg p-4 inline-block">
              <code className="text-sm font-mono text-[#E07B39] break-all">
                contato@redeadan.com.br
              </code>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText("contato@redeadan.com.br")}
              className="block mx-auto mt-3 text-sm text-[#E07B39] hover:text-[#c96a2e] font-medium"
            >
              📋 Copiar chave PIX
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}