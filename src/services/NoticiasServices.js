export async function fetchNoticiasData() {
  try {
    const response = await fetch("/api/noticias");

    if (!response.ok) {
      throw new Error("Erro ao buscar noticias");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro em fetchNoticiasData:", error);
    throw error;
  }
}

export async function addNoticia(data) {
  try {
    const response = await fetch("/api/noticias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.error || "Erro ao adicionar notícia");
    }

    return result;
  } catch (error) {
    console.error("Erro em addNoticia:", error);
    throw error;
  }
}

export async function deleteNoticia(id) {
  const response = await fetch("/api/noticias", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error || "Erro ao deletar notícia");
  }

  return result;
}
