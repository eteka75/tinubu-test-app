import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "@/src/utils/config";

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
  });

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(en|fr)/:path*", "/app/:path*"],
};
