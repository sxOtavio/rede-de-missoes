"use client";

const tabs = [
  { id: "hero", label: "🎯 Hero" },
  { id: "noticias", label: "📰 Notícias" },
  { id: "fotos", label: "🖼️ Fotos" },
];

export default function AdminTabs({ activeTab, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
            activeTab === tab.id
              ? "bg-[#E07B39] text-white shadow-md"
              : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
