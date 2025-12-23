import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@assets/img/logo/ciprian-ciceu-logo-horizontal-90px.png";
import bg_shape from "@assets/img/footer/footer-shape-2.jpg";
import { Call, Email } from "@svg/index";
import SocialLinks from "@components/social";
import CopyrightText from "./component/copyright-text";

// footer widget
function FooterWidget({ col, col_2, title, contents }) {
  return (
    <div className={`col-xxl-${col} col-xl-${col} col-lg-3 col-md-6 col-sm-6`}>
      <div className={`footer__widget-6 mb-50 footer-col-6-${col_2}`}>
        <h3 className="footer__widget-title-6">{title}</h3>
        <div className="footer__widget-content">
          <ul>
            {contents.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const FooterSeven = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area p-relative z-index-1"
          data-bg-color="footer-bg-black-2"
        >
          <div
            className="footer__bg"
            style={{ backgroundImage: `url(${bg_shape.src})` }}
          ></div>
          <div className="footer__top-6">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget-6 mb-50 footer-col-6-1">
                    <div className="footer__logo">
                      <Link href="/home">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>

                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <p>
                          For professional inquiries, media requests, speaking engagements or collaboration proposals, please use the official contact channels listed below.
                        </p>

                        <Link
                          href="/contact"
                          className="tp-link-btn-2 tp-link-btn-white"
                        >
                          Get in Touch
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <FooterWidget
                  col="3"
                  col_2="2"
                  title="Quick Link"
                  contents={[
                    { url: "/about", title: "About" },
                    { url: "/projects", title: "Projects" },
                    { url: "/media", title: "Media" },
                  ]}
                />
                <FooterWidget
                  col="2"
                  col_2="3"
                  title="Projects"
                  contents={[
                    { url: "/projects-creative", title: "🚀 Mainet X" },
                    { url: "/projects", title: "🎓 BeTrader Academy" },
                  ]}
                />
                <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget-6 mb-50 footer-col-6-4">
                    <h3 className="footer__widget-title-6">Contact Us</h3>

                    <div className="footer__widget-content">
                      <div className="footer__info">

                        <div className="footer__info-item-6 d-flex align-items-start">
                          <div className="footer__info-icon-6 mr-20">
                            <span>
                              <Email />
                            </span>
                          </div>
                          <div className="footer__info-text-6">
                            <a href="mailto:contact@ciprianciceu.com">
                              contact@ciprianciceu.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="footer__social-6">
                        <SocialLinks />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="footer__bottom-inner-6">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="footer__copyright-6">
                      <CopyrightText />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="footer__link-6 text-sm-end">
                      <Link href="/policy">Privacy Policy</Link>
                      <Link href="/terms">Terms of Use</Link>
                      <Link href="/policy">Cookie Policy</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSeven;
