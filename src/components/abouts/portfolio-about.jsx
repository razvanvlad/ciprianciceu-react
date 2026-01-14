import React from "react";
import { useTranslations } from '@context/IntlContext';

const PortfolioAbout = () => {
  const t = useTranslations('about');
  const tCommon = useTranslations('ui');

  return (
    <>
      <section className="about__area about__space-145">
        <div
          className="about__inner-9 black-bg wow fadeInUp"
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-10 col-xl-10 col-lg-11 col-md-10">
                <div className="about__wrapper-9">
                  <span className="about-subtitle">{t('subtitle')}</span>
                  <h3 className="about-title">
                    {t('title.part1')}<span>{t('title.highlight1')}</span>{t('title.part2')}<span>{t('title.highlight2')}</span>{t('title.part3')}<span>{t('title.highlight3')}</span>{t('title.part4')}
                  </h3>

                  <p>
                    {t('description')}
                  </p>

                  <div className="about__btn-9">
                    <a
                      href="/downloads/CV-Ciprian-Ciceu.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="tp-btn-5 tp-btn-5-white"
                    >
                      {tCommon('downloadCV')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAbout;
