import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsHeadingMain from "@elements/elements-heading";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Heading'} />
      <HeaderEight />
      <ElementsHeadingMain/>
      <FooterSeven />
    </Wrapper>
  )
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
