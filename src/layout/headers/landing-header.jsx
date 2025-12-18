import React, { useState } from "react";
import Link from "next/link";
import useSticky from "@hooks/use-sticky";
import OffCanvasSix from "@components/common/off-canvas/off-canvas-6";

const LandingHeader = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header__area header__transparent header__padding header__sticky header__black ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="container-fluid tp-container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-6">
                <div className="logo">
                  <Link href="/">
                    <img
                      className="logo-light"
                      src="/assets/img/logo/logo.svg"
                      alt=""
                    />
                    <img
                      className="logo-black"
                      src="/assets/img/logo/logo-black.svg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 col-6 d-none d-lg-block">
                <div className="main-menu smooth text-end text-xl-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown">
                        <Link href="home">Pre-Built Sites</Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/home">Main Home</Link>
                          </li>
                          <li>
                            <Link href="/home-lawyer">Lawyer</Link>
                          </li>
                          <li>
                            <Link href="/home-freelancer">Freelancer</Link>
                          </li>
                          <li>
                            <Link href="/home-agency">Digital Agency</Link>
                          </li>
                          <li>
                            <Link href="/home-photographer">Photographer</Link>
                          </li>
                          <li>
                            <Link href="/home-startup">Startup</Link>
                          </li>
                          <li>
                            <Link href="/home-creative">Creative Agency</Link>
                          </li>
                          <li>
                            <Link href="/home-portfolio">
                              Personal Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-architecture">Architechture</Link>
                          </li>
                          <li>
                            <Link href="/home-vertical">Vertical Slider</Link>
                          </li>
                          <li>
                            <Link href="/home-politician">Politician</Link>
                          </li>
                          <li>
                            <Link href="/home-shop">Minimal Shop</Link>
                          </li>
                          <li>
                            <Link href="/home-swiper">Swipper Slider</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#demo">Demos</a>
                      </li>
                      <li>
                        <a href="#elements">Elements</a>
                      </li>
                      <li>
                        <a href="#portfolio">Protfolio</a>
                      </li>
                      <li>
                        <a href="#blog">Blog</a>
                      </li>
                      <li>
                        <a href="#shop">Shop</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-6">
                <div className="header__right d-flex justify-content-end">
                  <div className="header__hamburger d-lg-none">
                    <button
                      onClick={() => setIsOffCanvasOpen(true)}
                      type="button"
                      className="hamburger-btn offcanvas-open-btn"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                  <div className="header__btn d-none d-xl-block">
                    <a
                      rel="noreferrer"
                      href="https://themeforest.net/item/harry-personal-portfolio-agency-html5-template/40085467?s_rank=1"
                      className="tp-btn tp-btn-header"
                      target="_blank"
                    >
                      Buy Now
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.54572 18.9999C7.99759 18.9999 8.3639 18.6162 8.3639 18.1428C8.3639 17.6694 7.99759 17.2856 7.54572 17.2856C7.09385 17.2856 6.72754 17.6694 6.72754 18.1428C6.72754 18.6162 7.09385 18.9999 7.54572 18.9999Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5457 18.9999C16.9976 18.9999 17.3639 18.6162 17.3639 18.1428C17.3639 17.6694 16.9976 17.2856 16.5457 17.2856C16.0939 17.2856 15.7275 17.6694 15.7275 18.1428C15.7275 18.6162 16.0939 18.9999 16.5457 18.9999Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 1H4.27273L6.46545 12.4771C6.54027 12.8718 6.7452 13.2263 7.04436 13.4785C7.34351 13.7308 7.71784 13.8649 8.10182 13.8571H16.0545C16.4385 13.8649 16.8129 13.7308 17.112 13.4785C17.4112 13.2263 17.6161 12.8718 17.6909 12.4771L19 5.28571H5.09091"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <OffCanvasSix
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
    </>
  );
};

export default LandingHeader;
