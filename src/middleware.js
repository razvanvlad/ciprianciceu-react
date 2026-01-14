import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const locales = ['en', 'fr', 'ro', 'ar'];
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect root to default locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // Redirect if there's no locale in path
  const defaultLocale = 'en';
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Match all pathnames except for api, _next, static files
    '/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\..*|_next).*)',
  ]
};
