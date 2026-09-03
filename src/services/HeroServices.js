// Buscar todos os heros
export async function fetchHeroData() {
  try {
    const response = await fetch("/api/hero", {
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar heros");
    }
    const data = await response.json();
    // console.log("Heros recebidos no service:", data);
    return data;
  } catch (error) {
    console.error("Erro em fetchHeroData:", error);
    throw error;
  }
}