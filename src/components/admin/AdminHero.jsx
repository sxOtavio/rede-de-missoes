"use client";
import { useEffect, useState } from "react";
import { useHero } from "@/hooks/useHero";
import { useUpload } from "@/hooks/useUpload";
import UploadButton from "@/components/UploadButton";
import UploadImagem from "../UploadImage";

export default function AdminHero({ hero, onChange }) {
  const { heroData, loadHeroData } = useHero();
  const { uploading, preview, error, loadUploadData } = useUpload();

  const [activeTab, setActiveTab] = useState("editar");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    loadHeroData();
  }, [loadHeroData]);

  const filteredHeroes = heroData.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  // ================= Lidando com o upload de imagem =======
  const handleFileChange = async (e) => {
    console.log("COMPONENTE-Função chamada no adminHero");
    const file = e.target.files?.[0];
    if (!file) return;
    const response = await loadUploadData(file);
    console.log("COMPONENTE- Resposta do upload recebida:", response);
    if (response?.url) {
      onChange("imagem", response.url);
    }
  };

  //  FUNÇÃO QUE EXIBE OS DADOS NO CONSOLE
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("📝 DADOS DO NOVO BANNER:");
    console.log("Título:", hero.titulo || "⚠️ Não preenchido");
    console.log("Subtítulo:", hero.subtitulo || "⚠️ Não preenchido");
    console.log("Descrição:", hero.descricao || "⚠️ Não preenchido");
    console.log("Texto do Botão:", hero.textoBotao || "⚠️ Não preenchido");
    console.log("Imagem:", hero.imagem || "⚠️ Não preenchido");
    console.log("Link:", hero.button_link || "⚠️ Não preenchido");
    console.log("----------------------------------------");

    // Mostra preview na tela
    setShowPreview(true);

    // Aqui depois você chama a API para salvar
    // await saveHero(hero);
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho com abas */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex flex-wrap gap-2 p-4">
            <button
              onClick={() => setActiveTab("editar")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "editar"
                  ? "bg-[#E07B39] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              ✏️ Criar Novo Banner
            </button>
            <button
              onClick={() => setActiveTab("lista")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "lista"
                  ? "bg-[#E07B39] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              📋 Lista de Banners ({heroData.length})
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ABA: CRIAR NOVO BANNER */}
        {/* ============================================================ */}
        {activeTab === "editar" && (
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>🎯</span> Criar Novo Banner
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Título Principal *">
                  <input
                    value={hero.titulo || ""}
                    onChange={(event) => onChange("titulo", event.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all"
                    placeholder="Digite o título..."
                  />
                </Field>

                <Field label="Subtítulo">
                  <input
                    value={hero.subtitulo || ""}
                    onChange={(event) =>
                      onChange("subtitulo", event.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all"
                    placeholder="Digite o subtítulo..."
                  />
                </Field>
              </div>

              <Field label="Texto de Descrição">
                <textarea
                  rows="3"
                  value={hero.descricao || ""}
                  onChange={(event) =>
                    onChange("descricao", event.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none resize-none transition-all"
                  placeholder="Digite a descrição..."
                />
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Texto do Botão">
                  <input
                    value={hero.textoBotao || ""}
                    onChange={(event) =>
                      onChange("textoBotao", event.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all"
                    placeholder="Ex: Saiba Mais"
                  />
                </Field>

                <Field label="Link do Botão">
                  <input
                    value={hero.button_link || "/noticiasPage"}
                    onChange={(event) =>
                      onChange("button_link", event.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all"
                    placeholder="/projetos"
                  />
                </Field>
              </div>
              {/*=====================TRATANDO DA IMAGEM==========*/}
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

                {preview && !uploading && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={preview}
                    alt="Preview"
                    className="max-w-[200px] rounded-lg shadow-md"
                  />
                )}
              </div>

              {/*==========================================================*/}

              {/* 🔥 BOTÕES */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                <button
                  type="submit"
                  className="bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                  onClick={() => console.log("🔥 Botão Salvar clicado!")}
                >
                  💾 Salvar Banner (ver console)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    console.log("🧹 Limpando formulário...");
                    onChange("titulo", "");
                    onChange("subtitulo", "");
                    onChange("descricao", "");
                    onChange("textoBotao", "");
                    onChange("button_link", "");
                    onChange("imagem", "");
                    setShowPreview(false);
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                  🗑️ Limpar
                </button>
              </div>
            </form>

            {/* 🔥 PREVIEW DOS DADOS (aparece depois de salvar) */}
            {showPreview && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <h3 className="font-bold text-green-800 mb-2">
                  ✅ Dados do Banner (ver console também):
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-bold">Título:</span>{" "}
                    {hero.titulo || "⚠️ Não preenchido"}
                  </p>
                  <p>
                    <span className="font-bold">Subtítulo:</span>{" "}
                    {hero.subtitulo || "⚠️ Não preenchido"}
                  </p>
                  <p>
                    <span className="font-bold">Descrição:</span>{" "}
                    {hero.descricao || "⚠️ Não preenchido"}
                  </p>
                  <p>
                    <span className="font-bold">Botão:</span>{" "}
                    {hero.textoBotao || "⚠️ Não preenchido"}
                  </p>
                  <p>
                    <span className="font-bold">Link:</span>{" "}
                    {hero.button_link || "⚠️ Não preenchido"}
                  </p>
                  <p>
                    <span className="font-bold">Imagem:</span>{" "}
                    {hero.imagem ? "✅ Selecionada" : "⚠️ Não preenchido"}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* ABA: LISTA DE BANNERS */}
        {/* ============================================================ */}
        {activeTab === "lista" && (
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span>📋</span> Banners Cadastrados
                <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {heroData.length} {heroData.length === 1 ? "item" : "itens"}
                </span>
              </h2>

              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Buscar banner..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all w-full md:w-64"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  🔍
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {filteredHeroes.length > 0 ? (
                filteredHeroes.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-wrap items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#E07B39] hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                      {item.image_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image_url}
                          alt={item.title}
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
                        {item.title || "Sem título"}
                      </p>
                      <p className="text-xs text-gray-500 truncate max-w-[300px]">
                        {item.subtitle || "Sem subtítulo"}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                          ID: {item.id}
                        </span>
                        {item.destaque && (
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                            ⭐ Destaque
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 ml-auto">
                      <button
                        type="button"
                        onClick={() => {
                          console.log("📝 Editando banner:", item);
                          onChange("titulo", item.title);
                          onChange("subtitulo", item.subtitle || "");
                          onChange("descricao", item.description_text || "");
                          onChange("textoBotao", item.button_text || "");
                          onChange("button_link", item.button_link || "");
                          onChange("imagem", item.image_url || "");
                          setActiveTab("editar");
                        }}
                        className="bg-[#E07B39] hover:bg-[#c96a2e] text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-medium flex items-center gap-1"
                      >
                        📝 Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          console.log(
                            "🖼️ Usando imagem do banner:",
                            item.image_url,
                          );
                          onChange("imagem", item.image_url);
                          setActiveTab("editar");
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-medium flex items-center gap-1"
                      >
                        🖼️ Usar imagem
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          console.log(
                            "🗑️ Excluindo banner:",
                            item.id,
                            "-",
                            item.title,
                          );
                          if (
                            confirm(
                              `Tem certeza que deseja excluir o banner "${item.title}"?`,
                            )
                          ) {
                            // deleteHero(item.id);
                          }
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-medium flex items-center gap-1"
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
                      ? "Nenhum banner encontrado com esse termo."
                      : "Nenhum banner cadastrado ainda."}
                  </p>
                </div>
              )}
            </div>

            {filteredHeroes.length > 0 && (
              <div className="mt-6 p-4 bg-gray-100 rounded-xl text-sm text-gray-600 flex flex-wrap justify-between items-center">
                <span>
                  📊 Total: <strong>{heroData.length}</strong> banners
                </span>
                <span>
                  🖼️ Com imagem:{" "}
                  <strong>{heroData.filter((i) => i.image_url).length}</strong>
                </span>
                <span>
                  ⭐ Em destaque:{" "}
                  <strong>{heroData.filter((i) => i.destaque).length}</strong>
                </span>
              </div>
            )}
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
