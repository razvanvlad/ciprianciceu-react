import Link from "next/link";
import React from "react";

const LandingDemos = () => {
  return (
    <>
      <section id="demo" className="demo__area grey-bg pt-275 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="demo__section-title p-relative z-index-1">
                <h4 className="demo__section-number">12+</h4>
                <div className="tp-section-title-wrapper text-center mb-30">
                  <h3 className="tp-section-title">
                    <span className="tp-section-title-underline">
                      Beautiful,
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
                    hand-crafted designs to get you started.
                  </h3>
                  <p>
                    A portfolio website needs an eye-catching design to showcase
                    your work and services. It ships with hundreds of layouts
                    and pre-designed page templates for creative portfolio,
                    business, and photography websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="demo__features d-flex flex-wrap justify-content-center align-items-center mb-30">
                <p>Retina Ready</p>
                <p>Top Notch Support</p>
                <p>Fully customizable</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid tp-container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-1.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Modern Business</h3>
                    <div className="demo__tag">
                      <span>Business,</span>
                      <span>Consulting,</span>
                      <span>Advertising</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-lawyer">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-2.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Lawyer </h3>
                    <div className="demo__tag">
                      <span>Advocate,</span>
                      <span>Attorney,</span>
                      <span>Barrister</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-portfolio">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-5.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Personal Portfolio</h3>
                    <div className="demo__tag">
                      <span>Portfolio,</span>
                      <span>Creative,</span>
                      <span>Personal</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-agency">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-6.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Digital Agency</h3>
                    <div className="demo__tag">
                      <span>Business,</span>
                      <span>Agency,</span>
                      <span>Technology</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-startup">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-8.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Startup</h3>
                    <div className="demo__tag">
                      <span>Finance,</span>
                      <span>Marketing,</span>
                      <span>Sass</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-freelancer">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-4.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Freelancer</h3>
                    <div className="demo__tag">
                      <span>Resume,</span>
                      <span>Portfolio,</span>
                      <span>Service </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-photographer">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-3.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Photography</h3>
                    <div className="demo__tag">
                      <span>Studio,</span>
                      <span>Photographer,</span>
                      <span>Portfolio</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-creative">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-7.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Creative Agency</h3>
                    <div className="demo__tag">
                      <span>Business,</span>
                      <span>Agency</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-architecture">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-9.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Architecture</h3>
                    <div className="demo__tag">
                      <span>Exterior,</span>
                      <span>Interior</span>
                      <span>Building</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item demo-politician mb-50">
                <Link href="/home-politician">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-10.png" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Politician</h3>
                    <div className="demo__tag">
                      <span>Campaign,</span>
                      <span>Democrat,</span>
                      <span>Municipal</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-vertical">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-11.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Vertical Slider</h3>
                    <div className="demo__tag">
                      <span>Minimal,</span>
                      <span>Ecommerce</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-swiper">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-12.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Swiper Slider</h3>
                    <div className="demo__tag">
                      <span>Creative,</span>
                      <span>Unique,</span>
                      <span>Vertical</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="demo__item mb-50">
                <Link href="/home-shop">
                  <div className="demo__item-top">
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                    <span className="demo__item-bullet"></span>
                  </div>
                  <div className="demo__thumb">
                    <img src="assets/landing-img/demo/demo-13.jpg" alt="" />
                  </div>
                  <div className="demo__content text-center">
                    <h3 className="demo__title">Minimal Shop</h3>
                    <div className="demo__tag">
                      <span>Ecommerce,</span>
                      <span>Modern,</span>
                      <span>Cool features</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingDemos;
