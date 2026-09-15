export async function cadastrarUsuario(data) {
  const response = await fetch("/api/cadastro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error || "Erro ao realizar cadastro");
  }

  return result;
}
