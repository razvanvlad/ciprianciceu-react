import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsProcessMain from "@elements/elements-process";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Process"} />
      <HeaderEight />
      <ElementsProcessMain />
      <FooterSeven />
    </Wrapper>
  );
}
