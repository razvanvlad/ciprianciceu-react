import { useEffect } from 'react';
import SEO from "@components/seo";
import "../styles/index.scss";
import { VideoProvider } from "src/provider/VideoProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { inter, spaceGrotesk, roboto, syne, oswald, rajdhani, poppins } from '@lib/fonts';

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
  useEffect(() => {
    // Lazy load Bootstrap after initial render
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        import("bootstrap/dist/js/bootstrap");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${inter.variable} ${spaceGrotesk.variable} ${roboto.variable} ${syne.variable} ${oswald.variable} ${rajdhani.variable} ${poppins.variable}`}
    >
      <SEO />
      <VideoProvider>
        <Component {...pageProps} />
      </VideoProvider>
    </div>
  );
}

export default MyApp;
