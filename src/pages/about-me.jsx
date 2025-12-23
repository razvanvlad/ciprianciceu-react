import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import AboutMeArea from "@components/abouts/about-page-com/about-me";


export default function AboutMe() {
  return (
    <Wrapper>
      <SEO pageTitle={'About Me'} />
      <HeaderEight />
      <AboutMeArea />
      <FooterSeven />
    </Wrapper>
  )
}

