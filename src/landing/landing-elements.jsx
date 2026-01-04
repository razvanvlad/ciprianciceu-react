import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

// slider top
const slider_top = {
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnFocus: false,
  pauseOnHover: true,
};

// slider middle
const slider_middle = {
  speed: 4000,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  arrows: false,
  buttons: false,
};

// slider bottom
const slider_bottom = {
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnFocus: false,
  pauseOnHover: true,
};

const LandingElements = () => {
  const sliderRef = useRef();
  let autoplayOn = true;
  let autoplaySpeed = 0;
  useEffect(() => {
    setInterval(function () {
      if (!autoplayOn) return;
      sliderRef?.current?.slickPrev();
    }, autoplaySpeed);
  }, [autoplayOn, autoplaySpeed]);
  return (
    <>
      <section
        id="elements"
        className="elements__area elements__bg pt-120 pb-90"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div className="elements__wrapper">
                <div className="elements__number p-relative">
                  <img
                    className="elements__number-title-shape"
                    src="assets/landing-img/shape/elements-count-shape-2.png"
                    alt=""
                  />
                  <img
                    className="elements__number-thumb"
                    src="assets/landing-img/shape/elements-count-number.png"
                    alt=""
                  />
                  <h3
                    className="elements__number-title has-background"
                    data-background="assets/landing-img/shape/elements-count-bg.jpg"
                  >
                    50+
                    <img
                      className="elements__number-title-shape"
                      src="assets/landing-img/shape/elements-count-shape-2.png"
                      alt=""
                    />
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
              <div className="elements__shape">
                <img
                  src="assets/landing-img/shape/elements-count-shape.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-7">
              <div className="elements__section-title pl-70">
                <div className="tp-section-title-wrapper mb-30">
                  <h3 className="tp-section-title">
                    Glowing <br />
                    <span className="tp-section-title-underline">
                      Elements.
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
                  </h3>
                  <p>
                    Pre-designed elements with specifically useful function
                    facilitate the success of your online store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid gx-0">
          <div className="row gx-0">
            <div className="col-xl-12">
              <div className="elements__slider-wrapper fix">
                <div className="elements__slider-top">
                  <Slider
                    {...slider_top}
                    className="elements__slider-top-active"
                  >
                    {/* <!-- element item --> */}
                    <Link href="/elements-blog-post">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.9996 6.643V3.007C18.9996 1.576 18.4236 1 16.9926 1H13.3566C11.9256 1 11.3496 1.576 11.3496 3.007V6.643C11.3496 8.074 11.9256 8.65 13.3566 8.65H16.9926C18.4236 8.65 18.9996 8.074 18.9996 6.643Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.65 6.868V2.782C8.65 1.513 8.074 1 6.643 1H3.007C1.576 1 1 1.513 1 2.782V6.859C1 8.137 1.576 8.641 3.007 8.641H6.643C8.074 8.65 8.65 8.137 8.65 6.868Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.65 16.9926V13.3566C8.65 11.9256 8.074 11.3496 6.643 11.3496H3.007C1.576 11.3496 1 11.9256 1 13.3566V16.9926C1 18.4236 1.576 18.9996 3.007 18.9996H6.643C8.074 18.9996 8.65 18.4236 8.65 16.9926Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M12.6992 13.1504H18.0992"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                opacity="0.4"
                                d="M12.6992 16.75H18.0992"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Blog Posts</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-instagram">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M16.2996 6.4C17.7908 6.4 18.9996 5.19117 18.9996 3.7C18.9996 2.20883 17.7908 1 16.2996 1C14.8084 1 13.5996 2.20883 13.5996 3.7C13.5996 5.19117 14.8084 6.4 16.2996 6.4Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8 1H7.3C2.8 1 1 2.8 1 7.3V12.7C1 17.2 2.8 19 7.3 19H12.7C17.2 19 19 17.2 19 12.7V8.2"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M5.32961 12.6369C5.01461 11.6469 5.38361 10.4139 6.42761 10.0809C6.97661 9.9009 7.65161 10.0539 8.03861 10.5849C8.39861 10.0359 9.10061 9.9099 9.64061 10.0809C10.6846 10.4139 11.0536 11.6469 10.7386 12.6369C10.2436 14.2119 8.51561 15.0309 8.03861 15.0309C7.55261 15.0219 5.84261 14.2209 5.32961 12.6369Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Instagram Feed</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-button">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.11 11.3447H2.89C1.54 11.3447 1 11.9207 1 13.3517V16.9877C1 18.4187 1.54 18.9947 2.89 18.9947H17.11C18.46 18.9947 19 18.4187 19 16.9877V13.3517C19 11.9207 18.46 11.3447 17.11 11.3447Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M10.81 0.995117H2.89C1.54 0.995117 1 1.57112 1 3.00212V6.63812C1 8.06912 1.54 8.64512 2.89 8.64512H10.81C12.16 8.64512 12.7 8.06912 12.7 6.63812V3.00212C12.7 1.57112 12.16 0.995117 10.81 0.995117Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Buttons</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-cta">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.8422 8.53747V11.4444C14.8422 13.8653 13.8702 14.8373 11.4493 14.8373H8.54234C6.12139 14.8373 5.14941 13.8653 5.14941 11.4444V8.53747C5.14941 6.11653 6.12139 5.14453 8.54234 5.14453H11.4493C13.8792 5.15353 14.8422 6.11653 14.8422 8.53747Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M18.9994 4.38803V7.29497C18.9994 9.71592 18.0274 10.6879 15.6065 10.6879H14.8415V8.54596C14.8415 6.12501 13.8695 5.15302 11.4486 5.15302H9.30664V4.38803C9.30664 1.96709 10.2786 0.995117 12.6996 0.995117H15.6065C18.0274 0.995117 18.9994 1.96709 18.9994 4.38803Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M1 15.6016V12.6947C1 10.2737 1.97198 9.30176 4.39292 9.30176H5.1579V11.4437C5.1579 13.8646 6.12988 14.8366 8.55083 14.8366H10.6928V15.6016C10.6928 18.0226 9.7208 18.9945 7.29986 18.9945H4.39292C1.97198 18.9945 1 18.0226 1 15.6016Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Call to Action</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-brand">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="22"
                              viewBox="0 0 20 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.11486 2.87805L7.78621 19.7448C8.13368 20.6383 8.90806 20.7487 9.48386 19.9957L18.796 8.00834C19.0938 7.62683 19.064 7.02445 18.7166 6.6831L15.6092 3.54067C15.4801 3.41015 15.222 3.27964 15.0433 3.25956L2.16719 1.51265C1.23399 1.38213 0.767396 1.99455 1.11486 2.87805Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <g opacity="0.4">
                                <path
                                  d="M8.42184 20.3574L9.4146 9.31374L1.48242 2.18555"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.3716 3.29004L9.41504 9.31386L18.3896 7.49668"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Clients Logo</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-carousel">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="19"
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.4">
                                <path
                                  d="M19 12.7051L13.6953 18.0485"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1 12.7051H19"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <path
                                d="M1 6.33855L6.30471 0.995117"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M19 6.33789H1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Carousel</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-form">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.11354 15.8655V13.2243C4.11354 12.3469 4.79747 11.5599 5.76937 11.5599C6.64228 11.5599 7.4252 12.2474 7.4252 13.2243V15.766C7.4252 17.5298 5.96735 18.9951 4.21253 18.9951C2.4577 18.9951 0.999847 17.5207 0.999847 15.766V10.1941C0.900857 5.11069 4.89646 0.995117 9.95395 0.995117C15.0114 0.995117 18.998 5.11069 18.998 10.0946V15.6665C18.998 17.4303 17.5402 18.8956 15.7854 18.8956C14.0305 18.8956 12.5727 17.4303 12.5727 15.6665V13.1248C12.5727 12.2474 13.2566 11.4604 14.2285 11.4604C15.1014 11.4604 15.8844 12.1479 15.8844 13.1248V15.8655"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Contact Form</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-accordion">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="22"
                              height="14"
                              viewBox="0 0 22 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1H21"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                opacity="0.34"
                                d="M4.33398 6.99902H17.6673"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M8.77734 13H13.2218"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Accordion</h3>
                        </div>
                      </div>
                    </Link>
                  </Slider>
                </div>

                <div className="elements__slider-middle">
                  <Slider
                    {...slider_middle}
                    ref={sliderRef}
                    className="elements__slider-middle-active"
                  >
                    {/* <!-- element item --> */}
                    <Link href="/elements-map">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.0008 7.29879V12.6988C19.0008 14.9488 18.5508 16.5238 17.5428 17.5408L11.8008 11.7988L18.7578 4.8418C18.9198 5.5528 19.0008 6.36279 19.0008 7.29879Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18.757 4.843L4.84299 18.757C2.13399 18.136 1 16.264 1 12.7V7.3C1 2.8 2.8 1 7.3 1H12.7C16.264 1 18.136 2.134 18.757 4.843Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17.5408 17.5428C16.5238 18.5508 14.9488 19.0008 12.6988 19.0008H7.29881C6.36281 19.0008 5.5528 18.9198 4.8418 18.7578L11.7988 11.8008L17.5408 17.5428Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M4.81575 6.38107C5.42775 3.74407 9.38776 3.74407 9.99976 6.38107C10.3508 7.92907 9.37874 9.24307 8.52374 10.0531C7.90274 10.6471 6.92176 10.6471 6.29176 10.0531C5.43676 9.24307 4.45575 7.92907 4.81575 6.38107Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Google Map</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-tab">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.7032 8.52036L18.7715 12.4802C17.9729 15.9 16.3948 17.2831 13.4287 16.9989C12.9534 16.961 12.44 16.8758 11.8886 16.7431L10.2914 16.3642C6.32711 15.4263 5.10073 13.4749 6.0324 9.51505L6.96407 5.54577C7.1542 4.74055 7.38236 4.03953 7.66757 3.46166C8.77986 1.16914 10.6717 0.553378 13.847 1.30176L15.4346 1.67122C19.418 2.5996 20.6348 4.56055 19.7032 8.52036Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M13.4292 16.9992C12.8398 17.397 12.0983 17.7286 11.1951 18.0223L9.69303 18.5149C5.91883 19.7274 3.93191 18.7138 2.70553 14.9529L1.48866 11.211C0.271791 7.45014 1.27951 5.46077 5.05371 4.24819L6.55579 3.75558C6.94557 3.63243 7.31633 3.52823 7.66808 3.46191C7.38288 4.03978 7.15472 4.7408 6.96458 5.54602L6.03291 9.51531C5.10125 13.4751 6.32763 15.4266 10.292 16.3645L11.8891 16.7434C12.4405 16.876 12.9539 16.9613 13.4292 16.9992Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M11.1279 6.71094L15.7387 7.87614"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M10.1973 10.376L12.9542 11.077"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Advance Tab</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-gallery">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.03065 2.73627V15.805C8.03065 17.0457 7.50128 17.542 6.18614 17.542H2.84451C1.52937 17.542 1 17.0457 1 15.805V2.73627C1 1.49557 1.52937 0.999285 2.84451 0.999285H6.18614C7.50128 0.999285 8.03065 1.49557 8.03065 2.73627Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17.8434 15.1864L15.1881 17.8417C14.3634 18.6664 13.6557 18.6254 12.7257 17.6955L10.3629 15.3326C9.43291 14.4026 9.39197 13.6949 10.2166 12.8703L12.8661 10.2208C13.6966 9.39028 14.3985 9.43707 15.3284 10.367L17.6913 12.7299C18.6271 13.654 18.6681 14.3617 17.8434 15.1864Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M17.5424 2.84511V6.18674C17.5424 7.50188 17.013 8.03125 15.6979 8.03125H12.3562C11.0411 8.03125 10.5117 7.50188 10.5117 6.18674V2.84511C10.5117 1.52997 11.0411 1.0006 12.3562 1.0006H15.6979C17.013 1.0006 17.5424 1.52997 17.5424 2.84511Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Gallery</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-shop">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1H2.60222C3.5967 1 4.37939 1.837 4.29652 2.8L3.53224 11.764C3.40333 13.231 4.59117 14.491 6.10131 14.491H15.908C17.234 14.491 18.3942 13.429 18.4955 12.142L18.9927 5.392C19.1032 3.898 17.943 2.683 16.4052 2.683H4.51752"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M14.1207 19C14.7564 19 15.2718 18.4963 15.2718 17.875C15.2718 17.2537 14.7564 16.75 14.1207 16.75C13.4851 16.75 12.9697 17.2537 12.9697 17.875C12.9697 18.4963 13.4851 19 14.1207 19Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M6.75551 19C7.3912 19 7.90653 18.4963 7.90653 17.875C7.90653 17.2537 7.3912 16.75 6.75551 16.75C6.11982 16.75 5.60449 17.2537 5.60449 17.875C5.60449 18.4963 6.11982 19 6.75551 19Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M7.44629 6.40039H18.4961"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Shop Category</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-iconbox">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.8286 1.20975L16.6875 4.37628C17.3715 4.74616 17.3715 5.80167 16.6875 6.17155L10.8286 9.33809C10.3066 9.61775 9.69466 9.61775 9.17267 9.33809L3.31377 6.17155C2.62978 5.80167 2.62978 4.74616 3.31377 4.37628L9.17267 1.20975C9.69466 0.930084 10.3066 0.930084 10.8286 1.20975Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M2.44897 8.30936L7.89388 11.0429C8.56887 11.3857 9.00086 12.0803 9.00086 12.8381V17.9984C9.00086 18.7472 8.21787 19.2253 7.55188 18.8915L2.10698 16.158C1.43199 15.8152 1 15.1206 1 14.3628V9.20248C1 8.4537 1.78299 7.97556 2.44897 8.30936Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M17.5509 8.30936L12.106 11.0429C11.431 11.3857 10.999 12.0803 10.999 12.8381V17.9984C10.999 18.7472 11.782 19.2253 12.448 18.8915L17.8929 16.158C18.5679 15.8152 18.9999 15.1206 18.9999 14.3628V9.20248C18.9999 8.4537 18.2169 7.97556 17.5509 8.30936Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Icon Box</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-heading">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="24"
                              height="17"
                              viewBox="0 0 24 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.107451 17C0.0358169 16.9319 0 16.7873 0 16.5661C0 16.2257 0.0179084 16.0556 0.0537253 16.0556C0.196993 16.0556 0.40294 16.03 0.671566 15.979C0.958101 15.9109 1.21777 15.8258 1.45058 15.7237C1.68339 15.6216 1.81771 15.528 1.85352 15.4429C1.97888 15.0175 2.04156 14.3283 2.04156 13.3754V3.62462C2.04156 2.55255 1.97888 1.88889 1.85352 1.63363C1.7998 1.4975 1.65653 1.37838 1.42372 1.27628C1.20882 1.17417 0.976009 1.0976 0.725291 1.04655C0.492482 0.978478 0.304443 0.944444 0.161176 0.944444C0.0895422 0.944444 0.0537253 0.774274 0.0537253 0.433934C0.0537253 0.178679 0.0716337 0.034034 0.107451 0L3.84136 0.153153C4.07417 0.17017 4.51292 0.161662 5.15763 0.127628C5.82024 0.0935936 6.6888 0.0510511 7.7633 0C7.81703 0.0680681 7.84389 0.246747 7.84389 0.536036C7.84389 0.808308 7.80808 0.944444 7.73644 0.944444C7.62899 0.944444 7.44095 0.978478 7.17233 1.04655C6.92161 1.11461 6.67089 1.1997 6.42017 1.3018C6.18736 1.38689 6.05305 1.47197 6.01723 1.55706C5.87396 1.93143 5.80233 2.65465 5.80233 3.72673V7.35135L5.85606 7.42793L9.07957 7.47898C9.33029 7.47898 9.71532 7.47898 10.2347 7.47898C10.754 7.46196 11.4166 7.44494 12.2225 7.42793C12.2583 7.39389 12.2762 7.35986 12.2762 7.32583V3.62462C12.2762 2.70571 12.2135 2.03353 12.0882 1.60811C12.0524 1.50601 11.9181 1.4039 11.6853 1.3018C11.4703 1.1997 11.2375 1.11461 10.9868 1.04655C10.7361 0.978478 10.5391 0.944444 10.3958 0.944444C10.36 0.944444 10.3242 0.876376 10.2884 0.74024C10.2705 0.604104 10.2705 0.459459 10.2884 0.306306C10.3063 0.136136 10.3332 0.034034 10.369 0L14.3715 0.153153C14.6401 0.153153 15.849 0.102102 17.998 0C18.0517 0.153153 18.0786 0.306306 18.0786 0.459459C18.0786 0.782783 18.0338 0.944444 17.9442 0.944444C17.8368 0.944444 17.6488 0.978478 17.3801 1.04655C17.1294 1.11461 16.8876 1.1997 16.6548 1.3018C16.422 1.38689 16.2877 1.47197 16.2519 1.55706C16.1803 1.81231 16.1265 2.11862 16.0907 2.47598C16.0549 2.83333 16.037 3.25025 16.037 3.72673V13.2733C16.037 13.7327 16.0549 14.1411 16.0907 14.4985C16.1265 14.8559 16.1803 15.1707 16.2519 15.4429C16.2877 15.511 16.4131 15.5961 16.628 15.6982C16.8608 15.7833 17.1026 15.8599 17.3533 15.9279C17.6219 15.996 17.8099 16.03 17.9174 16.03C17.989 16.03 18.0248 16.2087 18.0248 16.5661C18.0248 16.7022 17.998 16.8468 17.9442 17C17.8726 17 17.7025 16.9915 17.4339 16.9745C17.1652 16.9575 16.8071 16.9319 16.3594 16.8979C15.9116 16.8639 15.5177 16.8383 15.1774 16.8213C14.8371 16.8043 14.5506 16.7958 14.3178 16.7958C14.085 16.7958 13.7626 16.8043 13.3507 16.8213C12.9567 16.8383 12.5449 16.8639 12.1151 16.8979C11.7032 16.9149 11.3271 16.9319 10.9868 16.9489C10.6466 16.983 10.4227 17 10.3153 17C10.2794 16.9489 10.2526 16.8468 10.2347 16.6937C10.2168 16.5405 10.2168 16.3959 10.2347 16.2598C10.2705 16.1236 10.3063 16.0556 10.3421 16.0556C10.4854 16.0556 10.6913 16.0215 10.96 15.9535C11.2286 15.8854 11.4793 15.8003 11.7121 15.6982C11.9449 15.5791 12.0792 15.477 12.1151 15.3919C12.2225 15.0005 12.2762 14.3283 12.2762 13.3754V9.11261L12.2225 9.01051L9.07957 8.95946C6.85893 8.97648 5.74861 9.002 5.74861 9.03604L5.80233 9.08709V13.2733C5.80233 13.7157 5.82024 14.1156 5.85606 14.473C5.89187 14.8303 5.9456 15.1451 6.01723 15.4174C6.05305 15.4855 6.17841 15.5706 6.39331 15.6727C6.62612 15.7748 6.86788 15.8684 7.1186 15.9535C7.38723 16.0215 7.57527 16.0556 7.68272 16.0556C7.75435 16.0556 7.79017 16.1832 7.79017 16.4384C7.80808 16.6937 7.79017 16.8809 7.73644 17C6.85893 16.9489 6.11573 16.9064 5.50684 16.8724C4.91586 16.8213 4.37861 16.7958 3.89508 16.7958C3.30411 16.7958 2.70417 16.8213 2.09529 16.8724C1.50431 16.9064 0.841696 16.9489 0.107451 17Z"
                                fill="currentColor"
                              />
                              <path
                                d="M20.1386 16.9698C20.0975 16.9308 20.077 16.8383 20.077 16.6921C20.077 16.5459 20.0975 16.4728 20.1386 16.4728C20.2206 16.4728 20.3386 16.4581 20.4924 16.4289C20.6463 16.3899 20.7899 16.3461 20.9232 16.2973C21.0566 16.2388 21.1284 16.1901 21.1386 16.1511C21.2002 15.9172 21.231 15.6346 21.231 15.3032V10.2154C21.231 9.96204 21.2156 9.75736 21.1848 9.60141C21.154 9.44547 21.0822 9.3675 20.9694 9.3675C20.8976 9.3675 20.7745 9.41136 20.6001 9.49907L19.9386 9.86457C19.877 9.83533 19.8206 9.78173 19.7693 9.70375C19.718 9.61603 19.6924 9.54781 19.6924 9.49907C19.6924 9.43085 19.7026 9.38699 19.7232 9.3675C20.595 8.81194 21.3079 8.36847 21.8618 8.03709C22.4259 7.69596 22.7388 7.52539 22.8003 7.52539H22.8311C22.9131 7.52539 22.9747 7.61311 23.0157 7.78855C22.9234 8.09069 22.8772 8.54878 22.8772 9.16282V14.9815C22.8772 15.4494 22.9183 15.8392 23.0003 16.1511C23.0208 16.1999 23.0926 16.2535 23.2157 16.3119C23.3491 16.3607 23.4875 16.3997 23.6311 16.4289C23.785 16.4581 23.8927 16.4728 23.9542 16.4728C23.985 16.4728 24.0004 16.5702 24.0004 16.7652C24.0004 16.8724 23.9953 16.9406 23.985 16.9698C23.9747 16.9698 23.8927 16.9601 23.7388 16.9406C23.585 16.9308 23.4003 16.9211 23.1849 16.9114C22.9695 16.9016 22.7541 16.8919 22.5387 16.8821C22.3336 16.8724 22.1695 16.8675 22.0464 16.8675C21.9233 16.8675 21.7592 16.8724 21.5541 16.8821C21.3489 16.8919 21.1386 16.9016 20.9232 16.9114C20.7181 16.9211 20.5386 16.9308 20.3847 16.9406C20.2411 16.9601 20.1591 16.9698 20.1386 16.9698Z"
                                fill="currentColor"
                                fillOpacity="0.4"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Heading</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-instagram">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M16.2996 6.4C17.7908 6.4 18.9996 5.19117 18.9996 3.7C18.9996 2.20883 17.7908 1 16.2996 1C14.8084 1 13.5996 2.20883 13.5996 3.7C13.5996 5.19117 14.8084 6.4 16.2996 6.4Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8 1H7.3C2.8 1 1 2.8 1 7.3V12.7C1 17.2 2.8 19 7.3 19H12.7C17.2 19 19 17.2 19 12.7V8.2"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M5.32961 12.6369C5.01461 11.6469 5.38361 10.4139 6.42761 10.0809C6.97661 9.9009 7.65161 10.0539 8.03861 10.5849C8.39861 10.0359 9.10061 9.9099 9.64061 10.0809C10.6846 10.4139 11.0536 11.6469 10.7386 12.6369C10.2436 14.2119 8.51561 15.0309 8.03861 15.0309C7.55261 15.0219 5.84261 14.2209 5.32961 12.6369Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Instagram Feed</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-video">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M7.38965 10.0001V8.66814C7.38965 6.94914 8.60465 6.25614 10.0896 7.11114L11.2416 7.77714L12.3936 8.44314C13.8786 9.29814 13.8786 10.7021 12.3936 11.5571L11.2416 12.2231L10.0896 12.8891C8.60465 13.7441 7.38965 13.0421 7.38965 11.3321V10.0001Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Video</h3>
                        </div>
                      </div>
                    </Link>
                  </Slider>
                </div>

                <div className="elements__slider-bottom">
                  <Slider
                    {...slider_bottom}
                    className="elements__slider-bottom-active"
                  >
                    {/* <!-- element item --> */}
                    <Link href="/elements-parallax">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="18"
                              height="20"
                              viewBox="0 0 18 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 19H17.2"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 1H17.2"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <g opacity="0.4">
                                <path
                                  d="M9.09961 4.59961V15.3996"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.6467 6.14759L9.09973 3.60059L6.55273 6.14759"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.6467 13.501L9.09973 16.048L6.55273 13.501"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Parallax</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-testimonial">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="18"
                              viewBox="0 0 20 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.0002 8.53832H13.7828C12.4065 8.53832 11.4619 7.49482 11.4619 6.21744V3.32083C11.4619 2.04345 12.4065 1 13.7828 1H16.6794C17.9567 1 19.0002 2.04345 19.0002 3.32083V8.53832Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18.9998 8.53809C18.9998 13.9804 17.9833 14.8799 14.9248 16.6971"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <g opacity="0.4">
                                <path
                                  d="M8.53832 8.53832H3.32087C1.94454 8.53832 1 7.49482 1 6.21744V3.32083C1 2.04345 1.94454 1 3.32087 1H6.22645C7.50382 1 8.54731 2.04345 8.54731 3.32083V8.53832"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.5379 8.53809C8.5379 13.9804 7.5214 14.8799 4.46289 16.6971"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Testimonial</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-pricing">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="13"
                              height="20"
                              viewBox="0 0 13 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 13.1592C1 14.8968 2.50437 16.3184 4.33469 16.3184H8.09562C9.70029 16.3184 11.0041 15.0773 11.0041 13.5654C11.0041 11.9181 10.2017 11.3314 9.02332 10.9478L3.00583 9.05227C1.80233 8.66866 1 8.08195 1 6.43465C1 4.92275 2.30379 3.68164 3.90845 3.68164H7.66939C9.52478 3.70421 11.0292 5.10328 11.0292 6.84084"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M6.01465 17.3301V18.9999"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M6.01465 1V2.76012"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Pricing Table</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-skill">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="17"
                              viewBox="0 0 20 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M1 9.27959L3.25 7.92959C4.636 7.10159 6.364 7.10159 7.75 7.92959C9.136 8.75759 10.864 8.75759 12.25 7.92959C13.636 7.10159 15.364 7.10159 16.75 7.92959L19 9.27959"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 1L3.25 2.35C4.636 3.178 6.364 3.178 7.75 2.35C9.136 1.522 10.864 1.522 12.25 2.35C13.636 3.178 15.364 3.178 16.75 2.35L19 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 15.5804L3.25 14.2304C4.636 13.4024 6.364 13.4024 7.75 14.2304C9.136 15.0584 10.864 15.0584 12.25 14.2304C13.636 13.4024 15.364 13.4024 16.75 14.2304L19 15.5804"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Progress Bar</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-tab">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.7032 8.52036L18.7715 12.4802C17.9729 15.9 16.3948 17.2831 13.4287 16.9989C12.9534 16.961 12.44 16.8758 11.8886 16.7431L10.2914 16.3642C6.32711 15.4263 5.10073 13.4749 6.0324 9.51505L6.96407 5.54577C7.1542 4.74055 7.38236 4.03953 7.66757 3.46166C8.77986 1.16914 10.6717 0.553378 13.847 1.30176L15.4346 1.67122C19.418 2.5996 20.6348 4.56055 19.7032 8.52036Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M13.4292 16.9992C12.8398 17.397 12.0983 17.7286 11.1951 18.0223L9.69303 18.5149C5.91883 19.7274 3.93191 18.7138 2.70553 14.9529L1.48866 11.211C0.271791 7.45014 1.27951 5.46077 5.05371 4.24819L6.55579 3.75558C6.94557 3.63243 7.31633 3.52823 7.66808 3.46191C7.38288 4.03978 7.15472 4.7408 6.96458 5.54602L6.03291 9.51531C5.10125 13.4751 6.32763 15.4266 10.292 16.3645L11.8891 16.7434C12.4405 16.876 12.9539 16.9613 13.4292 16.9992Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M11.1279 6.71094L15.7387 7.87614"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M10.1973 10.376L12.9542 11.077"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Advance Tab</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-team">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M17.0263 6.15979C16.9662 6.14979 16.8961 6.14979 16.836 6.15979C15.4535 6.10979 14.3516 4.97983 14.3516 3.57989C14.3516 2.14995 15.5036 1 16.9361 1C18.3687 1 19.5207 2.15995 19.5207 3.57989C19.5107 4.97983 18.4087 6.10979 17.0263 6.15979Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M15.9939 13.439C17.3664 13.669 18.879 13.429 19.9409 12.719C21.3534 11.779 21.3534 10.2391 19.9409 9.29915C18.869 8.58918 17.3363 8.34919 15.9639 8.58918"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M4.97488 6.15979C5.03499 6.14979 5.10511 6.14979 5.16522 6.15979C6.54767 6.10979 7.64962 4.97983 7.64962 3.57989C7.64962 2.14995 6.49758 1 5.06504 1C3.63251 1 2.48047 2.15995 2.48047 3.57989C2.49049 4.97983 3.59244 6.10979 4.97488 6.15979Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M6.00636 13.439C4.63393 13.669 3.12125 13.429 2.05937 12.719C0.646875 11.779 0.646875 10.2391 2.05937 9.29915C3.13127 8.58918 4.66398 8.34919 6.03641 8.58918"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.0185 13.6285C10.9584 13.6185 10.8883 13.6185 10.8281 13.6285C9.4457 13.5785 8.34375 12.4486 8.34375 11.0486C8.34375 9.6187 9.49579 8.46875 10.9283 8.46875C12.3609 8.46875 13.5129 9.6287 13.5129 11.0486C13.5029 12.4486 12.4009 13.5885 11.0185 13.6285Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.10332 16.7784C6.69082 17.7183 6.69082 19.2583 8.10332 20.1982C9.70616 21.2682 12.3308 21.2682 13.9336 20.1982C15.3461 19.2583 15.3461 17.7183 13.9336 16.7784C12.3408 15.7184 9.70616 15.7184 8.10332 16.7784Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Team Member</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-social">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <g opacity="0.4">
                                <path
                                  d="M6.39965 1.90039H7.29965C5.54465 7.15639 5.54465 12.8444 7.29965 18.1004H6.39965"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.6992 1.90039C14.4542 7.15639 14.4542 12.8444 12.6992 18.1004"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1.90039 13.5992V12.6992C7.15639 14.4542 12.8444 14.4542 18.1004 12.6992V13.5992"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1.90039 7.29965C7.15639 5.54465 12.8444 5.54465 18.1004 7.29965"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Social Icons</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-subscribe">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="18"
                              height="20"
                              viewBox="0 0 18 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M8.94824 4.9668V7.94149"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                              />
                              <path
                                d="M8.96588 1C5.67853 1 3.0165 3.66203 3.0165 6.94938V8.82531C3.0165 9.43275 2.76637 10.3439 2.45372 10.862L1.31923 12.7558C0.622454 13.9261 1.10484 15.2303 2.39119 15.6591C6.66116 17.0794 11.2795 17.0794 15.5495 15.6591C16.7555 15.2571 17.2736 13.8457 16.6215 12.7558L15.487 10.862C15.1743 10.3439 14.9242 9.42382 14.9242 8.82531V6.94938C14.9153 3.6799 12.2354 1 8.96588 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                              />
                              <path
                                opacity="0.4"
                                d="M11.923 16.0254C11.923 17.6601 10.5831 19.0001 8.94832 19.0001C8.13542 19.0001 7.38505 18.6606 6.84907 18.1246C6.31309 17.5887 5.97363 16.8383 5.97363 16.0254"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Subscribe Form</h3>
                        </div>
                      </div>
                    </Link>

                    {/* <!-- element item --> */}
                    <Link href="/elements-process">
                      <div className="elements__item d-flex align-items-center justify-content-center transition-3">
                        <div className="elements__icon">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.8 13.6006C11.8 15.1936 11.107 16.6336 10 17.6146C9.046 18.4786 7.786 19.0006 6.4 19.0006C3.421 19.0006 1 16.5796 1 13.6006C1 11.1166 2.692 9.01065 4.978 8.38965C5.599 9.95565 6.931 11.1616 8.578 11.6116C9.028 11.7376 9.505 11.8006 10 11.8006C10.495 11.8006 10.972 11.7376 11.422 11.6116C11.665 12.2236 11.8 12.8986 11.8 13.6006Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.3996 6.4C15.3996 7.102 15.2646 7.777 15.0216 8.389C14.4006 9.955 13.0686 11.161 11.4216 11.611C10.9716 11.737 10.4946 11.8 9.99961 11.8C9.50461 11.8 9.02761 11.737 8.57761 11.611C6.93061 11.161 5.59861 9.955 4.97761 8.389C4.73461 7.777 4.59961 7.102 4.59961 6.4C4.59961 3.421 7.02061 1 9.99961 1C12.9786 1 15.3996 3.421 15.3996 6.4Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M19 13.6006C19 16.5796 16.579 19.0006 13.6 19.0006C12.214 19.0006 10.954 18.4786 10 17.6146C11.107 16.6336 11.8 15.1936 11.8 13.6006C11.8 12.8986 11.665 12.2236 11.422 11.6116C13.069 11.1616 14.401 9.95565 15.022 8.38965C17.308 9.01065 19 11.1166 19 13.6006Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="elements__content">
                          <h3 className="elements__title">Process</h3>
                        </div>
                      </div>
                    </Link>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingElements;
