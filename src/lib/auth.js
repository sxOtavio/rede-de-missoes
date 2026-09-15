import { SignJWT, jwtVerify } from "jose";

const encoder = new TextEncoder();

function getJwtSecret() {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET não configurado");
  }

  return encoder.encode(process.env.JWT_SECRET);
}

export async function createAuthToken(user) {
  return new SignJWT({
    email: user.email,
    role: user.role,
    status: user.status,
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setSubject(String(user.id))
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(getJwtSecret());
}

export async function verifyAuthToken(token) {
  const { payload } = await jwtVerify(token, getJwtSecret(), {
    algorithms: ["HS256"],
  });

  return payload;
}

export function isAdminUser(user) {
  return (
    user?.status === "ativo" && ["admin", "administrador"].includes(user?.role)
  );
}
