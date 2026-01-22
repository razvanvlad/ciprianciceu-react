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
