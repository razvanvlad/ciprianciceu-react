import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import LoginArea from "@components/login-register/login-area";

export default function Login() {
  return (
    <Wrapper>
      <SEO pageTitle={"Login"} />
      <HeaderEight />
      <LoginArea/>
      <FooterSeven />
    </Wrapper>
  );
}
