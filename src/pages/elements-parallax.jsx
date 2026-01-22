import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsParallaxMain from "@elements/elements-parallax";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Parallax"} />
      <HeaderEight />
      <ElementsParallaxMain />
      <FooterSeven />
    </Wrapper>
  );
}

// Load translations for this page
export async function getStaticProps() {
  return {
    props: {
      messages: {
        ...(await import(`../messages/en/common.json`)).default,
        ...(await import(`../messages/en/home.json`)).default,
      }
    }
  };
}
