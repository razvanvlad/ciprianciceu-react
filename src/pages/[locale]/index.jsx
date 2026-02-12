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

export default function Home({ localizedArticles }) {
  const t = useTranslations('seo');

  return (
    <Wrapper>
      <SEO
        pageTitle={t('title')}
        description={t('description')}
        url="/"
        pageType="homepage"
      />
      <HeaderEight />
      <PortfolioBanner />
      <PortfolioAbout />
      <PortfolioFeature />
      <SliderPortfolioArea pt="0" />
      <SliderItems />
      <PortfolioSkills />
      <AgencyBrands spacing={true} pt="0" />
      <BlogGridArea limit={3} localizedArticles={localizedArticles} translationNamespace="press" />
      <FooterSeven />
    </Wrapper>
  );
}

// Load translations for this page
export async function getServerSideProps({ params }) {
  const locale = params.locale;

  // Dynamically load localized articles
  const { getLocalizedArticles } = await import('@data/get-localized-articles');
  const localizedArticles = await getLocalizedArticles(locale);

  return {
    props: {
      messages: {
        ...(await import(`../../messages/${locale}/common.json`)).default,
        ...(await import(`../../messages/${locale}/home.json`)).default,
        ...(await import(`../../messages/${locale}/press.json`)).default,
      },
      localizedArticles
    }
  };
}
