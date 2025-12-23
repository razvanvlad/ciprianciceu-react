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

