import React from "react";
import { useTranslations } from '@context/IntlContext';

const TermsArea = () => {
  const t = useTranslations('policy.terms');

  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">{t('lastUpdated')}</h4>
                <p>{t('intro1')}</p>
                <p>{t('intro2')}</p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">{t('section1Title')}</h3>
                <p>{t('section1Text')}</p>
                <ul>
                  <li>{t('section1Item1')}</li>
                  <li>{t('section1Item2')}</li>
                  <li>{t('section1Item3')}</li>
                </ul>
                <p>{t('section1Note')}</p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">{t('section2Title')}</h3>
                <p>{t('section2Text')}</p>
                <ul>
                  <li>{t('section2Item1')}</li>
                  <li>{t('section2Item2')}</li>
                  <li>{t('section2Item3')}</li>
                </ul>
                <p>{t('section2Note')}</p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">{t('section3Title')}</h3>
                <p>{t('section3Text1')}</p>
                <p>{t('section3Text2')}</p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">{t('section4Title')}</h3>
                <p>{t('section4Text1')}</p>
                <ul>
                  <li>{t('section4Item1')}</li>
                  <li>{t('section4Item2')}</li>
                  <li>{t('section4Item3')}</li>
                  <li>{t('section4Item4')}</li>
                  <li>{t('section4Item5')}</li>
                </ul>
                <p>{t('section4Text2')}</p>
                <p>{t('section4Text3')}</p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">{t('section5Title')}</h3>
                <p>{t('section5Text1')}</p>
                <p>{t('section5Text2')}</p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">{t('section6Title')}</h3>
                <p>{t('section6Text1')}</p>
                <p>{t('section6Text2')}</p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">{t('section7Title')}</h3>
                <p>{t('section7Text')}</p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">{t('section8Title')}</h3>
                <p>{t('section8Text')}</p>
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">{t('section9Title')}</h3>
                <p>{t('section9Text')}</p>
              </div>

              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">{t('contactTitle')}</h3>
                <p>{t('contactText')}</p>

                <ul>
                  <li>
                    {t('contactEmail')}{" "}
                    <span>
                      <a href="mailto:contact@ciprianciceu.com">contact@ciprianciceu.com</a>
                    </span>
                  </li>
                  <li>
                    {t('contactWebsite')}{" "}
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
