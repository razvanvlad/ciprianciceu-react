import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridAreaTwo from "@components/blogs/blog-grid-area-2";
import blog_data from "@data/blog-data";


// blog items
const blog_items = blog_data.filter((blog) => blog.blog_grid).slice(1, 7);

export default function BlogGridTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Grid Two'} />
      <HeaderEight />
      <SliderBreadcrumb />
      <BlogGridAreaTwo blog_items={blog_items} />
      <FooterSeven />
    </Wrapper>
  )
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
