// hooks/useHero.js
import { useState, useCallback } from "react";

export function useHero() {
  const [heroData, setHeroData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //  Adciona banner ao banco
 /* const addHero = useCallback(async (dados) => {
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
  );*/
  // Carrega todos os banners do banco
  const loadHeroData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/hero");
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao carregar os heros");
      }

      setHeroData(Array.isArray(result) ? result : result.data || []);
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
    loadHeroData,
    updateHero,
    setActiveHero,
  };
}
