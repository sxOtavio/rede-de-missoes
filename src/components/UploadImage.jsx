'use client';

import { useState } from 'react';

export default function UploadImagem({ onUploadComplete }) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview local
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);

    setUploading(true);
    setError('');

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
        onUploadComplete(result.url);
      } else {
        setError(result.error || 'Erro ao enviar imagem');
      }
    } catch (error) {
      console.error('Erro no upload:', error);
      setError('Erro ao enviar imagem');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#fef0e8] file:text-[#E07B39] hover:file:bg-[#fce8d8] cursor-pointer"
      />
      
      {uploading && <p className="text-sm text-gray-500">⏳ Enviando imagem...</p>}
      
      {error && <p className="text-sm text-red-500">❌ {error}</p>}
      
      {preview && !uploading && (
        // eslint-disable-next-line @next/next/no-img-element
        <img 
          src={preview} 
          alt="Preview" 
          className="max-w-[200px] rounded-lg shadow-md" 
        />
      )}
    </div>
  );
}