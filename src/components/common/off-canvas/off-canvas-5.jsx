import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal

import logo from "@assets/img/logo/ciprian-ciceu-logo-icon.png";
import SocialLinks from "@components/social";
import CloseFour from "@svg/close-4";
import MobileMenus from "./mobile-menus";
import Languages from "@layout/headers/component/languages";
import { useTranslations, useLocale } from '@context/IntlContext';

const OffCanvasFive = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  const t = useTranslations('offcanvas');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  return (
    <React.Fragment>
      <div
        className={`offcanvas__area offcanvas__area-3 ${isOffCanvasOpen ? "offcanvas-opened" : ""
          }`}
      >

        <div className="offcanvas__wrapper offcanvas__wrapper-3">
          <div className="offcanvas__close">
            <button
              onClick={() => setIsOffCanvasOpen(false)}
              className="offcanvas__close-btn-3 offcanvas-close-btn"
            >
              <CloseFour />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-10 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href={`/${locale}`}>
                  <Image src={logo} alt="logo" style={{ maxWidth: "100%", height: "auto" }} />
                </Link>
              </div>
            </div>

            {/* Language Selector in Mobile Menu */}
            <div className="offcanvas__lang mb-20">
              <Languages />
            </div>

            <div className="mobile-menu fix mb-40 menu-counter mean-container d-lg-none">
              <div className="mean-bar">
                {/* MobileMenus start*/}
                <MobileMenus />
                {/* MobileMenus end*/}
              </div>
            </div>
            <div className="offcanvas__menu offcanvas__menu-3 offcanvas__menu-ff-space d-none d-lg-block">
              <nav>
                <ul>
                  <li>
                    <Link href={`/${locale}/about`}>{tNav('about')}</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/portfolio`}>{tNav('projects')}</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/media`}>{tNav('media')}</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="offcanvas__inner mb-80 d-none d-lg-block">
              <h4>{t('inquiriesTitle')}</h4>
              <p>{t('inquiriesDesc')}</p>

              <p>{t('confidentialityNote')}</p>
            </div>

            <div className="offcanvas__inner-btn mb-80">
              <a href="mailto:contact@ciprianciceu.com" className="tp-btn-offcanvas-pink w-100">
                {t('sayHello')}
              </a>
            </div>

            <div className="offcanvas__contact mb-40">
              <p className="offcanvas__contact-mail">
                📧 {t('generalInquiries')}: <br></br>
                <a href="mailto:contact@ciprianciceu.com">contact@ciprianciceu.com</a>
              </p>
              <p className="offcanvas__contact-mail">
                📧 {t('pressMedia')} <br></br>
                <a href="mailto:press@ciprianciceu.com">press@ciprianciceu.com</a>
              </p>
            </div>

            <div className="offcanvas__social-3">
              <h4>{t('checkOut')}</h4>
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

export default OffCanvasFive;
