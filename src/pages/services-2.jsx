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

