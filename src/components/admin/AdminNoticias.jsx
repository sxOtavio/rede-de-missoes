"use client";

export default function AdminNoticias({ noticias, onChange, onAdd, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          📰 Gerenciar Notícias
        </h2>
        <button
          type="button"
          onClick={onAdd}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm"
        >
          + Nova Notícia
        </button>
      </div>
      {noticias.map((noticia) => (
        <article
          key={noticia.id}
          className="mb-6 p-5 bg-gray-50 rounded-xl border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">
              {noticia.titulo || "Sem título"}
            </h3>
            <button
              type="button"
              onClick={() => onDelete(noticia.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              🗑️ Excluir
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={noticia.titulo}
              onChange={(value) => onChange(noticia.id, "titulo", value)}
              placeholder="Título"
            />
            <Input
              value={noticia.subtitulo}
              onChange={(value) => onChange(noticia.id, "subtitulo", value)}
              placeholder="Subtítulo"
            />
            <Input
              value={noticia.resumo}
              onChange={(value) => onChange(noticia.id, "resumo", value)}
              placeholder="Resumo"
            />
            <Input
              value={noticia.autor}
              onChange={(value) => onChange(noticia.id, "autor", value)}
              placeholder="Autor"
            />
            <textarea
              rows="2"
              value={noticia.conteudo}
              onChange={(event) =>
                onChange(noticia.id, "conteudo", event.target.value)
              }
              placeholder="Conteúdo completo da notícia..."
              className="md:col-span-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none resize-none"
            />
            <Input
              value={noticia.imagem}
              onChange={(value) => onChange(noticia.id, "imagem", value)}
              placeholder="Caminho da imagem"
            />
            <Input
              value={noticia.tags.join(", ")}
              onChange={(value) =>
                onChange(
                  noticia.id,
                  "tags",
                  value.split(",").map((tag) => tag.trim()),
                )
              }
              placeholder="Tags (separadas por vírgula)"
            />
          </div>
          <div className="flex items-center gap-6 mt-4">
            <Check
              label="Em destaque"
              checked={noticia.destaque}
              onChange={(value) => onChange(noticia.id, "destaque", value)}
            />
            <Check
              label="Ativo"
              checked={noticia.ativo}
              onChange={(value) => onChange(noticia.id, "ativo", value)}
            />
          </div>
        </article>
      ))}
    </div>
  );
}

function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B39] focus:border-transparent outline-none"
    />
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
