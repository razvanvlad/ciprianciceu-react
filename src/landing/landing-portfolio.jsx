import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import dynamic from "next/dynamic";

const slider_settings = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".portfolio-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        ' <span class="tp-swiper-fraction-divide"></span> ' +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".portfolio-button-next",
    prevEl: ".portfolio-button-prev",
  },
  breakpoints: {
    1601: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const LandingPortfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="portfolio__area portfolio__bg pt-110 pl-15 pr-15 pb-120 fix"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="portfolio__section-title">
                <div className="tp-section-title-wrapper text-center mb-30">
                  <h3 className="tp-section-title">
                    Awesome <br />
                    <span className="tp-section-title-underline">
                      portfolio
                      <svg
                        width="196"
                        height="24"
                        viewBox="0 0 196 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 20.1C45.1562 13.4769 129.172 -14.8215 193 20.1"
                          stroke="#5C24FC"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    {" "}layouts
                  </h3>
                  <p>
                    Select from any of our carefuly crafted website templates to
                    best fit your personal style and professional needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12">
              <div className="portfolio__slider p-relative">
                <Swiper
                  {...slider_settings}
                  modules={[Navigation, Pagination]}
                  className="portfolio__slider-active swiper-container"
                >
                  <SwiperSlide className="portfolio__item">
                    <Link href="/portfolio-masonry">
                      <img
                        src="assets/landing-img/portfolio/portfolio-1.jpg"
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="portfolio__item">
                    <Link href="/portfolio-details-list">
                      <img
                        src="assets/landing-img/portfolio/portfolio-2.jpg"
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="portfolio__item">
                    <Link href="/portfolio-details">
                      <img
                        src="assets/landing-img/portfolio/portfolio-3.jpg"
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="portfolio__item">
                    <Link href="/portfolio">
                      <img
                        src="assets/landing-img/portfolio/portfolio-4.jpg"
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="portfolio__item">
                    <Link href="/portfolio-gallery">
                      <img
                        src="assets/landing-img/portfolio/portfolio-5.jpg"
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="portfolio__item">
                    <Link href="/portfolio-metro">
                      <img
                        src="assets/landing-img/portfolio/portfolio-6.jpg"
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="portfolio__item">
                    <Link href="/portfolio-slider">
                      <img
                        src="assets/landing-img/portfolio/portfolio-7.jpg"
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="portfolio__item">
                    <a
                      href="portfolio-details-slider"
                    >
                      <img
                        src="assets/landing-img/portfolio/portfolio-8.jpg"
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="portfolio__item">
                    <a
                      href="portfolio-details-video"
                    >
                      <img
                        src="assets/landing-img/portfolio/portfolio-9.jpg"
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="portfolio__item">
                    <Link href="/portfolio-2">
                      <img
                        src="assets/landing-img/portfolio/portfolio-10.jpg"
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                </Swiper>
                <div className="portfolio-pagination tp-swiper-fraction"></div>
                <div className="portfolio__nav d-flex align-items-center ">
                  <button className="portfolio__nav-btn portfolio-button-prev">
                    <i className="fa-regular fa-arrow-left"></i>
                  </button>
                  <button className="portfolio__nav-btn portfolio-button-next">
                    <i className="fa-regular fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(LandingPortfolio), {
  ssr: false,
});
