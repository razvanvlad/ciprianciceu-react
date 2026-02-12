import React from "react";
import { useTranslations } from '@context/IntlContext';

const PolicyArea = () => {
  const t = useTranslations('policy.privacy');

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
              </div>

              <div className="policy__item mb-35">
                <h3 className="policy__title">{t('section2Title')}</h3>

                <h4 className="policy__subtitle mt-30 mb-20">{t('section2_1Title')}</h4>
                <p>{t('section2_1Text')}</p>
                <ul>
                  <li>{t('section2_1Item1')}</li>
                  <li>{t('section2_1Item2')}</li>
                  <li>{t('section2_1Item3')}</li>
                </ul>

                <h4 className="policy__subtitle mt-30 mb-20">{t('section2_2Title')}</h4>
                <p>{t('section2_2Text')}</p>
                <ul>
                  <li>{t('section2_2Item1')}</li>
                  <li>{t('section2_2Item2')}</li>
                  <li>{t('section2_2Item3')}</li>
                  <li>{t('section2_2Item4')}</li>
                </ul>
              </div>

              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">{t('contactTitle')}</h3>
                <p>{t('contactText')}</p>

                <ul>
                  <li>
                    {t('contactEmail')}{" "}
                    <span>
                      <a href="mailto:contact@ciprianciceu.ro">contact@ciprianciceu.ro</a>
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

export default PolicyArea;
