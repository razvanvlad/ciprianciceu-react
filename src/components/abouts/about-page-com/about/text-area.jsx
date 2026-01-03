import React from "react";

const TextArea = () => {
  return (
    <section className="about__text pt-115 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div
              className="about__text-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h3 className="about__text-title">
                Introduction
              </h3>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div
              className="about__text wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <p>
                Ciprian Ciceu is a technology entrepreneur, blockchain educator and founder with extensive experience in building digital platforms, automated systems and international communities across fintech, blockchain and emerging technologies. His professional journey spans more than a decade and reflects a consistent focus on innovation grounded in education, structure and long-term sustainability.
              </p>
              <p>
                Throughout his career, Ciprian has worked at the intersection of technology and finance, contributing to the development of scalable digital ecosystems and educational initiatives designed to make complex technologies more accessible. His approach emphasizes responsibility, transparency and practical execution, positioning technology as a tool for empowerment rather than speculation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextArea;
