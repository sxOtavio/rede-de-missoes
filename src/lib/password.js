import { scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);

export async function verifyPassword(password, storedHash) {
  const [salt, hash] = (storedHash || "").split(":");

  if (!salt || !hash) {
    return false;
  }

  const derivedKey = await scryptAsync(password, salt, 64);
  const storedKey = Buffer.from(hash, "hex");

  return (
    storedKey.length === derivedKey.length &&
    timingSafeEqual(storedKey, derivedKey)
  );
}
