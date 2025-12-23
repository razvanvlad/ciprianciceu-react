import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioDetailsArea from "@components/portfolio-details/classic-details";


export default function PortfolioDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Details"} />
      <HeaderEight />
      <PortfolioDetailsArea />
      <FooterSeven />
    </Wrapper>
  );
}
