import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridArea from "@components/blogs/blog-grid-area";
import { useTranslations } from '@context/IntlContext';

export default function Press({ localizedArticles }) {
  const t = useTranslations('press.seo');

  return (
    <Wrapper>
      <SEO
        pageTitle={t('title')}
        description={t('description')}
        url="/press"
        pageType="default"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Press" }
        ]}
      />
      <HeaderEight />
      <SliderBreadcrumb localizedArticles={localizedArticles} translationNamespace="press" />
      <BlogGridArea url="press" localizedArticles={localizedArticles} translationNamespace="press" />
      <FooterSeven />
    </Wrapper>
  )
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
        ...(await import(`../../messages/${locale}/press.json`)).default,
      },
      localizedArticles
    }
  };
}
