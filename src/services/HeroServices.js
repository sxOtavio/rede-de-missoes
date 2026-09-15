// Buscar todos os heros
export async function fetchHeroData() {
  try {
    const response = await fetch("/api/hero", {});

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
// Adiciona um novo hero
export async function addHero(data) {
  const heroData = data;
  console.log("SERVICE- Função chamada addHero", heroData);
  try {
    const response = await fetch("/api/hero", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(heroData),
    });

    if (!response.ok) {
      throw new Error("SERVICE- Erro ao adicionar banners");
    }
    const data = await response.json();
    // console.log("SERVICE- Heros adicionado", data);
    return data;
  } catch (error) {
    console.error("Erro em addHero:", error);
    throw error;
  }
}

export async function deleteHero(id) {
  const response = await fetch("/api/hero", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error || "Erro ao deletar banner");
  }

  return result;
}
