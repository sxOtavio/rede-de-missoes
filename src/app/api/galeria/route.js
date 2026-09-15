import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { pool } from "../../../lib/db";
import { isAdminUser, verifyAuthToken } from "@/lib/auth";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

function extrairStoragePath(url) {
  const marcador = "/storage/v1/object/public/";
  const index = url?.indexOf(marcador);

  if (index === -1) return null;

  const partes = url.slice(index + marcador.length).split("/");
  const bucket = partes.shift();
  const path = partes.join("/");

  return bucket && path ? { bucket, path } : null;
}

async function autorizarAdmin(request) {
  const token = request.cookies.get("auth-token")?.value;
  if (!token) return false;

  try {
    return isAdminUser(await verifyAuthToken(token));
  } catch {
    return false;
  }
}

export async function GET() {
  const client = await pool.connect();

  try {
    console.log("BackEnd-conexão GET GALERIA estabelecida");

    const result = await client.query("SELECT * FROM galeria ORDER BY id DESC");
    console.log(`${result.rows.length} imagens carregadas`);

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "BackEnd-Erro ao dar GET GALERIA" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}

export async function POST(request) {
  const client = await pool.connect();

  try {
    console.log("BackEnd-conexão POST GALERIA estabelecida");
    const body = await request.json();

    const titulo = (body.titulo || body.title || "Sem título").trim();
    const descricao = (body.descricao || body.description || "").trim();
    const imagemUrl = (
      body.imagem ||
      body.image_url ||
      body.imagem_url ||
      ""
    ).trim();

    if (!imagemUrl) {
      return NextResponse.json(
        { error: "URL da imagem é obrigatória" },
        { status: 400 },
      );
    }

    const query = `
      INSERT INTO galeria (titulo, descricao, image_url)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const values = [titulo, descricao, imagemUrl];
    const result = await client.query(query, values);

    return NextResponse.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Erro no POST /api/galeria:", error);
    return NextResponse.json(
      { error: "Erro interno ao salvar imagem da galeria" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}

export async function DELETE(request) {
  if (!(await autorizarAdmin(request))) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const client = await pool.connect();

  try {
    const body = await request.json();
    const id = Number(body.id);

    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json(
        { error: "ID da foto inválido" },
        { status: 400 },
      );
    }

    const fotoResult = await client.query(
      "SELECT id, image_url FROM galeria WHERE id = $1 LIMIT 1",
      [id],
    );
    const foto = fotoResult.rows[0];

    if (!foto) {
      return NextResponse.json(
        { error: "Foto não encontrada" },
        { status: 404 },
      );
    }

    const storageFile = extrairStoragePath(foto.image_url);
    if (!storageFile) {
      return NextResponse.json(
        { error: "A URL da foto não pertence ao Supabase Storage" },
        { status: 400 },
      );
    }

    const { error: storageError } = await supabaseAdmin.storage
      .from(storageFile.bucket)
      .remove([storageFile.path]);

    if (storageError) {
      console.error("Erro ao deletar foto do Storage:", storageError);
      return NextResponse.json(
        { error: "Não foi possível remover a foto do Storage" },
        { status: 500 },
      );
    }

    await client.query("DELETE FROM galeria WHERE id = $1", [id]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro no DELETE /api/galeria:", error);
    return NextResponse.json(
      { error: "Erro interno ao deletar foto" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}
