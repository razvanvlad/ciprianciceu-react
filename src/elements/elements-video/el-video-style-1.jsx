import React from "react";
import Image from "next/image";
// internal
import about_img from "@assets/img/about/6/about-1.jpg";
import play_icon from "@assets/img/about/6/about-play-icon.png";
import { useVideoModal } from "src/provider/VideoProvider";

const ElVideoStyleOne = ({
  videoId = "IPYr8a3LgWs",
  thumbnail = about_img,
  title = "Video Title",
  date = "",
  description = ""
}) => {
  const { playVideo } = useVideoModal();

  return (
      <section className="about__area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="about__video-wrapper">
                {/* Video Title and Info */}
                {title && (
                  <div className="text-center mb-40">
                    <h3 className="about__video-title" style={{ marginBottom: '10px' }}>{title}</h3>
                    {date && (
                      <p className="about__video-date" style={{ color: '#999', fontSize: '14px', marginBottom: '15px' }}>
                        {date}
                      </p>
                    )}
                    {description && (
                      <p className="about__video-description" style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        color: '#6f6f6f',
                        fontSize: '15px',
                        lineHeight: '1.7',
                        padding: '0 20px'
                      }}>
                        {description}
                      </p>
                    )}
                  </div>
                )}

                {/* Video Thumbnail */}
                <div className="about__video-thumb">
                  <Image
                    src={thumbnail}
                    alt={title || "video thumbnail"}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div className="about__play">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => playVideo(videoId)}
                      className="about__play-btn popup-video tp-pulse-border"
                    >
                      <span className="video-play-bg"></span>
                      <Image src={play_icon} alt="play icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ElVideoStyleOne;
