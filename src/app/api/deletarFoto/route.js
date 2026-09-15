// app/api/storage/delete/route.js
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Extrai o path da URL pública do Supabase Storage
function extrairPathDaUrl(url) {
  if (!url) return null;

  const marcador = '/storage/v1/object/public/';
  const index = url.indexOf(marcador);
  if (index === -1) return null;

  const depoisDoMarcador = url.substring(index + marcador.length);
  const partes = depoisDoMarcador.split('/');
  partes.shift(); // Remove o nome do bucket

  return partes.join('/');
}

export async function POST(request) {
  const { url, bucket } = await request.json();

  if (!url) {
    return NextResponse.json({ error: 'URL não informada' }, { status: 400 });
  }

  const path = extrairPathDaUrl(url);

  if (!path) {
    return NextResponse.json({ error: 'URL inválida' }, { status: 400 });
  }

  const { error } = await supabaseAdmin.storage
    .from(bucket || 'Imagem')
    .remove([path]);

  if (error) {
    console.error('Erro ao deletar do Storage:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}