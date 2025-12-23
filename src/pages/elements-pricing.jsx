import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsPricingMain from "@elements/elements-pricing";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Pricing"} />
      <HeaderEight />
      <ElementsPricingMain />
      <FooterSeven />
    </Wrapper>
  );
}
