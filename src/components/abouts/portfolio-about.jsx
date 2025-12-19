import React from "react";

const PortfolioAbout = () => {
  return (
    <>
      <section className="about__area about__space-145">
        <div
          className="about__inner-9 black-bg wow fadeInUp"
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-10 col-xl-10 col-lg-11 col-md-10">
                <div className="about__wrapper-9">
                  <span className="about-subtitle">ABOUT ME</span>
                  <h3 className="about-title">
                    Ciprian Ciceu is a<span> technology entrepreneur</span> and blockchain educator<span> with over a decade of experience</span>{" "}
                    in building digital platforms, <span>automated trading systems</span> and international business communities.{" "}

                  </h3>

                  <p>
                    His work focuses on the intersection of technology, financial innovation and education, with projects developed and scaled across Europe, the Middle East and emerging markets.
                    Throughout his career, Ciprian has contributed to the creation of fintech solutions, blockchain-based infrastructures and educational programs designed to make advanced technology more accessible to individuals and organizations.
                    His approach combines technical execution, strategic thinking and long-term sustainability, with a strong emphasis on transparency and real-world impact.
                  </p>

                  <div className="about__btn-9">
                    <a
                      href="/downloads/CV-Ciprian-Ciceu.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="tp-btn-5 tp-btn-5-white"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAbout;
