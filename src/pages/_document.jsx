import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  // Get locale from Next.js data
  const locale = props.__NEXT_DATA__.locale || 'en';
  // Set direction to rtl for Arabic, ltr for all others
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <Html lang={locale} dir={dir}>
      <Head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical hero image */}
        <link
          rel="preload"
          href="/assets/img/ciceu/ciceu-decupat.webp"
          as="image"
          type="image/webp"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
