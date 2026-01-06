import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import BlogArticlesArea from "@components/blogs/blog-articles-area";


export default function Blog() {
  return (
    <Wrapper>
      <SEO
        pageTitle="Blog - Insights & Articles"
        description="Explore insights, analysis, and perspectives on technology, trading, blockchain, and innovation from Ciprian Ciceu and the MainetX team."
        url="/blog"
        type="website"
        tags={['Blog', 'Technology', 'Trading', 'AI', 'Blockchain', 'FinTech', 'Innovation', 'Cryptocurrency']}
      />
      <HeaderEight />
      <SectionArea
        title="Blog"
        subtitle={
          <>
            Insights, analysis, and perspectives on technology, trading, <br />
            blockchain, and innovation.
          </>
        }
      />
      <BlogArticlesArea />
      <FooterSeven />
    </Wrapper>
  )
}

