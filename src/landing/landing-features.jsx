import React from "react";

const LandingFeatures = () => {
  return (
    <section className="features__area pt-105 pb-125">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10">
            <div className="features__section-title">
              <div className="features__section-title-shape">
                <img src="assets/landing-img/shape/shape-1.png" alt="" />
              </div>
              <div className="tp-section-title-wrapper text-center mb-60">
                <h3 className="tp-section-title">
                  Some Cases We Are{" "}
                  <span className="tp-section-title-underline">
                    Proud Of
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
                  Check out these cases to see how we work and what we achieve.
                  A picture <br /> speaks a thousand words!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid tp-container-fluid">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="features__item tp-shop-features mb-20">
              <div className="features__content">
                <h3 className="features__title">Next-Generation Shop</h3>
                <p>
                  Open a beautiful store, increase your conversion rates and
                  boost your sales in minutes with object-oriented UX.
                </p>
              </div>
              <div className="features__thumb d-flex justify-content-center align-items-center">
                <img src="assets/landing-img/features/features-img-4.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6">
            <div className="features__item tp-support-features mb-20">
              <div className="features__content">
                <h3 className="features__title">Future of Customer Support</h3>
                <p>
                  Our support team will get assistance from AI-powered
                  suggestions, making it quicker than ever to handle support
                  requests.
                </p>
              </div>
              <div className="features__thumb d-flex justify-content-center align-items-center">
                <img src="assets/landing-img/features/features-img-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
