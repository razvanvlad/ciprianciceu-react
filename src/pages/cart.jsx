import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import CartBreadcrumb from "@components/common/breadcrumb/cart-breadcrumb";
import CartArea from "@components/cart-wishlist/cart-area";

export default function Cart() {
  return (
    <Wrapper>
      <SEO pageTitle={"Cart"} />
      <HeaderEight />
      <CartBreadcrumb title='My Cart' subtitle='Cart' />
      <CartArea/>
      <FooterSeven />
    </Wrapper>
  );
}
