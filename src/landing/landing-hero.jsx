import React from "react";

const LandingHero = () => {
  return (
    <>
      <section className="hero__area hero__height-4 p-relative fix grey-bg-2">
        <div className="hero__inner-2 hero__height-3 p-relative z-index-1 d-flex justify-content-center scene-2">
          <div className="hero__shape d-none d-sm-block">
            <div className="hero__shape-div item-1 d-none d-xl-block">
              <img
                className="hero__shape-7 layer"
                data-depth=".2"
                src="assets/landing-img/hero/shape/hero-shape-7.png"
                alt=""
              />
            </div>
            <div className="hero__shape-div item-2">
              <img
                className="hero__shape-8 layer"
                data-depth=".4"
                src="assets/landing-img/hero/shape/hero-shape-8.png"
                alt=""
              />
            </div>
            <div className="hero__shape-div item-3">
              <img
                className="hero__shape-9"
                src="assets/landing-img/hero/shape/hero-shape-9.png"
                alt=""
              />
            </div>
            <div className="hero__shape-div item-4">
              <img
                className="hero__shape-10 d-none d-lg-block layer"
                data-depth=".8"
                src="assets/landing-img/hero/icon/next-js.png"
                alt=""
              />
            </div>
            <div className="hero__shape-div item-5">
              <img
                className="hero__shape-11 layer"
                data-depth="1"
                src="assets/landing-img/hero/icon/woo.png"
                alt=""
              />
            </div>
            <div className="hero__shape-div item-6">
              <img
                className="hero__shape-12 d-none d-lg-block layer"
                data-depth="2"
                src="assets/landing-img/hero/img/hero-responsive.png"
                alt=""
              />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-10">
                <div className="hero__content-2 mt-180 text-center">
                  <h3 className="hero__title-2">
                    The Creative {" "}
                    <img
                      className="hero__title-shape"
                      src="assets/landing-img/hero/hero-title-shape.png"
                      alt=""
                    />
                    <span className="hero__title-2-underline">
                     React
                      <svg
                        width="281"
                        height="30"
                        viewBox="0 0 281 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 27C63.8571 17.7044 185.143 -22.0127 277.286 27"
                          stroke="currentColor"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <br />
                    Template for Professionals.
                  </h3>

                  <p>
                    All-Inclusive Demos. You can use different elements from ALL
                    demos.
                  </p>

                  <div className="hero__features">
                    <ul>
                      <li>
                        <span>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1L3.5 6.33333L1 3.90909"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Big Template
                      </li>
                      <li>
                        <span>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1L3.5 6.33333L1 3.90909"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Moblie fast design
                      </li>
                      <li>
                        <span>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1L3.5 6.33333L1 3.90909"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Fully customizable
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__display scene">
          <div className="hero__display-item item-1 d-none d-lg-block">
            <img
              className="layer"
              data-depth="0.2"
              src="assets/landing-img/hero/img/hero-img-1.png"
              alt=""
            />
          </div>
          <div className="hero__display-item item-2 d-none d-lg-block">
            <img
              className="layer"
              data-depth="0.4"
              src="assets/landing-img/hero/img/hero-img-2.png"
              alt=""
            />
          </div>
          <div className="hero__display-item item-3">
            <img
              className="layer"
              data-depth="0.6"
              src="assets/landing-img/hero/img/hero-img-3.png"
              alt=""
            />
          </div>
          <div className="hero__display-item item-4 d-none d-lg-block">
            <img
              className="layer"
              data-depth="0.8"
              src="assets/landing-img/hero/img/hero-img-4.png"
              alt=""
            />
          </div>
          <div className="hero__display-item item-5 d-none d-lg-block">
            <img
              className="layer"
              data-depth="0.11"
              src="assets/landing-img/hero/img/hero-img-5.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingHero;
