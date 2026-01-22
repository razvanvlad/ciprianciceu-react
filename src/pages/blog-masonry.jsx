import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbFive from "@components/common/breadcrumb/breadcrumb-5";
import BlogMasonryArea from "@components/blogs/blog-masonry-area";


export default function BlogMasonry() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Masonry'} />
      <HeaderEight />
      <BreadcrumbFive title='Articles on Growth & Marketing' subtitle='Blog Masonry' />
      <BlogMasonryArea/>
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
