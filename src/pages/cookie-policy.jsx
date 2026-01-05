import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import CookiePolicyArea from "@components/terms-policy/cookie-policy-area";

export default function CookiePolicy() {
  return (
    <Wrapper>
      <SEO pageTitle={"Cookie Policy"} />
      <HeaderEight />
      <SectionArea
        title="Cookie Policy"
        subtitle={
          <>
            This Cookie Policy explains how we use cookies and similar technologies <br />
            to recognize visitors and improve user experience on our Website.
          </>
        }
      />
      <CookiePolicyArea />
      <FooterSeven />
    </Wrapper>
  );
}
