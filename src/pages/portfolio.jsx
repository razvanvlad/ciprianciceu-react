import { FooterEight, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioClassic from "@components/portfolios/portfolio-page-com/portfolio-classic";

export default function Portfolio() {
  return (
    <Wrapper>
      <SEO pageTitle={"Projects - Ciprian Ciceu"} />
      <HeaderEight />
      <PortfolioClassic />
      <FooterEight />
    </Wrapper>
  );
}
