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

