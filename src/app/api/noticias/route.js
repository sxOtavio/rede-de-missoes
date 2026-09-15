import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";
import { isAdminUser, verifyAuthToken } from "@/lib/auth";
import { removePublicStorageFile } from "@/lib/storage";

async function autorizarAdmin(request) {
  const token = request.cookies.get("auth-token")?.value;
  if (!token) return false;

  try {
    return isAdminUser(await verifyAuthToken(token));
  } catch {
    return false;
  }
}

function gerarSlug(texto) {
  return (
    (texto || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "noticia"
  );
}

export async function GET() {
  const client = await pool.connect();

  try {
    console.log("BackEnd-conexão GET NOTICIAS estabelecida");

    const result = await client.query(
      "SELECT * FROM noticias ORDER BY id DESC",
    );
    console.log(`${result.rows.length} noticias carregadas`);

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "BackEnd-Erro ao dar GET NOTICIAS" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}

export async function POST(request) {
  const client = await pool.connect();

  try {
    console.log("BackEnd-conexão POST NOTICIAS estabelecida");
    const body = await request.json();

    if (!body.titulo || body.titulo.trim() === "") {
      return NextResponse.json(
        { error: "Título é obrigatório" },
        { status: 400 },
      );
    }

    const imagemUrl = body.imagem_url?.trim() || body.imagem?.trim() || "";
    if (!imagemUrl) {
      return NextResponse.json(
        { error: "URL da imagem é obrigatória" },
        { status: 400 },
      );
    }

    const slug = (body.slug || gerarSlug(body.titulo)).trim();

    const query = `
      INSERT INTO noticias (
        slug,
        titulo,
        subtitulo,
        conteudo,
        resumo,
        imagem_url,
        autor,
        categoria,
        destaque,
        ativo,
        tags
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *;
    `;

    const values = [
      slug,
      body.titulo.trim(),
      body.subtitulo?.trim() || "",
      body.conteudo?.trim() || "",
      body.resumo?.trim() || "",
      imagemUrl,
      body.autor?.trim() || "Equipe Rede de Missões",
      body.categoria?.trim() || "Notícias",
      body.destaque === true,
      body.ativo !== false,
      Array.isArray(body.tags) ? body.tags : [],
    ];

    const result = await client.query(query, values);

    return NextResponse.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Erro no POST /api/noticias:", error);
    return NextResponse.json(
      { error: "Erro interno ao criar notícia" },
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
    const id = Number((await request.json()).id);
    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json(
        { error: "ID da notícia inválido" },
        { status: 400 },
      );
    }

    const result = await client.query(
      "SELECT imagem_url FROM noticias WHERE id = $1 LIMIT 1",
      [id],
    );
    const noticia = result.rows[0];

    if (!noticia) {
      return NextResponse.json(
        { error: "Notícia não encontrada" },
        { status: 404 },
      );
    }

    await removePublicStorageFile(noticia.imagem_url);
    await client.query("DELETE FROM noticias WHERE id = $1", [id]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro no DELETE /api/noticias:", error);
    return NextResponse.json(
      { error: error.message || "Erro interno ao deletar notícia" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}
