import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const url = request.nextUrl.clone();

  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-pet/:path*", "/manage-pets/:path*"],
};
