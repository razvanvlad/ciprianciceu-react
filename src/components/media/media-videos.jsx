import React from 'react';
import Image from 'next/image';
import { useVideoModal } from 'src/provider/VideoProvider';
import { video_items } from '@data/media-data';

const MediaVideos = () => {
  const { playVideo } = useVideoModal();

  return (
    <section className="blog__area grey-bg-12 pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper-9 mb-65 text-center">
              <span className="section__title-pre-9">Videos</span>
              <h3 className="section__title-9">Featured Videos</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {video_items.map((video) => (
            <div key={video.id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="blog__item-9 white-bg mb-30">
                <div className="blog__thumb-9 w-img">
                  <div className="about__video-thumb" style={{ position: 'relative', cursor: 'pointer' }}>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className="about__play">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => playVideo(video.youtube_id)}
                        className="about__play-btn popup-video tp-pulse-border"
                      >
                        <span className="video-play-bg"></span>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog__content-9">
                  <h3 className="blog__title-9">
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => playVideo(video.youtube_id)}
                    >
                      {video.title}
                    </a>
                  </h3>
                  <p>{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaVideos;
