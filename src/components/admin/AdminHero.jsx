"use client";
import { useEffect } from "react";
import { useHero } from "@/hooks/useHero";

export default function AdminHero({ hero, onChange }) {
  const { heroData, loadHeroData } = useHero();
  //---- Faz uma fetch no banco para ver os heros existentes -------
  useEffect(() => {
    loadHeroData();
  }, [loadHeroData]);
  console.log("Dados do Hero:", heroData);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🎯 Editar Hero</h2>

      <form className="space-y-5">
        <Field label="Título Principal">
          <input
            value={hero.titulo}
            onChange={(event) => onChange("titulo", event.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none"
          />
        </Field>

        <Field label="Subtítulo">
          <input
            value={hero.subtitulo}
            onChange={(event) => onChange("subtitulo", event.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none"
          />
        </Field>

        <Field label="Texto de Descrição">
          <textarea
            rows="3"
            value={hero.descricao}
            onChange={(event) => onChange("descricao", event.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none resize-none"
          />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Texto do Botão">
            <input
              value={hero.textoBotao}
              onChange={(event) => onChange("textoBotao", event.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none"
            />
          </Field>

          <Field label="Imagem de Fundo">
            <input
              value={hero.imagem}
              onChange={(event) => onChange("imagem", event.target.value)}
              placeholder="/images/hero-bg.jpg"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none"
            />
          </Field>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            className="bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Salvar Hero
          </button>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Visualizar
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
