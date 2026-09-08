import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

// Adicionamos o 'request' aqui nos parênteses
export async function GET(request) {
  const client = await pool.connect();

  try {
    // Recebe as noticias do banco de dados
    console.log("BackEnd-conexão GET GALERIA estabelecida");

    const result = await client.query("SELECT * FROM galeria");
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
