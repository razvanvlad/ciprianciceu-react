import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const defaultLocale = 'en';

  // Redirect deprecated blog URLs to localized versions
  if (pathname.startsWith('/blog-details/')) {
    // Old blog-details pages used press data, redirect to press
    const id = pathname.replace('/blog-details/', '');
    return NextResponse.redirect(new URL(`/${defaultLocale}/press`, request.url), 301);
  }
  if (pathname === '/blog-details') {
    return NextResponse.redirect(new URL(`/${defaultLocale}/press`, request.url), 301);
  }
  if (pathname.startsWith('/blog-grid') || pathname === '/blog-masonry' || pathname === '/blog-list-sidebar' || pathname === '/blog-details-2') {
    return NextResponse.redirect(new URL(`/${defaultLocale}/blog`, request.url), 301);
  }

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
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Match all pathnames except for api, _next, static files
    '/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\..*|_next).*)',
  ]
};
