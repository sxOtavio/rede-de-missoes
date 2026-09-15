import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

function extrairStorageFile(url) {
  const marcador = "/storage/v1/object/public/";
  const index = url?.indexOf(marcador);

  if (index === -1) return null;

  const partes = url.slice(index + marcador.length).split("/");
  const bucket = partes.shift();
  const path = partes.join("/");

  return bucket && path ? { bucket, path } : null;
}

export async function removePublicStorageFile(url) {
  const storageFile = extrairStorageFile(url);
  if (!storageFile) return;

  const { error } = await supabaseAdmin.storage
    .from(storageFile.bucket)
    .remove([storageFile.path]);

  if (error) {
    throw new Error(`Erro ao remover arquivo do Storage: ${error.message}`);
  }
}
