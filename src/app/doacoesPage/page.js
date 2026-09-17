// app/doacoes/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// (Link de Pagamento - 2026)
const TAXAS_CIELO = {
  pix: 0.0099,        // 0,99%
  debito: 0.0107,     // 1,07%
  credito: 0.0348,    // 3,48% (à vista)
};

export default function Doacoes() {
  const [valorLiquido, setValorLiquido] = useState(50.15);
  const [formaPagamento, setFormaPagamento] = useState("pix");
  const [mostrarInputPersonalizado, setMostrarInputPersonalizado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const [doador, setDoador] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
  });

  const valoresSugeridos = [25.15, 50.15, 100.15, 200.15, 500.15];

  // Calcula o valor BRUTO (o que o doador paga) com base na taxa
  const calcularValorBruto = (valorLiquido, formaPagamento) => {
    const taxa = TAXAS_CIELO[formaPagamento] || TAXAS_CIELO.pix;
    const valorBruto = valorLiquido / (1 - taxa);
    return Number(valorBruto.toFixed(2));
  };

  // Calcula o valor LÍQUIDO (o que chega na conta) com base no bruto
  const calcularValorLiquido = (valorBruto, formaPagamento) => {
    const taxa = TAXAS_CIELO[formaPagamento] || TAXAS_CIELO.pix;
    const valorLiquido = valorBruto * (1 - taxa);
    return Number(valorLiquido.toFixed(2));
  };

  // Valor bruto que o doador vai pagar
  const valorBruto = calcularValorBruto(valorLiquido, formaPagamento);

  // Taxa em reais (para mostrar ao doador)
  const taxaEmReais = valorBruto - valorLiquido;

  // Normaliza o valor para terminar em ,15
  const normalizarValor = (valorDigitado) => {
    const numero = Number(valorDigitado);
    if (!numero || numero <= 0) return 0;
    return Math.floor(numero) + 0.15;
  };

  // Formata CPF/CNPJ
  const formatarCPF = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, "");
    if (apenasNumeros.length <= 11) {
      return apenasNumeros
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    return apenasNumeros
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  };

  // Formata telefone
  const formatarTelefone = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, "");
    if (apenasNumeros.length <= 10) {
      return apenasNumeros
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }
    return apenasNumeros
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  };

  const handleDoadorChange = (e) => {
    const { id, value } = e.target;
    let valorFormatado = value;

    if (id === "cpf") {
      valorFormatado = formatarCPF(value);
    } else if (id === "telefone") {
      valorFormatado = formatarTelefone(value);
    }

    setDoador({
      ...doador,
      [id]: valorFormatado,
    });

    if (erro) setErro("");
  };

  const validarDados = () => {
    if (valorLiquido <= 0) {
      setErro("Por favor, selecione ou digite um valor válido.");
      return false;
    }

    if (!doador.nome.trim()) {
      setErro("Por favor, preencha seu nome completo.");
      return false;
    }

    if (!doador.email.trim() || !doador.email.includes("@")) {
      setErro("Por favor, preencha um e-mail válido.");
      return false;
    }

    const cpfNumeros = doador.cpf.replace(/\D/g, "");
    if (cpfNumeros.length < 11) {
      setErro("Por favor, preencha um CPF/CNPJ válido.");
      return false;
    }

    return true;
  };

  const handleDoar = async () => {
    if (!validarDados()) return;

    setLoading(true);
    setErro("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          valorBruto: valorBruto, //  Envia o valor BRUTO (com taxa)
          valorLiquido: valorLiquido, //  Informa o líquido desejado
          formaPagamento: formaPagamento,
          nome: doador.nome.trim(),
          email: doador.email.trim(),
          cpf: doador.cpf.replace(/\D/g, ""),
          telefone: doador.telefone.replace(/\D/g, ""),
        }),
      });

      const data = await response.json();

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        setErro(
          data.error || "Não foi possível iniciar o pagamento. Tente novamente."
        );
        setLoading(false);
      }
    } catch (error) {
      console.error("Erro:", error);
      setErro("Ocorreu um erro ao processar sua doação. Tente novamente.");
      setLoading(false);
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
              {/* Mensagem de Erro */}
              {erro && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start gap-2">
                  <span>❌</span>
                  <span>{erro}</span>
                </div>
              )}

              {/* Forma de Pagamento */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Forma de pagamento
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setFormaPagamento("pix")}
                    disabled={loading}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formaPagamento === "pix"
                        ? "border-[#E07B39] bg-[#fef0e8]"
                        : "border-gray-200 hover:border-gray-300"
                    } disabled:opacity-50`}
                  >
                    <span className="text-2xl block">📱</span>
                    <span className="text-sm font-medium">PIX</span>
                    <span className="text-xs text-gray-500 block mt-1">
                      Taxa {(TAXAS_CIELO.pix * 100).toFixed(2)}%
                    </span>
                  </button>
                  <button
                    onClick={() => setFormaPagamento("debito")}
                    disabled={loading}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formaPagamento === "debito"
                        ? "border-[#E07B39] bg-[#fef0e8]"
                        : "border-gray-200 hover:border-gray-300"
                    } disabled:opacity-50`}
                  >
                    <span className="text-2xl block">💳</span>
                    <span className="text-sm font-medium">Débito</span>
                    <span className="text-xs text-gray-500 block mt-1">
                      Taxa {(TAXAS_CIELO.debito * 100).toFixed(2)}%
                    </span>
                  </button>
                  <button
                    onClick={() => setFormaPagamento("credito")}
                    disabled={loading}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formaPagamento === "credito"
                        ? "border-[#E07B39] bg-[#fef0e8]"
                        : "border-gray-200 hover:border-gray-300"
                    } disabled:opacity-50`}
                  >
                    <span className="text-2xl block">💰</span>
                    <span className="text-sm font-medium">Crédito</span>
                    <span className="text-xs text-gray-500 block mt-1">
                      Taxa {(TAXAS_CIELO.credito * 100).toFixed(2)}%
                    </span>
                  </button>
                </div>
              </div>

              {/* Valores Sugeridos */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Escolha um valor (líquido que chega ao projeto)
                </label>
                <div className="flex flex-wrap gap-3">
                  {valoresSugeridos.map((v) => (
                    <button
                      key={v}
                      onClick={() => {
                        setValorLiquido(v);
                        setMostrarInputPersonalizado(false);
                      }}
                      disabled={loading}
                      className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${
                        valorLiquido === v && !mostrarInputPersonalizado
                          ? "bg-[#E07B39] text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      } disabled:opacity-50`}
                    >
                      R$ {v.toFixed(2)}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setMostrarInputPersonalizado(true);
                      setValorLiquido(0);
                    }}
                    disabled={loading}
                    className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${
                      mostrarInputPersonalizado
                        ? "bg-[#E07B39] text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } disabled:opacity-50`}
                  >
                    Outro
                  </button>
                </div>
              </div>

              {/* Valor Personalizado */}
              {mostrarInputPersonalizado && (
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Valor personalizado (líquido)
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
                      step="0.01"
                      onChange={(e) => setValorLiquido(Number(e.target.value))}
                      onBlur={(e) => setValorLiquido(normalizarValor(e.target.value))}
                      disabled={loading}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    O valor será ajustado para terminar em <strong>,15</strong>
                  </p>
                </div>
              )}

              {/*  RESUMO DO VALOR */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
                <h4 className="font-bold text-gray-800 mb-3">
                  💰 Resumo da doação
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Valor líquido (chega ao projeto):
                    </span>
                    <span className="font-bold text-green-600">
                      R$ {valorLiquido.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Taxa da Cielo ({(TAXAS_CIELO[formaPagamento] * 100).toFixed(2)}%):
                    </span>
                    <span className="font-bold text-red-500">
                      + R$ {taxaEmReais.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-gray-300 pt-2 flex justify-between">
                    <span className="font-bold text-gray-800">
                      Você paga:
                    </span>
                    <span className="font-black text-[#E07B39] text-lg">
                      R$ {valorBruto.toFixed(2)}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  ✅ O valor líquido de R$ {valorLiquido.toFixed(2)} chegará integralmente ao ITA.
                </p>
              </div>

              {/* Aviso do ,15 */}
              <div className="bg-[#fef0e8] border border-[#E07B39] rounded-lg p-4 mb-8 text-sm text-gray-700">
                <p className="mb-2">
                  Para nos ajudar a identificar sua doação,
                  pedimos que o valor líquido termine sempre com{" "}
                  <strong>,15 centavos</strong>.
                </p>
                <p className="mb-2">
                  <strong>Por que o ,15?</strong>
                  <br />
                  Esse pequeno detalhe permite que nossa equipe encontre sua
                  doação no extrato bancário de forma rápida, sem confundir com
                  outras transações.
                </p>
              </div>

              {/* Dados do Doador */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-bold text-gray-800">Seus dados</h3>

                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={doador.nome}
                    onChange={handleDoadorChange}
                    placeholder="Seu nome"
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none disabled:bg-gray-100"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={doador.email}
                      onChange={handleDoadorChange}
                      placeholder="seu@email.com"
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cpf"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      CPF/CNPJ *
                    </label>
                    <input
                      type="text"
                      id="cpf"
                      value={doador.cpf}
                      onChange={handleDoadorChange}
                      placeholder="000.000.000-00"
                      maxLength="18"
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none disabled:bg-gray-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Telefone (opcional)
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    value={doador.telefone}
                    onChange={handleDoadorChange}
                    placeholder="(00) 00000-0000"
                    maxLength="15"
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none disabled:bg-gray-100"
                  />
                </div>
              </div>

              {/* Botão Final */}
              <button
                type="button"
                onClick={handleDoar}
                disabled={loading}
                className="w-full bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? "⏳ Redirecionando para o pagamento..."
                  : `Doar R$ ${valorBruto.toFixed(2)}`}
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                Você será redirecionado para o site seguro da Cielo para
                finalizar o pagamento.
              </p>
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
            <p className="text-gray-600 mb-2">Chave PIX (CNPJ):</p>
            <div className="bg-[#f8f7f3] rounded-lg p-4 inline-block">
              <code className="text-sm font-mono text-[#E07B39] break-all">
                55.009.533/0001-26
              </code>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText("55.009.533/0001-26");
                alert("✅ Chave PIX copiada!");
              }}
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