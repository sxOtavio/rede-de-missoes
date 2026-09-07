 export async function fetchUploadFoto(e) {
    const file = e.target.files?.[0];
   
    if (!file) return;

    // Envia para sua API
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        // A URL pública da imagem está em result.url
        console.log('Imagem enviada com sucesso:', result.url);
        return result.url;
      } else {
        throw new Error(result.error || 'Erro ao enviar imagem');
      }
    } catch (error) {
      console.error('SERVICE- Erro no upload:', error);
      throw new Error('SERVICE- Erro ao enviar imagem');
    } 
    
  };