import { useCallback, useState } from "react";
import {
  fetchNoticiasData,
  addNoticia,
  deleteNoticia,
} from "@/services/NoticiasServices";

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

  const saveNoticia = useCallback(
    async (data) => {
      try {
        const response = await addNoticia(data);
        if (response?.success) {
          await loadNoticiasData();
        }
        return response;
      } catch (err) {
        setError(err.message);
        return { success: false, error: err.message };
      }
    },
    [loadNoticiasData],
  );

  const removeNoticia = useCallback(
    async (id) => {
      try {
        const response = await deleteNoticia(id);
        if (response?.success) {
          await loadNoticiasData();
        }
        return response;
      } catch (err) {
        setError(err.message);
        return { success: false, error: err.message };
      }
    },
    [loadNoticiasData],
  );

  return {
    noticiasData,
    loading,
    error,
    loadNoticiasData,
    saveNoticia,
    removeNoticia,
  };
}
