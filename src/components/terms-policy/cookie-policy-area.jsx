import React from "react";

const CookiePolicyArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">Last updated: January 5, 2026</h4>
                <p>
                  This Cookie Policy explains how www.ciprianciceu.com (the "Website"),
                  operated by Ciprian Gabriel Ciceu ("we", "us", "our"), uses cookies and
                  similar technologies to recognize visitors and improve user experience.
                </p>
                <p>
                  By continuing to browse or use this Website, you agree to the use of
                  cookies in accordance with this Cookie Policy.
                </p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">1. What Are Cookies</h3>
                <p>
                  Cookies are small text files that are stored on your device (computer,
                  tablet, or mobile phone) when you visit a website. They help websites
                  function properly, enhance security, and provide information about how
                  the site is used.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">2. Types of Cookies We Use</h3>

                <h4 className="policy__subtitle mt-30 mb-20">2.1 Essential Cookies</h4>
                <p>
                  These cookies are necessary for the Website to function correctly and
                  cannot be disabled in our systems. They are usually set in response to
                  actions such as navigation or form submissions.
                </p>

                <h4 className="policy__subtitle mt-30 mb-20">2.2 Analytics Cookies</h4>
                <p>
                  These cookies help us understand how visitors interact with the Website
                  by collecting anonymous information such as:
                </p>
                <ul>
                  <li>pages visited</li>
                  <li>time spent on pages</li>
                  <li>browser and device type</li>
                </ul>
                <p>
                  This data is used strictly to improve performance and content quality.
                </p>

                <h4 className="policy__subtitle mt-30 mb-20">2.3 Third-Party Cookies</h4>
                <p>
                  In some cases, the Website may include embedded content or tools from
                  third parties (such as video platforms or analytics services). These
                  third parties may set their own cookies in accordance with their
                  respective privacy policies.
                </p>
                <p>
                  We do not control third-party cookies.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">3. How You Can Control Cookies</h3>
                <p>
                  You can manage or disable cookies at any time through your browser settings.
                  Please note that disabling certain cookies may affect the functionality or
                  performance of the Website.
                </p>
                <p>
                  Instructions for managing cookies are available in your browser's help section.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">4. Legal Basis for Cookie Use (GDPR)</h3>
                <p>
                  Cookies are used based on:
                </p>
                <ul>
                  <li>your consent (where required)</li>
                  <li>legitimate interest for website security, functionality, and analytics</li>
                </ul>
                <p>
                  You may withdraw your consent at any time by adjusting your browser settings.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">5. Data Protection</h3>
                <p>
                  Any information collected through cookies is processed in accordance with
                  our Privacy Policy and applicable data protection laws, including GDPR.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">6. Changes to This Cookie Policy</h3>
                <p>
                  We reserve the right to update this Cookie Policy at any time. Changes
                  will be effective immediately upon publication on this page.
                </p>
              </div>

              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">7. Contact Information</h3>
                <p>
                  If you have any questions about our use of cookies, please contact:
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

export default CookiePolicyArea;
