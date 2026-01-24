import { useRouter } from "next/router";
// internal
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import DynamicBreadcrumb from "@components/common/breadcrumb/dynamic-breadcrumb";
import BlogArticleDetailsArea from "@components/blogs/blog-details/blog-article-details-area";
import { useTranslations } from '@context/IntlContext';

export default function BlogDetails({ single_blog: propBlog }) {
  const router = useRouter();
  const { locale } = router.query;
  const t = useTranslations('blog.ui');
  const tNotFound = useTranslations('blog.notFound');

  const single_blog = propBlog;

  // Helper function to create slug from title (must match the one in single-article-postbox.jsx)
  const createSlug = (str) => {
    if (!str || typeof str !== 'string') return '';

    // Replace Romanian diacritics with ASCII equivalents
    const normalized = str
      .replace(/ă/g, 'a')
      .replace(/â/g, 'a')
      .replace(/î/g, 'i')
      .replace(/ș/g, 's')
      .replace(/ț/g, 't')
      .replace(/Ă/g, 'A')
      .replace(/Â/g, 'A')
      .replace(/Î/g, 'I')
      .replace(/Ș/g, 'S')
      .replace(/Ț/g, 'T');

    return normalized
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
  };

  // If blog not found, show 404 or redirect
  if (!single_blog) {
    return (
      <Wrapper>
        <SEO pageTitle={tNotFound('title')} />
        <HeaderEight />
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1>{tNotFound('title')}</h1>
          <p>{tNotFound('message')}</p>
          <a href={`/${locale}/blog`}>{tNotFound('returnLink')}</a>
        </div>
        <FooterSeven />
      </Wrapper>
    );
  }

  // Helper function to create slug from title
  const getBlogUrl = (blog) => {
    if (!blog?.title) return '/blog';
    return `/blog/${createSlug(blog.title)}`;
  };

  // Convert date to ISO format for structured data
  const getISODate = (dateString) => {
    if (!dateString) return new Date().toISOString();
    try {
      const date = new Date(dateString);
      return date.toISOString();
    } catch {
      return new Date().toISOString();
    }
  };

  return (
    <Wrapper>
      <SEO
        pageTitle={single_blog?.title || "Blog Article"}
        description={single_blog?.sm_desc || single_blog?.desc || "Read the latest insights from Ciprian Ciceu"}
        image={single_blog?.img?.src || single_blog?.img}
        url={getBlogUrl(single_blog)}
        type="article"
        author={single_blog?.author || "Ciprian Ciceu"}
        publishedDate={getISODate(single_blog?.date)}
        modifiedDate={single_blog?.modified ? getISODate(single_blog.modified) : undefined}
        tags={single_blog?.category}
      />
      <HeaderEight />
      <DynamicBreadcrumb
        items={[
          { label: "Home", href: `/${locale}` },
          { label: "Blog", href: `/${locale}/blog` },
          { label: single_blog?.title || "Article" }
        ]}
      />
      <BlogArticleDetailsArea blog={single_blog} locale={locale} backToBlogText={t('backToBlog')} />
      <FooterSeven />
    </Wrapper>
  );
}

export async function getServerSideProps(context) {
  const { locale, slug } = context.params;

  // Load localized blog articles
  const { getLocalizedBlogArticles, findBlogArticleIdBySlugAcrossLocales } = await import('@data/get-localized-blog-articles');
  const localizedArticles = await getLocalizedBlogArticles(locale);

  // Helper function to create slug from title (must match the one in the component)
  const createSlug = (str) => {
    if (!str || typeof str !== 'string') return '';

    const normalized = str
      .replace(/ă/g, 'a')
      .replace(/â/g, 'a')
      .replace(/î/g, 'i')
      .replace(/ș/g, 's')
      .replace(/ț/g, 't')
      .replace(/Ă/g, 'A')
      .replace(/Â/g, 'A')
      .replace(/Î/g, 'I')
      .replace(/Ș/g, 'S')
      .replace(/Ț/g, 'T');

    return normalized
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
  };

  // Try to find the blog article by slug in current locale
  let single_blog = localizedArticles.find(
    (item) => item.title && createSlug(item.title) === slug
  );

  // If not found, search across all locales and redirect to correct slug
  if (!single_blog) {
    const articleId = await findBlogArticleIdBySlugAcrossLocales(slug, createSlug);
    if (articleId) {
      // Find the article by ID in current locale
      single_blog = localizedArticles.find(a => a.id === articleId);
      if (single_blog && single_blog.title) {
        // Redirect to the correct slug for this locale
        const correctSlug = createSlug(single_blog.title);
        return {
          redirect: {
            destination: `/${locale}/blog/${correctSlug}`,
            permanent: false,
          },
        };
      }
    }
  }

  return {
    props: {
      messages: {
        ...(await import(`../../../messages/${locale}/common.json`)).default,
        ...(await import(`../../../messages/${locale}/blog.json`)).default,
      },
      localizedArticles,
      single_blog: single_blog || null,
    },
  }
}
