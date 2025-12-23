import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsSocialMain from "@elements/elements-social";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Social"} />
      <HeaderEight />
      <ElementsSocialMain />
      <FooterSeven />
    </Wrapper>
  );
}
