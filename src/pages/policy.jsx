import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import PolicyArea from "@components/terms-policy/policy-area";

export default function Policy() {
  return (
    <Wrapper>
      <SEO pageTitle={"Policy"} />
      <HeaderEight />
      <SectionArea
        title="Privacy Policy"
        subtitle={
          <>
            Your privacy is important to us. This Privacy Policy explains how personal data <br />
            is collected, used, and protected when you visit our Website.
          </>
        }
      />
      <PolicyArea/>
      <FooterSeven />
    </Wrapper>
  );
}
