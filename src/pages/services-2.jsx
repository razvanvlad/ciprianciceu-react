import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbEight from "@components/common/breadcrumb/breadcrumb-8";
import ServicesTwoArea from "@components/services/services-2-area";


export default function ServicesTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Two'} />
      <HeaderEight />
      <BreadcrumbEight title={<>Tech Solutions <br /> for Business</>} />
      <ServicesTwoArea />
      <FooterSeven />
    </Wrapper>
  )
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
