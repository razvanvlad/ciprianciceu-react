import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import AboutArea from "@components/abouts/about-page-com/about";


export default function About() {
  return (
    <Wrapper>
      <SEO pageTitle={'About - Ciprian Ciceu'} />
      <HeaderEight />
      <AboutArea />
      <FooterSeven />
    </Wrapper>
  )
}

