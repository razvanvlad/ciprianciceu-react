import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ServiceThreeVideoArea from "@components/video-area/service-3-video-area";
import ServiceThreeFeature from "@components/features/service-3-feature";
import ServiceThreeAbout from "@components/abouts/service-3-about";
import ServiceThreeServices from "@components/services/service-3-services";
import ServiceThreeTestimonial from "@components/testimonials/service-3-testimonial";
import AgencyBrands from "@components/brands/agency-brands";
import CommonFaq from "@components/faqs/common-faq";
import ServiceThreeCta from "@components/cta/service-3-cta";


export default function ServicesThree() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Three'} />
      <HeaderEight />
      <ServiceThreeVideoArea />
      <ServiceThreeFeature />
      <ServiceThreeAbout />
      <ServiceThreeServices />
      <ServiceThreeTestimonial />
      <AgencyBrands spacing={true} />
      <CommonFaq />
      <ServiceThreeCta />
      <FooterSeven />
    </Wrapper>
  )
}

