import React from "react";

const CurrentFocus = () => {
  return (
    <section className="about__text pt-60 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div
              className="about__text-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h3 className="about__text-title">
                Current Focus and Future Direction
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
                Today, Ciprian Ciceu continues to focus on developing technology platforms, educational initiatives and international collaborations that align with his long-term vision. His ongoing work explores new ways to combine automation, blockchain and education into cohesive ecosystems that deliver real-world value.
              </p>
              <p>
                Looking ahead, Ciprian remains committed to building solutions that are responsible, scalable and impactful, while continuing to contribute to global conversations about the future of technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
