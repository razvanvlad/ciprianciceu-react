import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridArea from "@components/blogs/blog-grid-area";
import { useTranslations } from '@context/IntlContext';

export default function Press() {
  const t = useTranslations('press.seo');

  return (
    <Wrapper>
      <SEO
        pageTitle={t('title')}
        description={t('description')}
        url="/press"
        type="website"
      />
      <HeaderEight />
      <SliderBreadcrumb />
      <BlogGridArea url="press" />
      <FooterSeven />
    </Wrapper>
  )
}

// Load translations for this page
export async function getStaticProps({ params }) {
  const locale = params.locale;

  return {
    props: {
      messages: {
        ...(await import(`../../messages/${locale}/common.json`)).default,
        ...(await import(`../../messages/${locale}/press.json`)).default,
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
