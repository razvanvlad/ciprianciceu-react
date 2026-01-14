import { useRouter } from "next/router";
// internal
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbSix from "@components/common/breadcrumb/breadcrumb-6";
import DynamicBreadcrumb from "@components/common/breadcrumb/dynamic-breadcrumb";
import BlogDetailsArea from "@components/blogs/blog-details/blog-details-area";
import blog_data from "@data/blog-data";

export default function PressDetails() {
  const router = useRouter();
  const { slug, locale } = router.query;

  // Helper function to create slug from title (must match the one in single-grid-item.jsx)
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

  // Find press article by matching slug with title slug
  const single_article = blog_data.find(
    (item) => item.title && createSlug(item.title) === slug
  );

  // If article not found, show 404 or redirect
  if (!single_article && slug) {
    return (
      <Wrapper>
        <SEO pageTitle={"Press Article Not Found"} />
        <HeaderEight />
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1>Press Article Not Found</h1>
          <p>The press article you're looking for doesn't exist.</p>
          <a href={`/${locale}/press`}>Return to Press</a>
        </div>
        <FooterSeven />
      </Wrapper>
    );
  }

  // Helper function to create slug from title
  const getPressUrl = (article) => {
    if (!article?.title) return '/press';
    return `/press/${createSlug(article.title)}`;
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
        pageTitle={single_article?.title || "Press Article"}
        description={single_article?.sm_desc || single_article?.desc || "Read the latest press coverage featuring Ciprian Ciceu"}
        image={single_article?.img?.src || single_article?.img}
        url={getPressUrl(single_article)}
        type="article"
        author={single_article?.author_name || "Ciprian Ciceu"}
        publishedDate={getISODate(single_article?.date)}
        tags={single_article?.tag}
        canonical={`https://ciprianciceu.com${getPressUrl(single_article)}`}
      />
      <HeaderEight />
      <BreadcrumbSix {...single_article} />
      <DynamicBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Press", href: "/press" },
          { label: single_article?.title || "Article" }
        ]}
      />
      <BlogDetailsArea blog={single_article} />
      <FooterSeven />
    </Wrapper>
  );
}

export async function getServerSideProps(context) {
  const { locale } = context.params;

  return {
    props: {
      messages: {
        ...(await import(`../../../messages/${locale}/common.json`)).default,
        ...(await import(`../../../messages/${locale}/press.json`)).default,
      }
    },
  }
}
