import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import PortfolioDetailsArea from "@components/portfolio-details/classic-details";


export default function PortfolioDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Details"} />
      <HeaderEight />
      <PortfolioDetailsArea />
      <FooterSeven />
    </Wrapper>
  );
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
