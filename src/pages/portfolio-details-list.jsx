import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioDetailsListArea from "@components/portfolio-details/list-details";


export default function PortfolioDetailsList() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Details'} />
      <HeaderEight />
      <PortfolioDetailsListArea/>
      <FooterSeven />
    </Wrapper>
  )
}

