import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioClassic from "@components/portfolios/portfolio-page-com/portfolio-classic";


export default function Portfolio() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Gallery'} />
      <HeaderEight />
      <PortfolioClassic tooltip_hover={true} />
      <FooterSeven />
    </Wrapper>
  )
}
