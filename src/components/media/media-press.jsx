import React from 'react';
import Link from 'next/link';
import { press_items } from '@data/media-data';

const MediaPress = () => {
  return (
    <section className="blog__area pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper-9 mb-65 text-center">
              <span className="section__title-pre-9">In the Press</span>
              <h3 className="section__title-9">Media Coverage & Articles</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {press_items.map((item) => (
            <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="blog__item-9 white-bg mb-30 p-4">
                <div className="blog__meta-9 mb-15">
                  <span className="blog__meta-tag">
                    <i className="fa-light fa-newspaper"></i> {item.outlet}
                  </span>
                  <span>
                    <i className="fa-light fa-calendar"></i> {item.date}
                  </span>
                </div>
                <div className="blog__content-9">
                  <h3 className="blog__title-9">
                    <Link href={item.link} target="_blank">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mb-20">{item.excerpt}</p>
                  <Link href={item.link} className="tp-btn-5" target="_blank">
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPress;
