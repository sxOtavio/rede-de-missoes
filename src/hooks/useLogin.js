import { useState } from "react";
import { loginUsuario } from "@/services/AuthServices";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitLogin = async (data) => {
    setLoading(true);
    setError("");

    try {
      return await loginUsuario(data);
    } catch (loginError) {
      setError(loginError.message);
      return { success: false, error: loginError.message };
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, setError, submitLogin };
}
