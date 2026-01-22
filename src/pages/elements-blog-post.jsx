import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsBlogPostMain from "@elements/elements-blog-post";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Blog Post'} />
      <HeaderEight />
      <ElementsBlogPostMain/>
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
