"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { projetos } from '@/data/projetos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Hero() {
  // Filtra apenas os projetos que:
  // 1. Têm noHero = true
  // 2. Têm imagem
  const slidesHero = projetos.filter(projeto => projeto.noHero === true && projeto.imagem);

  // Se não tiver nenhum slide, não mostra o carrossel
  if (slidesHero.length === 0) {
    return null;
  }

  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white !opacity-70',
          bulletActiveClass: '!bg-white !opacity-100',
        }}
        navigation={true}
        className="w-full h-full"
      >
        {slidesHero.map((projeto) => (
          <SwiperSlide key={projeto.id}>
            <div className="relative w-full h-full">
              {/* Imagem de fundo */}
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${projeto.imagem})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Texto sobreposto */}
              <div className="absolute inset-0 flex items-center" style={{ padding: '0 2rem' }}>
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    {projeto.titulo}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl font-medium text-gray-200">
                    {projeto.subtitulo}
                  </p>
                  <p className="mt-2 text-base md:text-lg text-gray-300">
                    {projeto.descricao}
                  </p>
                  <a href={projeto.link}>
                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      {projeto.botao}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: white !important;
          background: rgba(0,0,0,0.3);
          padding: 30px 20px;
          border-radius: 8px;
        }
        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background: rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
}