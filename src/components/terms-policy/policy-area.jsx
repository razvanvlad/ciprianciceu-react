import React from "react";

const PolicyArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">Last updated: January 5, 2026</h4>
                <p>
                  Your privacy is important to us. This Privacy Policy explains how
                  personal data is collected, used, and protected when you visit
                  www.ciprianciceu.com (the "Website"), operated by Ciprian Gabriel
                  Ciceu ("we", "us", "our").
                </p>
                <p>
                  By using this Website, you agree to the collection and use of
                  information in accordance with this Privacy Policy.
                </p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">1. Scope of This Privacy Policy</h3>
                <p>
                  This Privacy Policy applies solely to information collected through
                  this Website and does not apply to any third-party websites or
                  platforms that may be linked from this site.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">2. Information We Collect</h3>

                <h4 className="policy__subtitle mt-30 mb-20">2.1 Personal Information</h4>
                <p>
                  We may collect limited personal information only when you voluntarily
                  provide it, such as:
                </p>
                <ul>
                  <li>name</li>
                  <li>email address</li>
                  <li>information submitted via contact forms</li>
                </ul>

                <h4 className="policy__subtitle mt-30 mb-20">2.2 Non-Personal Information</h4>
                <p>
                  We may automatically collect non-identifiable information such as:
                </p>
                <ul>
                  <li>browser type</li>
                  <li>device type</li>
                  <li>pages visited</li>
                  <li>approximate location (country or region level)</li>
                </ul>
              </div>

              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">Contact Information</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact:
                </p>

                <ul>
                  <li>
                    Email:{" "}
                    <span>
                      <a href="mailto:contact@ciprianciceu.com">contact@ciprianciceu.com</a>
                    </span>
                  </li>
                  <li>
                    Website:{" "}
                    <span>
                      <a href="https://www.ciprianciceu.com" target="_blank" rel="noreferrer">
                        www.ciprianciceu.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyArea;
