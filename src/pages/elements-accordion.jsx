import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsAccordionMain from "@elements/elements-accordion";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Accordion'} />
      <HeaderEight />
      <ElementsAccordionMain/>
      <FooterSeven />
    </Wrapper>
  )
}

