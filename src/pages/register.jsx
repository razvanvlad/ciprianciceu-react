import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import RegisterArea from "@components/login-register/register-area";

export default function Register() {
  return (
    <Wrapper>
      <SEO pageTitle={"Register"} />
      <HeaderEight />
      <RegisterArea/>
      <FooterSeven />
    </Wrapper>
  );
}
