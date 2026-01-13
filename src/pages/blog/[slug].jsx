import { useRouter } from "next/router";
// internal
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import DynamicBreadcrumb from "@components/common/breadcrumb/dynamic-breadcrumb";
import BlogArticleDetailsArea from "@components/blogs/blog-details/blog-article-details-area";
import blog_articles_data from "@data/blog-articles-data";

export default function BlogDetails() {
  const router = useRouter();
  const { slug } = router.query;

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

  // Find blog article by matching slug with title slug
  const single_blog = blog_articles_data.find(
    (item) => item.title && createSlug(item.title) === slug
  );

  // If blog not found, show 404 or redirect
  if (!single_blog && slug) {
    return (
      <Wrapper>
        <SEO pageTitle={"Blog Not Found"} />
        <HeaderEight />
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <a href="/blog">Return to Blog</a>
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
        pageTitle={single_blog?.title || "Blog Details"}
        description={single_blog?.sm_desc || single_blog?.desc || "Read the latest insights and updates from Ciprian Ciceu"}
        image={single_blog?.img?.src || single_blog?.img}
        url={getBlogUrl(single_blog)}
        type="article"
        author={single_blog?.author_name || "Ciprian Ciceu"}
        publishedDate={getISODate(single_blog?.date)}
        tags={single_blog?.tag}
        canonical={`https://ciprianciceu.com${getBlogUrl(single_blog)}`}
      />
      <HeaderEight />
      <DynamicBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: single_blog?.title || "Article" }
        ]}
      />
      <BlogArticleDetailsArea blog={single_blog} />
      <FooterSeven />
    </Wrapper>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
