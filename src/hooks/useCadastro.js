import { useState } from "react";
import { cadastrarUsuario } from "@/services/CadastroServices";

export function useCadastro() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitCadastro = async (data) => {
    setLoading(true);
    setError("");

    try {
      return await cadastrarUsuario(data);
    } catch (submitError) {
      setError(submitError.message);
      return { success: false, error: submitError.message };
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, setError, submitCadastro };
}
