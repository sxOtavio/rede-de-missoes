import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { createAuthToken, isAdminUser } from "@/lib/auth";
import { verifyPassword } from "@/lib/password";

export async function POST(request) {
  const client = await pool.connect();

  try {
    const body = await request.json();
    const email = body.email?.trim().toLowerCase();
    const senha = body.senha;

    if (!email || !senha) {
      return NextResponse.json(
        { message: "E-mail e senha são obrigatórios" },
        { status: 400 },
      );
    }

    const result = await client.query(
      `
        SELECT id, nome, email, senha_hash, role, status
        FROM usuarios
        WHERE email = $1
        LIMIT 1;
      `,
      [email],
    );
    const user = result.rows[0];

    if (!user || !(await verifyPassword(senha, user.senha_hash))) {
      return NextResponse.json(
        { message: "E-mail ou senha inválidos" },
        { status: 401 },
      );
    }

    if (user.status !== "ativo") {
      return NextResponse.json(
        { message: "Sua conta ainda está pendente de aprovação" },
        { status: 403 },
      );
    }

    if (!isAdminUser(user)) {
      return NextResponse.json(
        { message: "Você não tem permissão para acessar o painel" },
        { status: 403 },
      );
    }

    const token = await createAuthToken(user);
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        role: user.role,
      },
    });

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Erro no POST /api/auth/login:", error);
    return NextResponse.json(
      { message: "Erro interno ao fazer login" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}
