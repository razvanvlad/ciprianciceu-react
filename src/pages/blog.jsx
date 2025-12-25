import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridArea from "@components/blogs/blog-grid-area";


export default function Blogs() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog - Ciprian Ciceu'} />
      <HeaderEight />
      <SliderBreadcrumb />
      <BlogGridArea url="blog" />
      <FooterSeven />
    </Wrapper>
  )
}

