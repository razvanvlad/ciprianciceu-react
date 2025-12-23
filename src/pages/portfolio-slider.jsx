import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioSliderArea from "@components/portfolios/portfolio-page-com/portfolio-slider";

export default function PortfolioSlider() {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Slider"} />
      <HeaderEight />
      <PortfolioSliderArea />
    </Wrapper>
  );
}
