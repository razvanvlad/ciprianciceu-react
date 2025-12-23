import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import CartBreadcrumb from "@components/common/breadcrumb/cart-breadcrumb";
import CouponArea from "@components/checkout/coupon-area";
import CheckoutArea from "@components/checkout/checkout-area";


export default function Checkout() {
  return (
    <Wrapper>
      <SEO pageTitle={"Checkout"} />
      <HeaderEight />
      <CartBreadcrumb title='Checkout' subtitle='Checkout' />
      <CouponArea/>
      <CheckoutArea/>
      <FooterSeven />
    </Wrapper>
  );
}
