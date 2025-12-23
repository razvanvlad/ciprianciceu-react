import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsVideoMain from "@elements/elements-video";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Video"} />
      <HeaderEight />
      <ElementsVideoMain />
      <FooterSeven />
    </Wrapper>
  );
}
