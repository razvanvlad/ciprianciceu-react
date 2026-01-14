import React from "react";
import Image from "next/image";
import Link from "next/link";
import main_img from '@assets/img/ciceu/ciceu-decupat.webp';
import ShapeLine from "@svg/shape-line";
import { social_links, SocialIcon } from "@components/social";
import { useTranslations } from '@context/IntlContext';

const PortfolioBanner = () => {
  const t = useTranslations('banner');
  return (
    <>
      <section className="slider__area pt-40 p-relative fix">
        <div className="slider__item-9">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-7 col-lg-6 col-md-7">
                <div className="slider__content-9">
                  <span className="section__title-pre">{t('preTitle')}</span>
                  <h1 className="section__title mb-4">
                    {t('title')}{" "}
                    <span className="section__title-highlight">
                      {t('highlight')}
                      <ShapeLine />
                    </span>
                  </h1>
                  <p>{t('description')}</p>

                  <div className="slider__btn-9 mb-85">
                    <Link href="/contact" className="tp-btn-5 tp-link-btn-3">
                      {t('cta')}
                      <span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>

                  <div className="slider__social-9 d-flex flex-wrap align-items-center">
                    <span>{t('checkOut')}</span>
                    <ul>
                      {social_links.map((link, i) => (
                        <li key={i}>
                          <a href={link.link} target={link.target} rel="noreferrer">
                            <SocialIcon icon={link.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-5 order-first order-md-last">
                <div className="slider__thumb-9 p-relative scene">

                  <Image
                    className="slider__thumb-9-main"
                    src={main_img}
                    alt="main image"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioBanner;
