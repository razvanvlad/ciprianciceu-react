import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioClassic from "@components/portfolios/portfolio-page-com/portfolio-classic";
import SliderPortfolioArea from '@components/portfolio-details/slider-details/slider-portfolio-area';
import SliderItems from '@components/portfolio-details/slider-details/slider-items';
import { useTranslations } from '@context/IntlContext';

export default function Portfolio() {
  const t = useTranslations('portfolio.seo');

  return (
    <Wrapper>
      <SEO
        pageTitle={t('title')}
        description={t('description')}
        url="/portfolio"
      />
      <HeaderEight />
      <SliderPortfolioArea pt="0" />
      <SliderItems />
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
        ...(await import(`../../messages/${locale}/portfolio.json`)).default,
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
