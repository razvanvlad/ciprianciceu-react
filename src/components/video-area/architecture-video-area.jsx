import React from "react";
import Image from "next/image";
// internal
import bg from "@assets/img/video/8/video-bg-1.jpg";
import play_icon from "@assets/img/video/video-icon-play.png";
import HighlightShapeSeven from "@svg/highlight-shape-7";
import { useVideoModal } from "src/provider/VideoProvider";

const ArchitectureVideoArea = ({ element_style = false }) => {
  const { playVideo } = useVideoModal();
  
  return (
    <section
      className={`video__area video__overlay ${
        element_style ? "mb-120" : ""
      } box-plr-145 black-bg-13`}
    >
      <div className="container-fluid">
        <div
          className="video__inner-8 pt-185 pb-155 include-bg wow fadeInUp"
          style={{ backgroundImage: `url(${bg.src})` }}
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8 col-lg-10">
              <div className="video__content-8 text-center">
                <div className="video__play-8 mb-20">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => playVideo("go7QYaQR494")}
                    className="popup-video video__play-btn video__play-btn-8 tp-pulse-border"
                  >
                    <span className="video-play-bg"></span>
                    <Image src={play_icon} alt="play icon" />
                  </a>
                </div>
                <div className="section__title-wrapper-8 text-center">
                  <h3 className="section__title-8">
                    We are the leader in the{" "}
                    <span className="section__title-highlight-8">
                      architectural
                      <HighlightShapeSeven />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureVideoArea;
