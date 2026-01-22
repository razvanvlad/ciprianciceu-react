import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import BlogArticlesArea from "@components/blogs/blog-articles-area";
import blogBg from '@assets/img/ciceu/princeton-black-white-canvas.webp';
import { useTranslations } from '@context/IntlContext';

export default function Blog({ localizedArticles }) {
  const t = useTranslations('blog.seo');
  const tHeader = useTranslations('blog.header');

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
        title={tHeader('title')}
        subtitle={tHeader('subtitle')}
        bgImage={blogBg}
      />
      <BlogArticlesArea localizedArticles={localizedArticles} />
      <FooterSeven />
    </Wrapper>
  )
}

// Load translations for this page
export async function getServerSideProps({ params }) {
  const locale = params.locale;

  // Dynamically load localized blog articles
  const { getLocalizedBlogArticles } = await import('@data/get-localized-blog-articles');
  const localizedArticles = await getLocalizedBlogArticles(locale);

  return {
    props: {
      messages: {
        ...(await import(`../../messages/${locale}/common.json`)).default,
        ...(await import(`../../messages/${locale}/blog.json`)).default,
      },
      localizedArticles
    }
  };
}
