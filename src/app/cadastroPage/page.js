// app/cadastro/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCadastro } from "@/hooks/useCadastro";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [enviado, setEnviado] = useState(false);
  const {
    loading,
    error: erro,
    setError: setErro,
    submitCadastro,
  } = useCadastro();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    // Validações básicas
    if (formData.senha !== formData.confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    if (formData.senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    const data = await submitCadastro({
      nome: formData.nome,
      email: formData.email,
      senha: formData.senha,
    });

    if (data.success) {
      setEnviado(true);
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              Criar Conta
            </h1>
            <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600">
              Preencha seus dados para solicitar acesso
            </p>
          </div>

          {/* Card de Cadastro */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
            <div className="bg-gray-800 px-6 py-8 text-white">
              <h2 className="text-2xl font-bold text-center">
                Solicitar Acesso
              </h2>
              <p className="text-gray-300 text-center mt-2">
                Seu cadastro será analisado antes da liberação
              </p>
            </div>

            <div className="p-6 md:p-8">
              {enviado ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-6 rounded-lg text-center">
                  <p className="text-2xl mb-2">✅</p>
                  <p className="font-bold text-lg">
                    Cadastro enviado com sucesso!
                  </p>
                  <p className="text-sm mt-2">
                    Sua solicitação foi recebida. Você receberá um e-mail quando
                    seu acesso for liberado.
                  </p>
                  <p className="text-xs mt-4 text-green-600">
                    O acesso é liberado manualmente após análise.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Aviso de aprovação pendente */}
                  <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-lg text-sm">
                    <p className="font-bold">⚠️ Acesso sujeito a aprovação</p>
                    <p className="mt-1">
                      Após o cadastro, sua conta ficará{" "}
                      <strong>pendente</strong> até que um administrador aprove.
                      Você só terá acesso após a liberação.
                    </p>
                  </div>

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
                      required
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition"
                    />
                  </div>

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
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="senha"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Senha *
                    </label>
                    <input
                      type="password"
                      id="senha"
                      required
                      placeholder="Mínimo 6 caracteres"
                      value={formData.senha}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirmarSenha"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Confirmar senha *
                    </label>
                    <input
                      type="password"
                      id="confirmarSenha"
                      required
                      placeholder="Repita a senha"
                      value={formData.confirmarSenha}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition"
                    />
                  </div>

                  {erro && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {erro}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#E07B39] hover:bg-[#c96a2e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                  >
                    {loading ? "Enviando..." : "Solicitar cadastro →"}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao se cadastrar, você concorda que seus dados sejam
                    analisados para liberação de acesso.
                  </p>
                </form>
              )}

              {!enviado && (
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Já tem uma conta?{" "}
                    <Link
                      href="/login"
                      className="text-[#E07B39] hover:text-[#c96a2e] font-medium"
                    >
                      Faça login
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Informação adicional */}
          <div className="mt-8 bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              🔒 Como funciona a liberação?
            </h3>
            <p className="text-sm text-gray-600">
              Após o cadastro, um administrador irá analisar sua solicitação.
              Você receberá um e-mail assim que seu acesso for liberado.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
