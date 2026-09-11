import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";


// ============================================================
// GET - Lista todos os banners
// ============================================================

export async function GET() {
  const client = await pool.connect();

  try {
   
    console.log("BackEnd-conexão GET HERO estabelecida");

    const result = await client.query("SELECT * FROM hero");
    console.log(`${result.rows.length} heroes carregados`);

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "BackEnd-Erro ao dar GET HERO" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}

// ============================================================
// POST - Cria um novo banner
// ============================================================
export async function POST(request) {
  const client = await pool.connect();

  try {
    console.log("BackEnd-conexão POST HERO estabelecida");
    const body = await request.json();

    // Validações
    if (!body.titulo || body.titulo.trim() === "") {
      return NextResponse.json(
        { error: "Título é obrigatório" },
        { status: 400 }
      );
    }

    if (!body.imagem || body.imagem.trim() === "") {
      return NextResponse.json(
        { error: "URL da imagem é obrigatória" },
        { status: 400 }
      );
    }

   
    const query = `
      INSERT INTO hero (
        title,
        subtitle,
        description_text,
        button_text,
        button_link,
        image_url
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    const values = [
      body.titulo.trim(),
      body.subtitulo?.trim() || "",
      body.descricao?.trim() || "",
      body.textoBotao?.trim() || "Saiba Mais",
      body.button_link?.trim() || "/noticiasPage",
      body.imagem.trim(),
    ];

    const result = await client.query(query, values);

    return NextResponse.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Erro no POST /hero:", error);
    return NextResponse.json(
      { error: "Erro interno ao criar banner" },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}
