import { useCallback, useState } from "react";
import { fetchGaleriaData } from "@/services/GaleriaServices";

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

  return { 
    //dados da galeria
        galeriaData,
        loading,
        error,
    //função para carregar os dados da galeria
        loadGaleriaData 
    };
}
