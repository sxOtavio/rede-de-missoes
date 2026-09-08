
export async function fetchGaleriaData() {
  try {
    const response = await fetch("/api/galeria", {
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar galeria");
    }
    const data = await response.json();
     //console.log("Galeria recebida no service:", data);
    return data;
  } catch (error) {
    console.error("Erro em fetchGaleriaData:", error);
    throw error;
  }
}