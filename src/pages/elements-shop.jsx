import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ElementsShopMain from "@elements/elements-shop";


export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Element Shop"} />
      <HeaderEight />
      <ElementsShopMain />
      <FooterSeven />
    </Wrapper>
  );
}
