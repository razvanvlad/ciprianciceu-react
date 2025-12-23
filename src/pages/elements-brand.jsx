import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsBrandMain from "@elements/elements-brand";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Brand"} />
      <HeaderEight />
      <ElementsBrandMain />
      <FooterSeven />
    </Wrapper>
  );
}
