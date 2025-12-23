import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ForgotArea from "@components/login-register/forgot-area";

export default function Forgot() {
  return (
    <Wrapper>
      <SEO pageTitle={"Forgot"} />
      <HeaderEight />
      <ForgotArea />
      <FooterSeven />
    </Wrapper>
  );
}
