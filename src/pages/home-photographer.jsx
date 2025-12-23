import React from 'react';
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from '@components/seo';
import PhotographerBanner from '@components/hero-banners/photographer-banner';
import PhotographerPortfolio from '@components/portfolios/photographer-portfolio';
import PhotographyPrice from '@components/pricings/photography-price';
import PhotographyService from '@components/services/photography-services';
import PhotographyReview from '@components/review-area/photography-review';
import PhotographyTestimonial from '@components/testimonials/photography-testimonial';
import PhotographerBrands from '@components/brands/photographer-brands';
import PhotographyInstagram from '@components/instagram/photography-instagram';
import PhotographerAbout from '@components/abouts/photographer-about';


const HomePhotographer = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Photographer'} />
      <HeaderEight />
      <PhotographerBanner />
      <PhotographerAbout />
      <PhotographerPortfolio />
      <PhotographyPrice />
      <PhotographyService />
      <PhotographyReview />
      <PhotographyTestimonial />
      <PhotographerBrands />
      <PhotographyInstagram />
      <FooterSeven />
    </Wrapper>
  );
};

export default HomePhotographer;