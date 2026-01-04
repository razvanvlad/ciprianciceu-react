import SEO from "@components/seo";
import "../styles/index.scss";
import { VideoProvider } from "src/provider/VideoProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { inter, poppins } from '@lib/fonts';

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

  return (
    <div
      className={`${inter.variable} ${poppins.variable}`}
    >
      <SEO />
      <VideoProvider>
        <Component {...pageProps} />
      </VideoProvider>
    </div>
  );
}

export default MyApp;
