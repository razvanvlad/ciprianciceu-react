import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ContactClassicArea from "@components/contacts/contact-classic";

export default function ContactTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact Two"} />
      <HeaderEight />
      <ContactClassicArea />
      <FooterSeven />
    </Wrapper>
  );
}
