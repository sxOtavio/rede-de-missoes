// components/Galeria.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";
import { useGaleria } from "@/hooks/useGaleria";

export default function Galeria() {
  const { galeriaData, loadGaleriaData } = useGaleria();

  useEffect(() => {
    loadGaleriaData();
  }, [loadGaleriaData]);

  const imagens = (galeriaData || []).filter(
    (item) => item.image_url || item.imagem_url,
  );

  if (imagens.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-[#F3F4F8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E07B39]">
            Galeria
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-gray-900">
            Fotos do Projeto Purim
          </h2>
        </div>

        <div className="w-full h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
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
              bulletClass: "swiper-pagination-bullet !bg-white !opacity-70",
              bulletActiveClass: "!bg-white !opacity-100",
            }}
            navigation={true}
            className="w-full h-full"
          >
            {imagens.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.image_url || item.imagem_url})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/55" />
                  </div>

                  <div
                    className="absolute inset-0 flex items-end"
                    style={{ padding: "0 2rem 2rem" }}
                  >
                    <div className="max-w-xl text-white">
                      <span className="inline-block mb-3 rounded-full bg-[#E07B39] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                        Acervo
                      </span>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                        {item.titulo || "Projeto Purim"}
                      </h3>
                      <p className="mt-2 text-base md:text-lg text-gray-200">
                        {item.descricao ||
                          "Momentos de amor, missão e transformação."}
                      </p>
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
              background: rgba(0, 0, 0, 0.3);
              padding: 30px 20px;
              border-radius: 8px;
            }
            :global(.swiper-button-next:hover),
            :global(.swiper-button-prev:hover) {
              background: rgba(0, 0, 0, 0.5);
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
