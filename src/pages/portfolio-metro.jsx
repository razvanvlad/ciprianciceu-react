import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioMetroArea from "@components/portfolios/portfolio-page-com/portfolio-metro";


export default function PortfolioMetro() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Metro'} />
      <HeaderEight />
      <PortfolioMetroArea />
      <FooterSeven />
    </Wrapper>
  )
}
