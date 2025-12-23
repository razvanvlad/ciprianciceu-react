import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsSubscribeMain from "@elements/elements-subscribe";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Subscribe"} />
      <HeaderEight />
      <ElementsSubscribeMain />
      <FooterSeven />
    </Wrapper>
  );
}
