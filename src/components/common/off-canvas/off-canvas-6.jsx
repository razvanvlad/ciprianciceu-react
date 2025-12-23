import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal

import logo from "@assets/img/logo/ciprian-ciceu-logo-icon.png";
import SocialLinks from "@components/social";
import MobileMenus from "./mobile-menus";

const OffCanvasSix = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  return (
    <React.Fragment>
      <div
        className={`offcanvas__area offcanvas__area-1 ${isOffCanvasOpen ? "offcanvas-opened" : ""
          }`}
      >
        <div className="offcanvas__wrapper">

          <div className="offcanvas__close">
            <button
              onClick={() => setIsOffCanvasOpen(false)}
              className="offcanvas__close-btn offcanvas-close-btn"
            >
              <i className="fa-regular fa-xmark"></i>
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/home">
                  <Image src={logo} alt="logo" style={{ maxWidth: "100%", height: "auto" }} />
                </Link>
              </div>
            </div>
            <div className="mobile-menu-3 fix mb-40 menu-counter mean-container d-lg-none">
              <div className="mean-bar">
                {/* MobileMenus start*/}
                <MobileMenus />
                {/* MobileMenus end*/}
              </div>
            </div>
            <div className="offcanvas__menu offcanvas__menu-ff-space d-none d-lg-block">
              <nav>
                <ul>
                  <li>
                    <Link href="/home">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/services">Service</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="offcanvas__inner mb-80 d-none d-lg-block">
              <h4>Professional & Media Inquiries</h4>
              <p>For professional inquiries, media requests, speaking engagements or collaboration proposals, please use the official contact channels listed below.</p>

              <p>All messages are reviewed with attention and confidentiality.</p>
            </div>

            <div className="offcanvas__inner-btn mb-80">
              <a href="mailto:contact@ciprianciceu.com" className="tp-btn-offcanvas w-100">
                Say Hello!
              </a>
            </div>

            <div className="offcanvas__contact mb-40">
              <p className="offcanvas__contact-mail">
                📧 General Inquiries: <br></br>
                <a href="mailto:contact@ciprianciceu.com">contact@ciprianciceu.com</a>
              </p>
              <p className="offcanvas__contact-mail">
                📧 General Inquiries: <br></br>
                <a href="mailto:press@ciprianciceu.com">press@ciprianciceu.com</a>
              </p>
            </div>

            <div className="offcanvas__social">
              <h3 className="offcanvas__social-title">Follow :</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      {/* overlay */}
      <div
        onClick={() => setIsOffCanvasOpen(false)}
        className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`}
      ></div>
      {/* overlay */}
    </React.Fragment>
  );
};

export default OffCanvasSix;
