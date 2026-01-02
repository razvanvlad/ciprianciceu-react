import React from 'react';
import SEO from '@components/seo';
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import PortfolioBanner from '@components/hero-banners/portfolio-banner';
import PortfolioAbout from '@components/abouts/portfolio-about';
import PortfolioFeature from '@components/features/portfolio-feature';
import SliderPortfolioArea from '@components/portfolio-details/slider-details/slider-portfolio-area';
import SliderItems from '@components/portfolio-details/slider-details/slider-items';
import PortfolioSkills from '@components/skills/portfolio-skills';
import AgencyBrands from '@components/brands/agency-brands';
import BlogGridArea from '@components/blogs/blog-grid-area';

export default function Home() {
  return (
    <Wrapper>
      <SEO
        pageTitle={'Ciprian Ciceu – FinTech & Blockchain Entrepreneur | Founder Mainet X'}
        description="Ciprian Ciceu is a FinTech & Blockchain entrepreneur, Founder & CEO of Mainet X, building scalable financial ecosystems from Dubai to Europe."
        url="/"
      />
      <HeaderEight />
      <PortfolioBanner />
      <PortfolioAbout />
      <PortfolioFeature />
      <SliderPortfolioArea pt="0" />
      <SliderItems />
      <PortfolioSkills />
      <AgencyBrands spacing={true} pt="0" />
      <BlogGridArea limit={3} />
      <FooterSeven />
    </Wrapper>
  );
}
