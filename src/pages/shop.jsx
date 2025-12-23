import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import ShopBreadcrumb from "@components/common/breadcrumb/shop-breadcrumb";
import ShopArea from "@components/shop/shop-area";
import ShopCta from "@components/cta/shop-cta";


export default function Shop() {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop'} />
      <HeaderEight />
      <ShopBreadcrumb/>
      <ShopArea/>
      <ShopCta/>
      <FooterSeven />
    </Wrapper>
  )
}

