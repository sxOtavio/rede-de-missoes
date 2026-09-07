"use client";

import { useState } from "react";

export default function AdminProjetos() {
  const [projetos, setProjetos] = useState([
    { id: 1, nome: "Projeto Purim", status: "Ativo" },
    { id: 2, nome: "ITA África", status: "Ativo" },
  ]);

  const adicionarProjeto = () => {
    setProjetos((current) => [
      ...current,
      { id: Date.now(), nome: "Novo Projeto", status: "Ativo" },
    ]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          📁 Gerenciar Projetos
        </h2>
        <button
          type="button"
          onClick={adicionarProjeto}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm"
        >
          + Novo Projeto
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {projetos.map((projeto) => (
              <tr
                key={projeto.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-3">{projeto.nome}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    {projeto.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center space-x-2">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    ✏️ Editar
                  </button>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    🗑️ Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
