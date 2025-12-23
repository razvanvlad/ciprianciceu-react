import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsTeamMain from "@elements/elements-team";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Team"} />
      <HeaderEight />
      <ElementsTeamMain />
      <FooterSeven />
    </Wrapper>
  );
}
