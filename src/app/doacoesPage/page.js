// app/doacoes/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Doacoes() {
  const [valor, setValor] = useState(50.15);
  const [formaPagamento, setFormaPagamento] = useState("pix");
  const [mostrarInputPersonalizado, setMostrarInputPersonalizado] =
    useState(false);

  // Dados do doador (o que a Cielo precisa)
  const [doador, setDoador] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const valoresSugeridos = [25.15, 50.15, 100.15, 200.15, 500.15];

  const normalizarValor = (valorDigitado) => {
    const numero = Number(valorDigitado);
    if (!numero || numero <= 0) return 0;
    return Math.floor(numero) + 0.15;
  };

  const handleDoadorChange = (e) => {
    setDoador({
      ...doador,
      [e.target.id]: e.target.value,
    });
  };

  const handleDoar = async () => {
    if (valor <= 0) {
      alert("Por favor, selecione ou digite um valor válido.");
      return;
    }

    if (!doador.nome || !doador.email || !doador.cpf) {
      alert("Por favor, preencha nome, e-mail e CPF.");
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          valor: valor,
          formaPagamento: formaPagamento,
          ...doador,
        }),
      });

      const data = await response.json();

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        alert("Não foi possível iniciar o pagamento. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

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
              Sua contribuição transforma vidas e leva esperança a quem mais
              precisa
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
              

     

              {/* Aviso do ,15 */}
              <div className="bg-[#fef0e8] border border-[#E07B39] rounded-lg p-4 mb-8 text-sm text-gray-700">
                <p className="mb-2">
                  Para nos ajudar a identificar sua doação com facilidade,
                  pedimos que o valor do Pix termine sempre com{" "}
                  <strong>,15 centavos</strong>.
                </p>
                <p className="mb-2">
                  <strong>Por que o ,15?</strong>
                  <br />
                  Esse pequeno detalhe permite que nossa equipe encontre sua
                  doação no extrato bancário de forma rápida, sem confundir com
                  outras transações.
                </p>
                <p className="mb-0">
                  Em vez de doar <strong>R$ 50,00</strong>, pedimos que doe{" "}
                  <strong>R$ 50,15</strong>.
                </p>
              </div>
                    <p> Em breve com link de pagamentos da cielo</p>
            </div>
          </div>

          {/* Impacto */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-black text-[#E07B39]">R$ 25,15</p>
              <p className="text-sm text-gray-600 mt-2">
                Alimenta uma criança por 1 mês
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-black text-[#E07B39]">R$ 50,15</p>
              <p className="text-sm text-gray-600 mt-2">
                Mantém 1 aluno na escola
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-3xl font-black text-[#E07B39]">R$ 100,15</p>
              <p className="text-sm text-gray-600 mt-2">
                Apoia um missionário por mês
              </p>
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
                55.009.533/0001-26
              </code>
            </div>
            <button
              onClick={() =>
                navigator.clipboard.writeText("55.009.533/0001-26")
              }
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
