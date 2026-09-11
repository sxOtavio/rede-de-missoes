// hooks/useHero.js
import { useState, useCallback } from "react";
import { fetchHeroData, addHero } from "@/services/HeroServices";

export function useHero() {
  const [heroData, setHeroData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  //  ================Adciona banner ao banco===================
 
  const saveHero = useCallback(async (data) => {
  console.log("HOOK- Função chamada useHero - saveHero", data);

      try {
        const response = await addHero(data);
        if (response.success) {
          await loadHeroData(); // Recarrega
        }
        return response;
      } catch (err) {
        setError(err.message);
      }
    },
    [],
  );
  // Carrega todos os banners do banco
  const loadHeroData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchHeroData();
      console.log("HOOk- Dados recebidos da API Fetch",response)
      if (!Array.isArray(response)) {
        throw new Error(response?.error || "Erro ao carregar os heros");
      }
      setHeroData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Atualiza um slide específico
  const updateHero = useCallback(
    async (id, dados) => {
      try {
        const response = await fetch(`/api/hero/${id}`, {

        });
        const result = await response.json();
        if (result.success) {
          await loadHeroData(); // Recarrega
        }
        return result;
      } catch (err) {
        setError(err.message);
      }
    },
    [loadHeroData],
  );

  // Define qual slide está ativo
  const setActiveHero = useCallback(
    async (id) => {
      try {
        const response = await fetch(`/api/hero/active`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        const result = await response.json();
        if (result.success) {
          await loadHeroData(); // Recarrega
        }
        return result;
      } catch (err) {
        setError(err.message);
      }
    },
    [loadHeroData],
  );

  return {
    heroData,
    loading,
    error,

    saveHero,
    loadHeroData,
    updateHero,
    setActiveHero,
  };
}
