import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogListArea from "@components/blogs/blog-list-area";


export default function BlogListSidebar() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog List Sidebar'} />
      <HeaderEight />
      <SliderBreadcrumb />
      <BlogListArea/>
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
