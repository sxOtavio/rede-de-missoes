"use client";

import { useEffect, useMemo, useState } from "react";
import { useNoticias } from "@/hooks/useNoticias";
import { useUpload } from "@/hooks/useUpload";

const initialNoticia = {
  titulo: "",
  subtitulo: "",
  resumo: "",
  conteudo: "",
  imagem: "",
  imagem_url: "",
  autor: "",
  categoria: "",
  tags: [],
  destaque: false,
  ativo: true,
};

export default function AdminNoticias({
  noticias: propNoticias,
  onChange,
  onAdd,
  onDelete,
}) {
  const {
    noticiasData,
    loadNoticiasData,
    saveNoticia,
    removeNoticia,
    error: noticiasError,
  } = useNoticias();
  const { uploading, preview, error, loadUploadData } = useUpload();

  const [activeTab, setActiveTab] = useState("editar");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState(initialNoticia);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadNoticiasData();
  }, [loadNoticiasData]);

  const noticias = useMemo(
    () =>
      Array.isArray(propNoticias) && propNoticias.length > 0
        ? propNoticias
        : noticiasData,
    [propNoticias, noticiasData],
  );

  const filteredNoticias = noticias.filter((item) =>
    (item.titulo || "").toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const updateField = (campo, valor) => {
    setFormData((current) => ({ ...current, [campo]: valor }));
    if (onChange) {
      onChange(campo, valor);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const response = await loadUploadData(file);
    if (response?.url) {
      const url = response.url;
      setFormData((current) => ({
        ...current,
        imagem: url,
        imagem_url: url,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (uploading) {
      return;
    }

    const noticiaParaSalvar = {
      ...formData,
      imagem_url: formData.imagem_url || formData.imagem,
      imagem: formData.imagem || formData.imagem_url,
      tags: Array.isArray(formData.tags) ? formData.tags : [],
    };

    if (!noticiaParaSalvar.imagem_url) {
      return;
    }

    const response = await saveNoticia(noticiaParaSalvar);
    if (response?.success) {
      setShowPreview(true);
      setFormData(initialNoticia);
      if (onAdd) onAdd();
      setActiveTab("lista");
    }
  };

  const handleDelete = async (id) => {
    const noticia = noticias.find((item) => item.id === id);
    if (
      !window.confirm(
        `Tem certeza que deseja excluir a notícia "${noticia?.titulo || "Sem título"}"?`,
      )
    ) {
      return;
    }

    setDeletingId(id);
    try {
      await removeNoticia(id);
    } finally {
      setDeletingId(null);
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
              ✏️ Criar Nova Notícia
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
              📋 Lista de Notícias ({noticias.length})
            </button>
          </div>
        </div>

        {activeTab === "editar" && (
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>📰</span> Criar Nova Notícia
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Título Principal *">
                  <input
                    value={formData.titulo}
                    onChange={(event) =>
                      updateField("titulo", event.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all"
                    placeholder="Digite o título da notícia..."
                  />
                </Field>

                <Field label="Subtítulo">
                  <input
                    value={formData.subtitulo}
                    onChange={(event) =>
                      updateField("subtitulo", event.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all"
                    placeholder="Digite o subtítulo..."
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Autor">
                  <input
                    value={formData.autor}
                    onChange={(event) =>
                      updateField("autor", event.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all"
                    placeholder="Nome do autor"
                  />
                </Field>

                <Field label="Categoria">
                  <input
                    value={formData.categoria}
                    onChange={(event) =>
                      updateField("categoria", event.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all"
                    placeholder="Ex: Projetos, Ações, Comunidade"
                  />
                </Field>
              </div>

              <Field label="Resumo">
                <textarea
                  rows="2"
                  value={formData.resumo}
                  onChange={(event) =>
                    updateField("resumo", event.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none resize-none transition-all"
                  placeholder="Resumo curto da notícia..."
                />
              </Field>

              <Field label="Conteúdo completo">
                <textarea
                  rows="4"
                  value={formData.conteudo}
                  onChange={(event) =>
                    updateField("conteudo", event.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none resize-none transition-all"
                  placeholder="Digite o conteúdo completo da notícia..."
                />
              </Field>

              <Field label="Tags (separadas por vírgula)">
                <input
                  value={
                    Array.isArray(formData.tags) ? formData.tags.join(", ") : ""
                  }
                  onChange={(event) =>
                    updateField(
                      "tags",
                      event.target.value
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter(Boolean),
                    )
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none transition-all"
                  placeholder="Ex: voluntariado, impacto, brasilia"
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

                {(preview || formData.imagem_url || formData.imagem) &&
                  !uploading && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={preview || formData.imagem_url || formData.imagem}
                      alt="Preview da notícia"
                      className="max-w-[220px] rounded-lg shadow-md"
                    />
                  )}
              </div>

              <div className="flex items-center gap-6 mt-4">
                <Check
                  label="Em destaque"
                  checked={formData.destaque}
                  onChange={(value) => updateField("destaque", value)}
                />
                <Check
                  label="Ativo"
                  checked={formData.ativo}
                  onChange={(value) => updateField("ativo", value)}
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-[#E07B39] hover:bg-[#c96a2e] text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  {uploading ? "⏳ Enviando imagem..." : "💾 Salvar Notícia"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(initialNoticia);
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
                  ✅ Notícia salva com sucesso
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-bold">Título:</span>{" "}
                    {formData.titulo || "⚠️ Não preenchido"}
                  </p>
                  <p>
                    <span className="font-bold">Autor:</span>{" "}
                    {formData.autor || "⚠️ Não preenchido"}
                  </p>
                  <p>
                    <span className="font-bold">Categoria:</span>{" "}
                    {formData.categoria || "⚠️ Não preenchido"}
                  </p>
                  <p>
                    <span className="font-bold">Destaque:</span>{" "}
                    {formData.destaque ? "Sim" : "Não"}
                  </p>
                  <p>
                    <span className="font-bold">Ativo:</span>{" "}
                    {formData.ativo ? "Sim" : "Não"}
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
                <span>📋</span> Notícias Cadastradas
                <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {noticias.length} {noticias.length === 1 ? "item" : "itens"}
                </span>
              </h2>

              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Buscar notícia..."
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
              {filteredNoticias.length > 0 ? (
                filteredNoticias.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-wrap items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#E07B39] hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                      {item.imagem_url || item.imagem ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.imagem_url || item.imagem}
                          alt={item.titulo}
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
                        {item.titulo || "Sem título"}
                      </p>
                      <p className="text-xs text-gray-500 truncate max-w-[300px]">
                        {item.resumo || item.subtitulo || "Sem resumo"}
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
                          setFormData({
                            titulo: item.titulo || "",
                            subtitulo: item.subtitulo || "",
                            resumo: item.resumo || "",
                            conteudo: item.conteudo || "",
                            imagem: item.imagem || item.imagem_url || "",
                            imagem_url: item.imagem_url || item.imagem || "",
                            autor: item.autor || "",
                            categoria: item.categoria || "",
                            tags: Array.isArray(item.tags) ? item.tags : [],
                            destaque: Boolean(item.destaque),
                            ativo: item.ativo !== false,
                          });
                          setActiveTab("editar");
                        }}
                        className="bg-[#E07B39] hover:bg-[#c96a2e] text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-medium"
                      >
                        📝 Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        disabled={deletingId === item.id}
                        className="bg-red-500 hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-medium"
                      >
                        {deletingId === item.id ? "Excluindo..." : "🗑️ Excluir"}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-4xl mb-4">📭</p>
                  <p className="text-gray-500">
                    {searchTerm
                      ? "Nenhuma notícia encontrada com esse termo."
                      : "Nenhuma notícia cadastrada ainda."}
                  </p>
                </div>
              )}
              {noticiasError && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  ❌ {noticiasError}
                </p>
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

function Check({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="w-4 h-4 text-[#E07B39] rounded focus:ring-[#E07B39]"
      />
      {label}
    </label>
  );
}
