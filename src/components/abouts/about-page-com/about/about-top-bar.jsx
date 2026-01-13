import React from "react";

const AboutTopBar = () => {
  return (
    <section
      className="about__heading about__heading-overlay about__spacing include-bg jarallax"
      style={{ backgroundImage: `url(/assets/img/video/Ciceu%20Ciprian%20-%20History%20behind.jpg)` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="about__heading-content text-center p-relative z-index-1">
              <h1 className="about__heading-title">ABOUT CIPRIAN CICEU </h1>
              <h3 className="about__heading-subtitle">
                Technology Entrepreneur, Blockchain Educator & Innovation Leader
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTopBar;
