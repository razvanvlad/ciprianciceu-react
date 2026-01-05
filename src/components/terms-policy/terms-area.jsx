import React from "react";

const TermsArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">Last updated: January 5, 2026</h4>
                <p>
                  These Terms and Conditions ("Terms") govern the use of the website
                  www.ciprianciceu.com (the "Website"), operated by Ciprian Gabriel
                  Ciceu ("we", "us", "our").
                </p>
                <p>
                  By accessing or using this Website, you agree to be bound by these
                  Terms. If you do not agree with any part of these Terms, please
                  discontinue use of the Website.
                </p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">1. Purpose of the Website</h3>
                <p>
                  This Website is a personal and professional presentation platform
                  designed to provide information about:
                </p>
                <ul>
                  <li>the background, experience, and projects of Ciprian Gabriel Ciceu</li>
                  <li>public media appearances, interviews, and publications</li>
                  <li>
                    educational content related to technology, blockchain,
                    entrepreneurship, and innovation
                  </li>
                </ul>
                <p>The Website does not constitute financial, legal, or investment advice.</p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">2. No Investment Solicitation</h3>
                <p>Nothing on this Website shall be interpreted as:</p>
                <ul>
                  <li>an offer to invest</li>
                  <li>a solicitation of funds</li>
                  <li>a promise of financial returns</li>
                </ul>
                <p>
                  Any business activity, investment opportunity, or platform referenced
                  on this Website is governed by its own independent terms, legal
                  entities, and agreements.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">3. Accuracy of Information</h3>
                <p>
                  We strive to ensure that all information presented on this Website is
                  accurate and up to date. However, we make no warranties or guarantees
                  regarding completeness, accuracy, or reliability.
                </p>
                <p>
                  Content may be updated, modified, or removed at any time without prior
                  notice.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">4. Intellectual Property</h3>
                <p>
                  All content on this Website, including but not limited to:
                </p>
                <ul>
                  <li>text</li>
                  <li>images</li>
                  <li>logos</li>
                  <li>graphics</li>
                  <li>videos</li>
                </ul>
                <p>
                  is the intellectual property of Ciprian Gabriel Ciceu, unless
                  otherwise stated.
                </p>
                <p>
                  Unauthorized reproduction, distribution, or use of any content is
                  strictly prohibited.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">5. Third-Party Links</h3>
                <p>
                  This Website may contain links to third-party websites for reference
                  or informational purposes.
                </p>
                <p>
                  We are not responsible for the content, policies, or practices of any
                  third-party websites.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">6. Limitation of Liability</h3>
                <p>
                  To the maximum extent permitted by law, Ciprian Gabriel Ciceu shall
                  not be liable for any direct, indirect, incidental, or consequential
                  damages arising from the use of this Website.
                </p>
                <p>Use of the Website is entirely at your own risk.</p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">7. Privacy</h3>
                <p>
                  Use of this Website is also governed by our Privacy Policy, which
                  explains how personal data is handled in accordance with applicable
                  data protection regulations (including GDPR where applicable).
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">8. Changes to These Terms</h3>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will
                  be effective immediately upon publication on this page.
                </p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">9. Governing Law</h3>
                <p>
                  These Terms shall be governed and interpreted in accordance with the
                  laws of the European Union and applicable international regulations,
                  without regard to conflict of law principles.
                </p>
              </div>

              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">10. Contact</h3>
                <p>For questions regarding these Terms, please contact:</p>

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

export default TermsArea;
