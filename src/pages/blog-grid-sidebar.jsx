import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridAreaTwo from "@components/blogs/blog-grid-area-2";
import blog_data from "@data/blog-data";

// blog items
const blog_items = blog_data
  .filter((blog) => blog.blog_grid)
  .filter((blog) => !blog.blog_quote)
  .slice(0, 6);

export default function BlogGridSidebar() {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Grid"} />
      <HeaderEight />
      <SliderBreadcrumb />
      <BlogGridAreaTwo blog_items={blog_items} grid_sidebar={true} />
      <FooterSeven />
    </Wrapper>
  );
}

// Load translations for this page
export async function getStaticProps() {
  return {
    props: {
      messages: {
        ...(await import(`../messages/en/common.json`)).default,
        ...(await import(`../messages/en/home.json`)).default,
      }
    }
  };
}
