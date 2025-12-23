import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsParallaxMain from "@elements/elements-parallax";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Parallax"} />
      <HeaderEight />
      <ElementsParallaxMain />
      <FooterSeven />
    </Wrapper>
  );
}
