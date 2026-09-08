
// components/Galeria.jsx
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from "react";
import { useGaleria } from "@/hooks/useGaleria";

export default function Galeria() {
  const { galeriaData, loadGaleriaData } = useGaleria();
  
  //---- Faz uma fetch no banco para ver os fotos existentes -------
  useEffect(() => {
    loadGaleriaData();
  }, [loadGaleriaData]);
  console.log("Dados do Galeria:", galeriaData);
  
    return (
    
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Galeria de Fotos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galeriaData.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={item.image_url}
                    alt={`Projeto Purim - Foto ${item.titulo}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
              {/* Placeholder para fotos que ainda não chegaram */}
              <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-400 text-sm text-center px-2">
                  + Fotos <br /> em breve
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">
              Fotos do acervo do Projeto Purim. Mais imagens em breve.
            </p>
          </div>
  );
}

