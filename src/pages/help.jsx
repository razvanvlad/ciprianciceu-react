import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import HelpCenterArea from "@components/help-area/help-center-area";
import HelpCenterArticles from "@components/articles/help-center-articles";
import CommonFaq from "@components/faqs/common-faq";
import HelpCenterContacts from "@components/contacts/help-center-contacts";


export default function Help() {
  return (
    <Wrapper>
      <SEO pageTitle={'Help Center'} />
      <HeaderEight />
      <HelpCenterArea/>
      <HelpCenterArticles/>
      <CommonFaq/>
      <HelpCenterContacts/>
      <FooterSeven />
    </Wrapper>
  )
}

