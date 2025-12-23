import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderDetails from "@components/portfolio-details/slider-details";


export default function PortfolioDetailsSlider() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Details Slider'} />
      <HeaderEight />
      <SliderDetails/>
      <FooterSeven />
    </Wrapper>
  )
}

