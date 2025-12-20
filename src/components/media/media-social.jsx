import React from 'react';
import Image from 'next/image';
import { instagram_items } from '@components/instagram/photography-instagram';

const MediaSocial = () => {
  // Show first 8 items
  const social_items = instagram_items.slice(0, 8);

  return (
    <section className="instagram__grid grey-bg-12 pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper-9 mb-65 text-center">
              <span className="section__title-pre-9">Social Media</span>
              <h3 className="section__title-9">Follow on Instagram</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {social_items.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram__item w-img mb-30">
                <Image
                  src={item.img}
                  alt="instagram"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="instagram__btn">
                  <a
                    href={item.link}
                    className="tp-instagram-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-30">
          <div className="col-xxl-12 text-center">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="tp-btn-5"
            >
              <i className="fa-brands fa-instagram" style={{ marginRight: '10px' }}></i>
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSocial;
