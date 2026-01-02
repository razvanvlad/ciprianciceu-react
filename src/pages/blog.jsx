import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SliderBreadcrumb from "@components/common/breadcrumb/slider-breadcrumb";
import BlogGridArea from "@components/blogs/blog-grid-area";


export default function Blogs() {
  return (
    <Wrapper>
      <SEO
        pageTitle="Blog"
        description="Explore insights on blockchain, entrepreneurship, trading, and technology. Stay updated with Ciprian Ciceu's latest articles on business innovation, education, and digital transformation."
        url="/blog"
        type="website"
        tags={['Blog', 'Blockchain', 'Business', 'Trading', 'Education', 'Technology', 'Entrepreneurship']}
      />
      <HeaderEight />
      <SliderBreadcrumb />
      <BlogGridArea url="blog" />
      <FooterSeven />
    </Wrapper>
  )
}

