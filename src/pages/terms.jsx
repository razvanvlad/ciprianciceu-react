import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import TermsArea from "@components/terms-policy/terms-area";

export default function Terms() {
  return (
    <Wrapper>
      <SEO pageTitle={"Terms"} />
      <HeaderEight />
      <SectionArea
        title="Terms and Conditions"
        subtitle={
          <>
            These Terms govern the use of this Website. By accessing or using this Website, <br />
            you agree to be bound by these Terms and Conditions.
          </>
        }
      />
      <TermsArea/>
      <FooterSeven />
    </Wrapper>
  );
}
