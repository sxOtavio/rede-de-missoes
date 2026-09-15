import { randomBytes, scrypt } from "node:crypto";
import { promisify } from "node:util";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { sendAdminCadastroEmail } from "@/lib/email";

const scryptAsync = promisify(scrypt);

async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = await scryptAsync(password, salt, 64);

  return `${salt}:${derivedKey.toString("hex")}`;
}

export async function POST(request) {
  const client = await pool.connect();

  try {
    const body = await request.json();
    const nome = body.nome?.trim();
    const email = body.email?.trim().toLowerCase();
    const senha = body.senha;

    if (!nome || !email || !senha) {
      return NextResponse.json(
        { error: "Nome, e-mail e senha são obrigatórios" },
        { status: 400 },
      );
    }

    if (senha.length < 6) {
      return NextResponse.json(
        { error: "A senha deve ter pelo menos 6 caracteres" },
        { status: 400 },
      );
    }

    const senhaHash = await hashPassword(senha);
    const result = await client.query(
      `
        INSERT INTO usuarios (nome, email, senha_hash, status)
        VALUES ($1, $2, $3, $4)
        RETURNING id, nome, email, status;
      `,
      [nome, email, senhaHash, "pendente"],
    );

    let emailEnviado = true;
    try {
      await sendAdminCadastroEmail({ nome, email });
    } catch (emailError) {
      emailEnviado = false;
      console.error(
        "Erro ao notificar administrador sobre cadastro:",
        emailError,
      );
    }

    return NextResponse.json({
      success: true,
      emailEnviado,
      data: result.rows[0],
    });
  } catch (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Este e-mail já possui uma solicitação de cadastro" },
        { status: 409 },
      );
    }

    console.error("Erro no POST /api/cadastro:", error);
    return NextResponse.json(
      { error: "Erro interno ao realizar cadastro" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}
