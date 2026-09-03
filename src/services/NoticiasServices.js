// Buscar todos os heros
export async function fetchNoticiasData() {
  try {
    const response = await fetch("/api/noticias", {
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar noticias");
    }
    const data = await response.json();
    // console.log("Noticias recebidas no service:", data);
    return data;
  } catch (error) {
    console.error("Erro em fetchNoticiasData:", error);
    throw error;
  }
}