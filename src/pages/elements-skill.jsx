import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsSkillMain from "@elements/elements-skill";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Skill"} />
      <HeaderEight />
      <ElementsSkillMain />
      <FooterSeven />
    </Wrapper>
  );
}
