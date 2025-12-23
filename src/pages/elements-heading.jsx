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

