import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ContactClassicArea from "@components/contacts/contact-classic";

export default function Contact() {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact - Ciprian Ciceu"} />
      <HeaderEight />
      <ContactClassicArea />
      <FooterSeven />
    </Wrapper>
  );
}
