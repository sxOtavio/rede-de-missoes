import { useCallback, useState } from "react";
import { fetchUpload } from "@/services/uploadServices";

export function useUpload() {
 const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

const loadUploadData = useCallback(async (file) => {
   console.log("HOOK- Funlção chamada no useUpload")
    if (!file) return
   
    // Preview local
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
    setUploading(true);
    setError('');

    // Envia para sua API
    const formData = new FormData();
    formData.append('file', file);
console.log("HOOK- Arquivo preparado para a requisição:", file)
    try {
      const response = await fetchUpload(file);
      if (response.success) {
        // A URL pública da imagem está em result.url
        console.log('HOOK- Imagem enviada com sucesso:', response);
        return response;
      } else {
        setError(response.error || 'Erro ao enviar imagem');
      }
    } catch (error) {
      console.error('Erro no upload:', error);
      setError('Erro ao enviar imagem');
    } finally {
      setUploading(false);
    }
  
  }, []);

  return { uploading, preview, error, loadUploadData };
}
