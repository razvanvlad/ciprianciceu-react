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
import { useTranslations } from '@context/IntlContext';

export default function Home() {
  const t = useTranslations('home.seo');

  return (
    <Wrapper>
      <SEO
        pageTitle={t('title')}
        description={t('description')}
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

// Load translations for this page
export async function getStaticProps({ params }) {
  const locale = params.locale;

  return {
    props: {
      messages: {
        ...(await import(`../../messages/${locale}/common.json`)).default,
        ...(await import(`../../messages/${locale}/home.json`)).default,
      }
    }
  };
}

// Generate static pages for all locales
export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: 'en' } },
      { params: { locale: 'fr' } },
      { params: { locale: 'ro' } },
      { params: { locale: 'ar' } }
    ],
    fallback: false
  };
}
