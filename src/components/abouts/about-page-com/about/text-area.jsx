import React from "react";
import { useTranslations } from '@context/IntlContext';

const TextArea = () => {
  const t = useTranslations('about.introduction');

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
                {t('title')}
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
                {t('paragraph1')}
              </p>
              <p>
                {t('paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextArea;
