import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsFormMain from "@elements/elements-form";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Form'} />
      <HeaderEight />
      <ElementsFormMain/>
      <FooterSeven />
    </Wrapper>
  )
}

