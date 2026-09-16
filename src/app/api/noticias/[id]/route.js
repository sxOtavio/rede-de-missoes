import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(request, { params }) {
  const { id } = await params;
  const numericId = Number(id);

  if (!Number.isInteger(numericId) || numericId <= 0) {
    return NextResponse.json(
      { error: "ID da notícia inválido" },
      { status: 400 },
    );
  }

  const client = await pool.connect();

  try {
    const result = await client.query(
      "SELECT * FROM noticias WHERE id = $1 AND ativo = true LIMIT 1",
      [numericId],
    );

    if (!result.rows[0]) {
      return NextResponse.json(
        { error: "Notícia não encontrada" },
        { status: 404 },
      );
    }

    return NextResponse.json(result.rows[0], { status: 200 });
  } catch (error) {
    console.error("Erro no GET /api/noticias/[id]:", error);
    return NextResponse.json(
      { error: "Erro interno ao buscar notícia" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}