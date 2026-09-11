export async function fetchGaleriaData() {
  try {
    const response = await fetch("/api/galeria");

    if (!response.ok) {
      throw new Error("Erro ao buscar galeria");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro em fetchGaleriaData:", error);
    throw error;
  }
}

export async function addGaleria(data) {
  try {
    const response = await fetch("/api/galeria", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.error || "Erro ao adicionar imagem na galeria");
    }

    return result;
  } catch (error) {
    console.error("Erro em addGaleria:", error);
    throw error;
  }
}
