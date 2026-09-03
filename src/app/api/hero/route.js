import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

// Adicionamos o 'request' aqui nos parênteses
export async function GET(request) {
  const client = await pool.connect();

  try {
    // Recebe as noticias do banco de dados
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
