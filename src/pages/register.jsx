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
