import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsButtonMain from "@elements/elements-button";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Buttons'} />
      <HeaderEight />
      <ElementsButtonMain/>
      <FooterSeven />
    </Wrapper>
  )
}

