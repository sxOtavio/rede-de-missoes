"use client";

import { useEffect, useMemo, useState } from "react";
import { useGaleria } from "@/hooks/useGaleria";
import { useUpload } from "@/hooks/useUpload";

const initialFoto = {
  titulo: "",
  imagem: "",
  descricao: "",
};

export default function AdminFotos() {
  const { galeriaData, loadGaleriaData, saveGaleria } = useGaleria();
  const { uploading, preview, error, loadUploadData } = useUpload();

  const [activeTab, setActiveTab] = useState("editar");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState(initialFoto);

  useEffect(() => {
    loadGaleriaData();
  }, [loadGaleriaData]);

  const filteredFotos = useMemo(
    () =>
      galeriaData.filter((item) =>
        (item.titulo || item.name || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
      ),
    [galeriaData, searchTerm],
  );

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const response = await loadUploadData(file);
    if (response?.url) {
      setFormData((current) => ({
        ...current,
        imagem: response.url,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      titulo: formData.titulo,
      descricao: formData.descricao,
      imagem: formData.imagem,
      image_url: formData.imagem,
    };

    const response = await saveGaleria(payload);
    if (response?.success) {
      setShowPreview(true);
      setFormData(initialFoto);
      setActiveTab("lista");
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex flex-wrap gap-2 p-4">
            <button
              type="button"
              onClick={() => setActiveTab("editar")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "editar"
                  ? "bg-[#E07B39] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              ✏️ Upload de Foto
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("lista")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "lista"
                  ? "bg-[#E07B39] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              📋 Lista de Fotos ({galeriaData.length})
            </button>
          </div>
        </div>

        {activeTab === "editar" && (
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>🖼️</span> Upload de Imagem
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Título da Foto">
                <input
                  value={formData.titulo}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      titulo: event.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all"
                  placeholder="Digite o título da imagem..."
                />
              </Field>

              <Field label="Descrição">
                <textarea
                  rows="3"
                  value={formData.descricao}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      descricao: event.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none resize-none transition-all"
                  placeholder="Descreva essa imagem..."
                />
              </Field>

              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={uploading}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#fef0e8] file:text-[#E07B39] hover:file:bg-[#fce8d8] cursor-pointer"
                />

                {uploading && (
                  <p className="text-sm text-gray-500">⏳ Enviando imagem...</p>
                )}

                {error && <p className="text-sm text-red-500">❌ {error}</p>}

                {(preview || formData.imagem) && !uploading && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={preview || formData.imagem}
                    alt="Preview da foto"
                    className="max-w-[220px] rounded-lg shadow-md"
                  />
                )}
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                <button
                  type="submit"
                  className="bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  💾 Salvar Foto
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(initialFoto);
                    setShowPreview(false);
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  🗑️ Limpar
                </button>
              </div>
            </form>

            {showPreview && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <h3 className="font-bold text-green-800 mb-2">
                  ✅ Foto pronta para salvar
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-bold">Título:</span>{" "}
                    {formData.titulo || "⚠️ Não preenchido"}
                  </p>
                  <p>
                    <span className="font-bold">Descrição:</span>{" "}
                    {formData.descricao || "⚠️ Não preenchido"}
                  </p>
                  <p>
                    <span className="font-bold">Imagem:</span>{" "}
                    {formData.imagem ? "✅ Selecionada" : "⚠️ Não preenchido"}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "lista" && (
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span>📋</span> Fotos Cadastradas
                <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {galeriaData.length}{" "}
                  {galeriaData.length === 1 ? "item" : "itens"}
                </span>
              </h2>

              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Buscar foto..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all w-full md:w-64"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  🔍
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {filteredFotos.length > 0 ? (
                filteredFotos.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-wrap items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#E07B39] hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                      {item.image_url || item.imagem_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image_url || item.imagem_url}
                          alt={item.titulo || item.name || "Foto da galeria"}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                          Sem img
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-[150px]">
                      <p className="font-bold text-gray-800 text-sm">
                        {item.titulo || item.name || "Sem título"}
                      </p>
                      <p className="text-xs text-gray-500 truncate max-w-[300px]">
                        {item.descricao || "Sem descrição"}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                          ID: {item.id}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 ml-auto">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            titulo: item.titulo || item.name || "",
                            imagem: item.image_url || item.imagem_url || "",
                            descricao: item.descricao || "",
                          });
                          setActiveTab("editar");
                        }}
                        className="bg-[#E07B39] hover:bg-[#c96a2e] text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-medium"
                      >
                        📝 Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => console.log("🗑️ Excluir foto:", item)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-medium"
                      >
                        🗑️ Excluir
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-4xl mb-4">📭</p>
                  <p className="text-gray-500">
                    {searchTerm
                      ? "Nenhuma foto encontrada com esse termo."
                      : "Nenhuma foto cadastrada ainda."}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
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
