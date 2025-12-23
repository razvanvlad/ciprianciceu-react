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
            Your privacy is important to us. It is Harry’s policy to respect
            your privacy regarding <br /> any information we may collect from
            you across our website, https:// Harry.com, <br /> and other sites
            we own and operate.
          </>
        }
      />
      <PolicyArea/>
      <FooterSeven />
    </Wrapper>
  );
}
