import { useCallback, useState } from "react";
import { fetchGaleriaData, addGaleria } from "@/services/GaleriaServices";

export function useGaleria() {
  const [galeriaData, setGaleriaData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadGaleriaData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchGaleriaData();
      setGaleriaData(Array.isArray(data) ? data : data.data || []);
    } catch (loadError) {
      console.error("Erro ao carregar dados da galeria:", loadError);
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const saveGaleria = useCallback(
    async (data) => {
      try {
        const response = await addGaleria(data);
        if (response?.success) {
          await loadGaleriaData();
        }
        return response;
      } catch (err) {
        setError(err.message);
        return { success: false, error: err.message };
      }
    },
    [loadGaleriaData],
  );

  return {
    galeriaData,
    loading,
    error,
    loadGaleriaData,
    saveGaleria,
  };
}
