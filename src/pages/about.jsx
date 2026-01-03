import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import AboutArea from "@components/abouts/about-page-com/about";


export default function About() {
  return (
    <Wrapper>
      <SEO
        pageTitle={'About Ciprian Ciceu - Technology Entrepreneur & Blockchain Educator'}
        description="Learn about Ciprian Ciceu, a technology entrepreneur and blockchain educator with extensive experience in fintech, digital platforms, and educational initiatives across Europe and the Middle East."
        url="/about"
      />
      <HeaderEight />
      <AboutArea />
      <FooterSeven />
    </Wrapper>
  )
}

