import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import StartUpPricing from "@components/pricings/start-up-pricing";
import PricingTestimonial from "@components/testimonials/pricing-testimonial";
import CommonFaq from "@components/faqs/common-faq";
import AboutCta from "@components/cta/about-cta";



export default function Pricing() {
  return (
    <Wrapper>
      <SEO pageTitle={"Pricing"} />
      <HeaderEight />
      <StartUpPricing style_2={true} />
      <PricingTestimonial />
      <CommonFaq padd={"120"} />
      <AboutCta />
      <FooterSeven />
    </Wrapper>
  );
}
