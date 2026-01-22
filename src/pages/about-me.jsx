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

