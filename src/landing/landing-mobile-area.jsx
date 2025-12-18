import Link from "next/link";
import React from "react";

const LandingMobileArea = () => {
  return (
    <section className="theme__features-wrapper pb-100">
      <div className="container">
        <div className="row tp-gx-20">
          <div className="col-xl-8 col-lg-8">
            <div className="mobile__features-wrapper p-relative fix mb-20">
              <div className="mobile__features-content">
                <h3 className="mobile__features-title">
                  Look amazing
                  <span>
                    mobile
                    <svg
                      width="106"
                      height="15"
                      viewBox="0 0 106 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 11.8889C25.1875 8.44609 69.4062 -6.26395 103 11.8889"
                        stroke="#FFD43E"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  <br />
                  optimized
                </h3>
                <p>
                  Harry provides a ready made mobile <br /> design with
                  impressive UI and the <br /> seamless.!{" "}
                </p>

                <div className="mobile__features-btn">
                  <Link
                    href="/home"
                    className="tp-btn tp-btn-black"
                  >
                    View it on Mobile
                  </Link>
                </div>
              </div>
              <div className="mobile__features-thumb">
                <img src="assets/landing-img/mobile/mobile-img.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="performance__wrapper mb-20">
              <h3 className="performance__title">
                Experience top notch Performance.
              </h3>
              <div className="performance__number-wrapper mb-10 d-flex justify-content-center align-items-center">
                <div className="performance__grade text-end">
                  <h5>A+</h5>
                  <p>Pingdom Score</p>
                </div>
                <div className="performance__number text-end">
                  <h4>98</h4>
                </div>
              </div>
              <div className="performance__bar">
                <div className="performance__bar-text d-flex justify-content-between align-items-center">
                  <h4>GTmetrix Score</h4>
                  <h4>2x Faster</h4>
                </div>
              </div>
              <div className="performance__compare">
                <div className="performance__compare-item d-flex justify-content-between align-items-center">
                  <div className="performance__compare-item-bar"></div>
                  <h5>Harry </h5>
                </div>
                <div className="performance__compare-item d-flex justify-content-between align-items-center">
                  <div className="performance__compare-item-bar-2"></div>
                  <h5>Others Theme</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 order-md-2">
            <div className="figma__typo-wrapper mb-20 d-md-flex align-items-start justify-content-between d-lg-block">
              <div className="figma__wrapper mb-20">
                <h3 className="figma__title">Theme’s figma design source files</h3>
                <div className="figma__icon">
                  <img src="assets/landing-img/figma/figma-logo.png" alt="" />
                </div>
                <div className="figma__thumb">
                  <img src="assets/landing-img/figma/figma-image.png" alt="" />
                </div>
              </div>
              <div className="typo__wrapper d-none">
                <h3 className="typo__title">
                  Color & <br /> Custom typography{" "}
                </h3>

                <div className="typo__thumb">
                  <img src="assets/landing-img/color/color-typo-1.png" alt="" />
                </div>
              </div>
              <div className="update__wrapper">
                <div
                  className="update__bg include-bg"
                  style={{backgroundImage:`url(assets/landing-img/update/update-bg.jpg)`}}
                ></div>
                <h3 className="update__title">
                  Reliable and <br /> regular updates.
                </h3>

                <div className="update__thumb text-center">
                  <img src="assets/landing-img/update/update-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 order-last order-lg-3">
            <div className="concept__wrapper mb-20">
              <h3 className="concept__title">
                True
                <span>
                  Multi
                  <svg
                    width="96"
                    height="14"
                    viewBox="0 0 96 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 11C22.9688 7.90148 62.7656 -5.33756 93 11"
                      stroke="#FFD43E"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                - Concept.
              </h3>
              <p>
                The ultimate collection crafted by world-class designers. Import
                a block <br /> to re-use on other pages.
              </p>

              <div className="concept__thumb">
                <img
                  src="assets/landing-img/concept/concept-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 order-last order-lg-4">
            <div className="popup__wrapper p-relative fix mb-20">
              <div className="popup__content">
                <h3 className="popup__title">
                  Promo
                  <span>
                    Popup
                    <svg
                      width="106"
                      height="15"
                      viewBox="0 0 106 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 11.8889C25.1875 8.44609 69.4062 -6.26395 103 11.8889"
                        stroke="#FFD43E"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h3>
                <p>
                  Let visitors know your deals & speed <br /> up the buying
                  process
                </p>

                <div className="popup__btn">
                  <Link
                    href="/home"
                    className="tp-btn tp-btn-black"
                  >
                    View it on Mobile
                  </Link>
                </div>
              </div>
              <div className="popup__thumb">
                <img
                  src="assets/landing-img/popup/popup-image.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 order-lg-last">
            <div className="typo__wrapper typo__wrapper-2 d-none">
              <h3 className="typo__title">
                Color & <br /> Custom typography{" "}
              </h3>

              <div className="typo__thumb">
                <img src="assets/landing-img/color/color-typo-1.png" alt="" />
              </div>
            </div>
            <div className="support__wrapper">
              <h3 className="support__title">
                Premium <br /> help and support
              </h3>

              <div className="support__thumb text-center">
                <img src="assets/landing-img/support/support-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMobileArea;
