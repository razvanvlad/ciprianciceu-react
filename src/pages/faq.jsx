import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import FaqBreadcrumb from "@components/common/breadcrumb/faq-breadcrumb";
import FaqArea from "@components/faqs/faq-area";


export default function Faq() {
  return (
    <Wrapper>
      <SEO pageTitle={'Faq'} />
      <HeaderEight />
      <FaqBreadcrumb/>
      <FaqArea/>
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
