import React from "react";

const LandingTools = () => {
  return (
    <section className="tools__area pb-40">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <div className="tools__section-title mt-20">
              <div className="tp-section-title-wrapper mb-30">
                <span className="tp-section-subtitle tp-section-subtitle-border">
                  Best-in-class
                </span>
                <h3 className="tp-section-title">
                  All the tools <br />
                  <span className="tp-section-title-underline">
                    you.
                    <svg
                      width="106"
                      height="15"
                      viewBox="0 0 106 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 11.9961C25.1875 8.5118 69.4062 -6.37573 103 11.9961"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  need.
                </h3>
                <p>
                  Thats why we’ve added tons of flexible options with exclusive
                  functions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="tools__thumb text-end mr-35">
              <img src="assets/landing-img/tools/tools-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTools;
