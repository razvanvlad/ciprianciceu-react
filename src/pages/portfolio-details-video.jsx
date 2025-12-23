import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioVideoDetailsArea from "@components/portfolio-details/video-details";


export default function PortfolioDetailsVideo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Details'} />
      <HeaderEight />
      <PortfolioVideoDetailsArea/>
      <FooterSeven />
    </Wrapper>
  )
}

