"use client";

export default function AdminFotos({ fotos }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          🖼️ Galeria de Fotos
        </h2>
        <button
          type="button"
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm"
        >
          + Upload
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {fotos.map((foto) => (
          <div
            key={foto.id}
            className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center relative group"
          >
            <span className="text-gray-400 text-sm">📷 {foto.nome}</span>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-3">
              <button
                type="button"
                className="text-white text-sm hover:text-[#E07B39]"
              >
                ✏️
              </button>
              <button
                type="button"
                className="text-white text-sm hover:text-red-400"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
        <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:border-[#E07B39] transition-colors">
          <span className="text-gray-400 text-2xl">+</span>
        </div>
      </div>
    </div>
  );
}
