import React from 'react';
import Link from 'next/link';
import { podcast_items } from '@data/media-data';

const MediaPodcasts = () => {
  return (
    <section className="blog__area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper-9 mb-65 text-center">
              <span className="section__title-pre-9">Audio</span>
              <h3 className="section__title-9">Podcast Appearances</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {podcast_items.map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
              <div className="blog__item-9 white-bg mb-30 p-4">
                <div className="blog__meta-9 mb-15">
                  <span className="blog__meta-tag">
                    <i className="fa-solid fa-podcast"></i> {item.show}
                  </span>
                  <span>
                    <i className="fa-light fa-calendar"></i> {item.date}
                  </span>
                </div>
                <div className="blog__content-9">
                  <h3 className="blog__title-9">
                    <Link href={item.link} target="_blank">
                      {item.episode}
                    </Link>
                  </h3>
                  <p className="mb-20">{item.description}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <Link href={item.link} className="tp-btn-5" target="_blank">
                      Listen Now
                    </Link>
                    <span className="text-muted">
                      <i className={`fa-brands fa-${item.platform.toLowerCase().replace(' ', '-')}`}></i>
                      {' '}{item.platform}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPodcasts;
