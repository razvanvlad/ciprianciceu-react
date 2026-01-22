import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsInstagramMain from "@elements/elements-instagram";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Instagram'} />
      <HeaderEight />
      <ElementsInstagramMain/>
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
