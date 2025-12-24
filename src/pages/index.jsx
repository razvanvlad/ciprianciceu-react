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
import PortfolioAwards from '@components/awards/portfolio-awards';
import PortfolioTestimonial from '@components/testimonials/portfolio-testimonial';
import AgencyBlogs from '@components/blogs/agency-blogs';
import PortfolioContact from '@components/contacts/portfolio-contact';

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={'Ciprian Ciceu - Portfolio'} />
      <HeaderEight />
      <PortfolioBanner />
      <PortfolioAbout />
      <PortfolioFeature />
      <SliderPortfolioArea pt="0" />
      <SliderItems />
      <PortfolioSkills />
      <AgencyBrands spacing={true} pt="0" />
      <AgencyBlogs />
      <PortfolioAwards />
      <PortfolioTestimonial />
      <PortfolioContact />
      <FooterSeven />
    </Wrapper>
  );
}
