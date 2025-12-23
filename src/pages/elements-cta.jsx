import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsCtaMain from "@elements/elements-cta";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Cta'} />
      <HeaderEight />
      <ElementsCtaMain/>
      <FooterSeven />
    </Wrapper>
  )
}

