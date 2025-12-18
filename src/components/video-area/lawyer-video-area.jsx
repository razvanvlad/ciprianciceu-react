// external
import Image from "next/image";
import Link from "next/link";
import React from "react";
// internal
import play_icon from "@assets/img/video/video-icon-play.png";
import { useVideoModal } from "src/provider/VideoProvider";
import bg from "@assets/img/video/video-bg.jpg";

const LawyerVideoArea = ({ element_style = false }) => {
   const { playVideo } = useVideoModal();

  return (
   <section
        className={`video__area pt-145 pb-125 include-bg ${element_style?'mb-120':''}`}
        data-overlay="dark"
        data-overlay-opacity="6"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-10">
              <div className="video__content text-center">
                <div
                  className="video__play"
                  onClick={() => playVideo("go7QYaQR494")}
                >
                  <a
                    style={{ cursor: "pointer" }}
                    className="video__play-btn tp-pulse-border popup-video"
                  >
                    <span className="video-play-bg"></span>
                    <Image src={play_icon} alt="" />
                  </a>
                </div>
                <h3 className="video__title">
                  The area where we practice Our lawyer
                </h3>
                <div className="video__btn">
                  <Link href="/contact" className="tp-btn-transparent">
                    Ask for Constitution{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default LawyerVideoArea;
