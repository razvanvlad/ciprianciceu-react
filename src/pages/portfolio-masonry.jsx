import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import { PortfolioMasonryArea } from "@components/portfolios/portfolio-page-com/portfolio-masonry";


export default function PortfolioMasonry() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Masonry'} />
      <HeaderEight />
      <PortfolioMasonryArea />
      <FooterSeven />
    </Wrapper>
  )
}
