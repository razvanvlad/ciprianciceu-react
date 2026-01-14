import React from 'react';
import SEO from '@components/seo';
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import ElementsVideoMain from "@elements/elements-video";
import { useTranslations } from '@context/IntlContext';

export default function Media() {
  const t = useTranslations('media.seo');

  return (
    <Wrapper>
      <SEO
        pageTitle={t('title')}
        description={t('description')}
        url="/media"
      />
      <HeaderEight />
      <ElementsVideoMain />
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
        ...(await import(`../../messages/${locale}/media.json`)).default,
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
