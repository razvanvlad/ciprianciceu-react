import SEO from "@components/seo";
import "../styles/index.scss";
import { VideoProvider } from "src/provider/VideoProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { inter, poppins } from '@lib/fonts';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { IntlProvider } from '@context/IntlContext';

// Web Vitals tracking function
export function reportWebVitals(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to analytics in production (optional - uncomment when analytics API is ready)
  // if (process.env.NODE_ENV === 'production') {
  //   const body = JSON.stringify(metric);
  //   const url = '/api/analytics';
  //
  //   if (navigator.sendBeacon) {
  //     navigator.sendBeacon(url, body);
  //   } else {
  //     fetch(url, { body, method: 'POST', keepalive: true });
  //   }
  // }
}

function MyApp({ Component, pageProps }) {
  // Bootstrap removed - using custom components and utilities
  const router = useRouter();

  // Extract locale from URL path (more reliable than router.query on initial SSR)
  // URL pattern: /[locale]/... (e.g., /en/blog, /ro/press)
  const locales = ['en', 'fr', 'ro', 'ar'];
  const pathSegments = router.asPath.split('/').filter(Boolean);
  const pathLocale = locales.includes(pathSegments[0]) ? pathSegments[0] : null;

  // Priority: path locale > router.query > default 'en'
  const locale = pathLocale || router.query.locale || 'en';

  // Load RTL styles for Arabic
  useEffect(() => {
    if (locale === 'ar') {
      import('../../public/assets/scss/rtl.scss');
    }
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={pageProps.messages}>
      <div
        className={`${inter.variable} ${poppins.variable}`}
      >
        <SEO />
        <VideoProvider>
          <Component {...pageProps} />
        </VideoProvider>
      </div>
    </IntlProvider>
  );
}

export default MyApp;
