import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ElementsGalleryMain from "@elements/elements-gallery";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Element Gallery'} />
      <HeaderEight />
      <ElementsGalleryMain/>
      <FooterSeven />
    </Wrapper>
  )
}

