// app/contato/page.tsx
"use client";

import { sendEmail } from "@/app/actions/send-email";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaPhone } from 'react-icons/fa6';
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

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("nome", formData.nome);
  data.append("email", formData.email);
  data.append("telefone", formData.telefone);
  data.append("assunto", formData.assunto);
  data.append("mensagem", formData.mensagem);

  const resultado = await sendEmail(data);

  if (resultado.success) {
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: ""
    });
  } else {
    alert("Erro ao enviar. Tente novamente.");
  }
};

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 md:py-16 bg-[#f8f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              Fale Conosco
            </h1>
            <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Entre em contato conosco. Estamos aqui para ouvir você!
            </p>
          </div>

          {/* Grid: Formulário + Informações */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Formulário */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition bg-white"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold py-3 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg"
                    >
                      Enviar mensagem →
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800">
                  Informações
                </h2>

                <div className="space-y-4">

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <h3 className="font-bold text-gray-700">Email</h3>
                      <a href="mailto:contato@redeadan.com.br" className="text-[#E07B39] hover:text-[#c96a2e] text-sm transition-colors">
                        contato@redeadan.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <h3 className="font-bold text-gray-700">Telefone</h3>
                      <a href="tel:+5561999999999" className="text-[#E07B39] hover:text-[#c96a2e] text-sm transition-colors">
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
                   <FaFacebook size={24} onClick={() => window.open('https://www.facebook.com', '_blank')} className="text-blue-600 hover:scale-140 transition-transform duration-300" />
                   <FaInstagram size={24} onClick={() => window.open('https://www.instagram.com', '_blank')} className="text-pink-600 hover:scale-140 transition-transform duration-300" />
                   <FaXTwitter size={24} onClick={() => window.open('https://www.twitter.com', '_blank')} className="text-black hover:scale-140 transition-transform duration-300" />
                   <FaPhone size={24} onClick={() => window.open('tel:+551112345678', '_blank')} className="text-black hover:scale-140 transition-transform duration-300" />
                  </div>
                </div>

                <div className="bg-[#fef0e8] rounded-xl p-4 text-center">
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
        </div>
      </main>

      <Footer />
    </>
  );
}