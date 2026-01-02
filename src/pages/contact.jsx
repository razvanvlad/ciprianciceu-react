import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ContactClassicArea from "@components/contacts/contact-classic";

export default function Contact() {
  return (
    <Wrapper>
      <SEO
        pageTitle="Contact & Media Inquiries"
        description="Get in touch with Ciprian Ciceu for media inquiries, business opportunities, speaking engagements, and partnership discussions."
        url="/contact"
      />
      <HeaderEight />
      <ContactClassicArea />
      <FooterSeven />
    </Wrapper>
  );
}
