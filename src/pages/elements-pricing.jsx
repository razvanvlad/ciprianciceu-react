import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsPricingMain from "@elements/elements-pricing";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Pricing"} />
      <HeaderEight />
      <ElementsPricingMain />
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
