import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@assets/img/logo/ciprian-ciceu-logo-horizontal.png";
import Menus from "./menus";
import Languages from "./component/languages";
import useSticky from "@hooks/use-sticky";
import OffCanvasFive from "@components/common/off-canvas/off-canvas-5";

const HeaderEight = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area">
          <div
            className={`header__bottom-9 header__sticky ${sticky ? "header-sticky" : ""
              }`}
            id="header-sticky"
            style={{ minHeight: "90px", display: "flex", alignItems: "center" }}
          >
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-4 col-sm-5 col-6">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "60px" }} />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                    <div className="main-menu main-menu-9 main-menu-ff-space">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-8 col-sm-7 col-6">
                    <div className="header__bottom-right-8 d-flex justify-content-end align-items-center">
                      <div className="header__lang ml-30 d-none d-lg-block">
                        <Languages />
                      </div>
                      <div className="header__btn-8 ml-30 d-none d-sm-block">
                        <Link href="/contact" className="tp-btn-5">
                          Contact
                        </Link>
                      </div>
                      <div className="header__hamburger ml-30">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn-8 hamburger-btn-8-black offcanvas-open-btn"
                        >
                          Menu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas start */}
      <OffCanvasFive
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderEight;
