import Link from "next/link";
import React from "react";

const LandingShops = () => {
  return (
    <section id="shop" className="shop__area pt-50 pb-120 fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5">
            <div className="shop__wrapper">
              <div className="shop__section-title">
                <div className="tp-section-title-wrapper mb-30">
                  <span className="tp-section-subtitle">Ecommerce</span>
                  <h3 className="tp-section-title">
                    Ultimate <br />
                    <span className="tp-section-title-underline">
                      Shopping.
                      <svg
                        width="196"
                        height="24"
                        viewBox="0 0 196 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 20.1C45.1562 13.4769 129.172 -14.8215 193 20.1"
                          stroke="#F50963"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h3>
                  <p>
                    Get started with beautifully designed shop templates and
                    widgets.
                  </p>
                </div>
                <div className="shop__btn">
                  <Link
                    href="/shop"
                    className="tp-btn tp-btn-pink"
                  >
                    See products
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="shop__thumb-wrapper text-end">
              <div className="shop__shape">
                <img
                  className="shop__shape-1"
                  src="assets/landing-img/shop/shop-1.png"
                  alt=""
                />
                <img
                  className="shop__shape-2"
                  src="assets/landing-img/shop/shop-2.png"
                  alt=""
                />
                <img
                  className="shop__shape-3"
                  src="assets/landing-img/shop/shop-shape-1.png"
                  alt=""
                />
                <img
                  className="shop__shape-4"
                  src="assets/landing-img/shop/shop-shape-2.png"
                  alt=""
                />
              </div>
              <div className="shop__thumb">
                <img src="assets/landing-img/shop/shop.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingShops;
