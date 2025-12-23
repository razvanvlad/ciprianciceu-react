import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsCarouselMain from "@elements/elements-carousel";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Carousel'} />
      <HeaderEight />
      <ElementsCarouselMain/>
      <FooterSeven />
    </Wrapper>
  )
}

