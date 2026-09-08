export async function fetchUpload(file) {
  if (!file) return;

  // Envia para sua API
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      // A URL pública da imagem está em result.url
      console.log("SERVICE-Imagem enviada com sucesso:", result.url);
      return result;
    } else {
      throw new Error(result.error || "Erro ao enviar imagem");
    }
  } catch (error) {
    console.error("SERVICE- Erro no upload:", error);
    throw new Error("SERVICE- Erro ao enviar imagem");
  }
}
