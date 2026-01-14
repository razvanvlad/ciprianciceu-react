import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import BlogArticlesArea from "@components/blogs/blog-articles-area";
import blogBg from '@assets/img/ciceu/princeton-black-white-canvas.webp';
import { useTranslations } from '@context/IntlContext';

export default function Blog() {
  const t = useTranslations('blog.seo');

  return (
    <Wrapper>
      <SEO
        pageTitle={t('title')}
        description={t('description')}
        url="/blog"
        type="website"
      />
      <HeaderEight />
      <SectionArea
        title="Blog"
        subtitle={
          <>
            Insights, analysis, and perspectives on technology, trading, <br />
            blockchain, and innovation.
          </>
        }
        bgImage={blogBg}
      />
      <BlogArticlesArea />
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
        ...(await import(`../../messages/${locale}/blog.json`)).default,
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
