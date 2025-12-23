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

