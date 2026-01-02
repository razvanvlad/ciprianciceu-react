import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import AboutArea from "@components/abouts/about-page-com/about";


export default function About() {
  return (
    <Wrapper>
      <SEO
        pageTitle={'About Ciprian Ciceu'}
        description="Learn about Ciprian Ciceu's journey as a FinTech entrepreneur, blockchain innovator, and Founder & CEO of Mainet X. From Dubai to Europe, building the future of finance."
        url="/about"
      />
      <HeaderEight />
      <AboutArea />
      <FooterSeven />
    </Wrapper>
  )
}

