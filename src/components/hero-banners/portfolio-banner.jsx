import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from '@assets/img/slider/9/slider-shape-1.png';
import shape_2 from '@assets/img/slider/9/slider-shape-2.png';
import main_img from '@assets/img/ciceu/ciceu-decupat.png';
import ShapeLine from "@svg/shape-line";
import TwitterX from "@svg/twitter-x";

const banner_contents = {
  pre_title: "Hi! I am Ciprian Ciceu",
  title: "Entrepreneur & Blockchain",
  highlight_text: "Educator",
  desc: "Building scalable technology platforms, educational ecosystems and international teams across fintech, blockchain and digital innovation.",
}

const { pre_title, title, highlight_text, desc } = banner_contents;

const PortfolioBanner = () => {
  return (
    <>
      <section className="slider__area pt-40 p-relative fix">
        <div className="slider__item-9">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-7 col-lg-6 col-md-7">
                <div className="slider__content-9">
                  <span className="section__title-pre">{pre_title}</span>
                  <h3 className="section__title mb-4">
                    {title}{" "}
                    <span className="section__title-highlight">
                      {highlight_text}
                      <ShapeLine />
                    </span>
                  </h3>
                  <p>{desc}</p>

                  <div className="slider__btn-9 mb-85">
                    <Link href="/contact" className="tp-btn-5 tp-link-btn-3">
                      Book a call
                      <span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>

                  <div className="slider__social-9 d-flex flex-wrap align-items-center">
                    <span>Check out my:</span>
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/ciprian_ciceu22?igsh=bXF2OW1sOW9laWI1&utm_source=qr" target='_blank' rel="noreferrer">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tiktok.com/@ciprian.ciceu22?_r=1&_t=ZN-92UEGvw67du" target='_blank' rel="noreferrer">
                          <i className="fa-brands fa-tiktok"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/share/1FZ8CDueWj/?mibextid=wwXIfr" target='_blank' rel="noreferrer">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/ciprian-ciceu-30b72045?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank' rel="noreferrer">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/ciceu_ciprian?s=11&t=EBHN-d7VEHH1sp-EP0D8rQ" target='_blank' rel="noreferrer">
                          <TwitterX />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-5 order-first order-md-last">
                <div className="slider__thumb-9 p-relative scene">
                  <div className="slider__shape">
                    <div className="slider__shape-20">
                      <Image
                        className="layer"
                        src={shape_1}
                        alt="shape"
                      />
                    </div>
                    <div className="slider__shape-21">
                      <Image
                        className="layer"
                        src={shape_2}
                        alt="shape"
                      />
                    </div>
                  </div>
                  <Image
                    className="slider__thumb-9-main"
                    src={main_img}
                    alt="main image"
                    priority
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
