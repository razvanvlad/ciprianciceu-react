if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import SEO from "@components/seo";
import "../styles/index.scss";
import { VideoProvider } from "src/provider/VideoProvider";
import 'react-tooltip/dist/react-tooltip.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <VideoProvider>
        <Component {...pageProps} />
      </VideoProvider>
    </>
  );
}

export default MyApp;
