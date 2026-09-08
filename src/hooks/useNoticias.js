import { useCallback, useState } from "react";
import { fetchNoticiasData } from "@/services/NoticiasServices";

export function useNoticias() {
  const [noticiasData, setNoticiasData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadNoticiasData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchNoticiasData();
      setNoticiasData(Array.isArray(data) ? data : data.data || []);
    } catch (loadError) {
      console.error("Erro ao carregar dados das noticias:", loadError);
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { noticiasData, loading, error, loadNoticiasData };
}
