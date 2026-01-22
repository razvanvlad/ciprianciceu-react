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

// Load translations for this page
export async function getStaticProps() {
  return {
    props: {
      messages: {
        ...(await import(`../messages/en/common.json`)).default,
        ...(await import(`../messages/en/home.json`)).default,
      }
    }
  };
}
