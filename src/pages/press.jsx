import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridArea from "@components/blogs/blog-grid-area";


export default function Press() {
  return (
    <Wrapper>
      <SEO
        pageTitle="Press & Media Coverage"
        description="International media coverage featuring Ciprian Ciceu's work in fintech, blockchain innovation, AI-driven trading platforms, and entrepreneurial insights."
        url="/press"
        type="website"
        tags={['Media', 'Press', 'FinTech', 'Blockchain', 'Business', 'Trading', 'Education', 'Technology', 'Entrepreneurship']}
      />
      <HeaderEight />
      <SliderBreadcrumb />
      <BlogGridArea url="press" />
      <FooterSeven />
    </Wrapper>
  )
}
