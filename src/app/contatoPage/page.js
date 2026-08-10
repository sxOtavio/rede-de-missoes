// app/contato/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de email (Ex: EmailJS, Nodemailer, etc)
    console.log("Dados do formulário:", formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-blue-900">
              Fale Conosco
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Entre em contato conosco. Estamos aqui para ouvir você!
            </p>
          </div>

          {/* Grid: Formulário + Informações */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Formulário */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Envie uma mensagem
                </h2>

                {enviado ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg">
                    <p className="font-bold">✅ Mensagem enviada com sucesso!</p>
                    <p className="text-sm mt-1">Agradecemos seu contato. Responderemos em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-2">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          required
                          placeholder="Seu nome"
                          value={formData.nome}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="telefone" className="block text-sm font-bold text-gray-700 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          placeholder="(00) 00000-0000"
                          value={formData.telefone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="assunto" className="block text-sm font-bold text-gray-700 mb-2">
                          Assunto *
                        </label>
                        <select
                          id="assunto"
                          required
                          value={formData.assunto}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="duvida">Dúvida</option>
                          <option value="projeto">Informações sobre projetos</option>
                          <option value="doacao">Doações</option>
                          <option value="voluntario">Ser voluntário</option>
                          <option value="parceria">Parceria</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-bold text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="mensagem"
                        rows="5"
                        required
                        placeholder="Escreva sua mensagem..."
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl"
                    >
                      Enviar mensagem →
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Informações
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h3 className="font-bold text-gray-700">Endereço</h3>
                      <p className="text-gray-600 text-sm">
                        Brasília - DF
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <h3 className="font-bold text-gray-700">Email</h3>
                      <a href="mailto:contato@redeadan.com.br" className="text-blue-600 hover:text-blue-800 text-sm">
                        contato@redeadan.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <h3 className="font-bold text-gray-700">WhatsApp</h3>
                      <a href="https://wa.me/5561999999999" className="text-blue-600 hover:text-blue-800 text-sm">
                        (61) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <h3 className="font-bold text-gray-700">Horário de Atendimento</h3>
                      <p className="text-gray-600 text-sm">
                        Segunda a Sexta: 8h - 18h
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="font-bold text-gray-700 mb-3">Redes Sociais</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <span>📘</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <span>🐦</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                      <span>📸</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                      <span>💬</span>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-700">
                    🙏 <strong>Ore por nós</strong>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Sua oração é fundamental para nossa missão
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa (opcional) */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">
                📍 Mapa - Brasília, DF
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}