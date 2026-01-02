import { useRouter } from "next/router";
// internal
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbSix from "@components/common/breadcrumb/breadcrumb-6";
import BlogDetailsArea from "@components/blogs/blog-details/blog-details-area";
import blog_data from "@data/blog-data";

export default function BlogDetails() {
  const router = useRouter();
  const { slug } = router.query;

  // Helper function to create slug from title (must match the one in single-grid-item.jsx)
  const createSlug = (str) => {
    if (!str || typeof str !== 'string') return '';
    return str
      .trim()
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
  };

  // Find blog by matching slug with title slug
  const single_blog = blog_data.find(
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

  return (
    <Wrapper>
      <SEO pageTitle={single_blog?.title || "Blog Details"} />
      <HeaderEight />
      <BreadcrumbSix {...single_blog} />
      <BlogDetailsArea blog={single_blog} />
      <FooterSeven />
    </Wrapper>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
