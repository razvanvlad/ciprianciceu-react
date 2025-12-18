import React from "react";

const LandingHeaderFooterPrev = () => {
  return (
    <section className="hf__preview-area pb-120">
      <div className="container">
        <div className="row tp-gx-20">
          <div className="col-xl-6 col-lg-6">
            <div className="hf__preview-item">
              <div className="hf__preview-content">
                <div className="hf__preview-top d-sm-flex align-items-center">
                  <span className="hf__preview-number">
                    <img src="assets/landing-img/shape/underline.png" alt="" />
                    12+
                  </span>
                  <h3 className="hf__preview-title">
                    Unlimited <br />
                    Appearnce &
                    <span>
                      Header
                      <svg
                        width="89"
                        height="10"
                        viewBox="0 0 89 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.30859 8.525C20.3898 5.61045 58.418 -6.84251 87.3086 8.525"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h3>
                </div>
              </div>
              <div className="hf__preview-thumb text-center">
                <img
                  className="hf__preview-shape-1"
                  src="assets/landing-img/hf/shape-1.png"
                  alt=""
                />
                <img src="assets/landing-img/hf/header-prev.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="hf__preview-item tp-footer-prv">
              <div className="hf__preview-content">
                <div className="hf__preview-top d-sm-flex align-items-center">
                  <span className="hf__preview-number">
                    <img src="assets/landing-img/shape/underline-2.png" alt="" />
                    10+
                  </span>
                  <h3 className="hf__preview-title">
                    Unlimited <br />
                    Appearnce &
                    <span>
                      Footer’s
                      <svg
                        width="89"
                        height="10"
                        viewBox="0 0 89 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.30859 8.525C20.3898 5.61045 58.418 -6.84251 87.3086 8.525"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h3>
                </div>
              </div>
              <div className="hf__preview-thumb">
                <img
                  className="hf__preview-shape-2"
                  src="assets/landing-img/hf/shape-2.png"
                  alt=""
                />
                <img src="assets/landing-img/hf/footer-prev.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeaderFooterPrev;
