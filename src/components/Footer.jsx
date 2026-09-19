"use client";
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full bg-black px-4 py-6 text-sm text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2>Endereço: Setor Leste – Rua 24 – Quadra 21 – Lote 79 – Santa Luzia - Estrutural-DF</h2>
          <h2>Telefone: (61) 99586-6382</h2>
          <h2>Email: contato@rede-de-missoes.com</h2>
        </div>

    <div className="flex gap-4">
      <FaInstagram size={24} onClick={() => window.open('https://www.instagram.com/institutotempodealegria/', '_blank')} className="text-pink-600 hover:scale-140 transition-transform duration-300" />
      <FaPhone size={24} onClick={() => window.open('tel:+5561995866382', '_blank')} className="text-white hover:scale-140 transition-transform duration-300" />
      <FaWhatsapp size={24} onClick={() => window.open('https://wa.me/5561995866382', '_blank')} className="text-green-500 hover:scale-140 transition-transform duration-300 cursor-pointer" /> 


    </div>

        <div className="text-center md:text-right">
         <a href="/politica-de-privacidade" className="text-white hover:text-gray-300">
            Política de Privacidade
          </a>
          <a href="/termos" className="text-white p-4 hover:text-gray-300">
            Termos de uso
          </a>
        </div>
        <div className="text-center p-4 md:text-right">
          <a href="/loginPage" className="text-white hover:text-gray-300">
            Acesso do colaborador
          </a>
        </div>
      </div>
    </footer>
  );
}
