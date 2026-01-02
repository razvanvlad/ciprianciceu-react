import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridArea from "@components/blogs/blog-grid-area";


export default function Blogs() {
  return (
    <Wrapper>
      <SEO
        pageTitle="Media & Press Articles"
        description="International media coverage featuring Ciprian Ciceu's work in fintech, blockchain innovation, AI-driven trading platforms, and entrepreneurial insights."
        url="/blog"
        type="website"
        tags={['Media', 'Press', 'FinTech', 'Blockchain', 'Business', 'Trading', 'Education', 'Technology', 'Entrepreneurship']}
      />
      <HeaderEight />
      <SliderBreadcrumb />
      <BlogGridArea url="blog" />
      <FooterSeven />
    </Wrapper>
  )
}

