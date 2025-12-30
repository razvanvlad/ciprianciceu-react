import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioClassic from "@components/portfolios/portfolio-page-com/portfolio-classic";
import SliderPortfolioArea from '@components/portfolio-details/slider-details/slider-portfolio-area';
import SliderItems from '@components/portfolio-details/slider-details/slider-items';

export default function Portfolio() {
  return (
    <Wrapper>
      <SEO pageTitle={"Projects - Ciprian Ciceu"} />
      <HeaderEight />
      <SliderPortfolioArea pt="0" />
      <SliderItems />
      <FooterSeven />
    </Wrapper>
  );
}
