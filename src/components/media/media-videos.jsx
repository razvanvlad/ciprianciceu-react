import React from 'react';
import Image from 'next/image';
import { useVideoModal } from 'src/provider/VideoProvider';
import { video_items } from '@data/media-data';

const MediaVideos = () => {
  const { playVideo } = useVideoModal();

  // Separate videos by layout type
  const horizontalVideos = video_items.filter(v => v.layout === 'horizontal');
  const verticalVideos = video_items.filter(v => v.layout === 'vertical');

  const handleVideoClick = (video) => {
    if (video.video_url) {
      playVideo(video.video_url);
    } else if (video.youtube_id) {
      playVideo(video.youtube_id, 'youtube');
    }
  };

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

        {/* Horizontal Videos */}
        <div className="row">
          {horizontalVideos.map((video) => (
            <div key={video.id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="blog__item-9 white-bg mb-30">
                <div className="blog__thumb-9 w-img">
                  <div className="about__video-thumb" style={{ position: 'relative', cursor: 'pointer' }}>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="about__play">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => handleVideoClick(video)}
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
                      onClick={() => handleVideoClick(video)}
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

        {/* Vertical Videos - 3 in a row */}
        {verticalVideos.length > 0 && (
          <div className="row">
            {verticalVideos.map((video) => (
              <div key={video.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="blog__item-9 white-bg mb-30">
                  <div className="blog__thumb-9 w-img">
                    <div className="about__video-thumb" style={{ position: 'relative', cursor: 'pointer' }}>
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        style={{ width: "100%", height: "auto", aspectRatio: "9/16", objectFit: "cover" }}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="about__play">
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => handleVideoClick(video)}
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
                        onClick={() => handleVideoClick(video)}
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
        )}
      </div>
    </section>
  );
};

export default MediaVideos;
