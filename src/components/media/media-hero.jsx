import React from 'react';

const MediaHero = () => {
  return (
    <section
      className="breadcrumb__area pt-200 pb-150 breadcrumb__style-2"
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content text-center">
              <h3 className="breadcrumb__title text-white">Media Center</h3>
              <p className="text-white" style={{ fontSize: '18px', marginTop: '15px' }}>
                Videos, Press, Podcasts, and Social Media
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaHero;
