import React from "react";
import Image from "next/image";
// internal
import feature_bg from "@assets/img/cta/10/cta-features-bg.jpg";
import shape_bg from '@assets/img/cta/10/cta-shape.png';
import { WinCup, PlayTwo } from "@svg/index";
import PoliticianCtaForm from "@components/forms/politician-cta-form";
import { useVideoModal } from "src/provider/VideoProvider";

const PoliticianCta = () => {
  const { playVideo } = useVideoModal();
  return (
   <section className="cta__area cta__translate pb-140">
        <div className="container">
          <div
            className="cta__inner-10 include-bg"
            style={{ backgroundImage: `url(${shape_bg.src})` }}
          >
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="cta__form-10">
                  <h3 className="cta-form-title">Join our Movement!</h3>
                  <p>Our promise to make america great again!</p>
                  {/* form start */}
                  <PoliticianCtaForm />
                  {/* form end */}
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="cta__features-wrapper d-sm-flex">
                  <div className="cta__features-item p-relative">
                    <div className="cta__features-overlay">
                      <Image src={feature_bg} alt="feature" />
                    </div>
                    <div className="cta__features-video">
                      <a
                        className="popup-video"
                        style={{ cursor: "pointer" }}
                        onClick={() => playVideo("NmPm9bS7bak")}
                      >
                        <PlayTwo />
                      </a>
                      <span>Watch Video</span>
                    </div>
                    <div className="cta__features-content">
                      <h3 className="cta__features-title">Special Message</h3>
                      <p>Democracy arises out of the notion that those.</p>
                    </div>
                  </div>
                  <div className="cta__counter">
                    <div className="cta__counter-icon">
                      <span>
                        <WinCup />
                      </span>
                    </div>
                    <div className="cta__counter-content">
                      <h4>
                        +<span>223</span>K
                      </h4>
                      <p>2021 Win Vote</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default PoliticianCta;
