import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsIconBoxMain from "@elements/elements-iconbox";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element IconBox'} />
      <HeaderEight />
      <ElementsIconBoxMain/>
      <FooterSeven />
    </Wrapper>
  )
}

