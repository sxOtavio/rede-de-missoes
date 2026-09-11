import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

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
    const imagemUrl = (body.imagem || body.image_url || body.imagem_url || "").trim();

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
