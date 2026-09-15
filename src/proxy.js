import { NextResponse } from "next/server";
import { isAdminUser, verifyAuthToken } from "@/lib/auth";

export async function proxy(request) {
  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/loginPage", request.url));
  }

  try {
    const payload = await verifyAuthToken(token);

    if (!isAdminUser(payload)) {
      return NextResponse.redirect(new URL("/loginPage", request.url));
    }

    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/loginPage", request.url));
    response.cookies.delete("auth-token");
    return response;
  }
}

export const config = {
  matcher: ["/admPage/:path*"],
};
