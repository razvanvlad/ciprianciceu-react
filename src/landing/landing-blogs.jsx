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
    el: ".blog-pagination",
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
    nextEl: ".blog-button-next",
    prevEl: ".blog-button-prev",
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

const LandingBlogs = () => {
  return (
    <>
      <section
        id="blog"
        className="blog__area blog__bg pt-110 pl-15 pr-15 pb-120 fix"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="blog__section-title">
                <div className="tp-section-title-wrapper text-center mb-30">
                  <h3 className="tp-section-title">
                    Share your
                    <br /> stories and
                    <span className="tp-section-title-underline">
                      news.
                      <svg
                        width="126"
                        height="18"
                        viewBox="0 0 126 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 14.728C29.625 10.5468 82.6875 -7.31826 123 14.728"
                          stroke="#F50963"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h3>
                  <p>
                    Choose a layout from the stylish collection of blog designs
                    included with Harry and start blogging right away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12">
              <div className="blog__slider p-relative">
                <Swiper
                  {...slider_settings}
                  modules={[Navigation, Pagination]}
                  className="blog__slider-active swiper-container"
                >
                  <SwiperSlide className="blog__item">
                    <Link href="/blog">
                      <img src="assets/landing-img/blog/blog-7.jpg" alt="" />
                    </Link>
                  </SwiperSlide>

                  <SwiperSlide className="blog__item">
                    <Link href="blog-grid-2">
                      <img src="assets/landing-img/blog/blog-1.jpg" alt="" />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="blog__item">
                    <Link
                      href="/blog-list-sidebar"
                    >
                      <img src="/assets/landing-img/blog/blog-2.jpg" alt="" />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="blog__item">
                    <Link href="/blog-details">
                      <img src="assets/landing-img/blog/blog-3.jpg" alt="" />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="blog__item">
                    <Link href="/blog-grid">
                      <img src="assets/landing-img/blog/blog-4.jpg" alt="" />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="blog__item">
                    <Link href="/blog-grid-sidebar">
                      <img src="assets/landing-img/blog/blog-5.jpg" alt="" />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="blog__item">
                    <Link href="/blog-masonry">
                      <img src="assets/landing-img/blog/blog-6.jpg" alt="" />
                    </Link>
                  </SwiperSlide>
                </Swiper>
                <div className="blog-pagination tp-swiper-fraction"></div>
                <div className="blog__nav d-flex align-items-center ">
                  <button className="blog__nav-btn blog-button-prev">
                    <i className="fa-regular fa-arrow-left"></i>
                  </button>
                  <button className="blog__nav-btn blog-button-next">
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

export default dynamic(() => Promise.resolve(LandingBlogs), {
   ssr: false,
 });
