import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PRIMARY_HOST = "www.llmetaltech.com";
const SECONDARY_HOSTS = new Set(["lglmetal.com", "www.lglmetal.com"]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (host && SECONDARY_HOSTS.has(host)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https";
    redirectUrl.host = PRIMARY_HOST;

    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
