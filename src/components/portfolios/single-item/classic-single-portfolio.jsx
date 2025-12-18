import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import dynamic from "next/dynamic";
import Link from "next/link";
// internal
import { Plus, ArrowRightTwo, PlayThree } from "@svg/index";
import { useVideoModal } from "src/provider/VideoProvider";
import { PhotoView } from "react-photo-view";
import PhotoProviderWrapper from "src/provider/PhotoProviderWrapper";

const ClassicSinglePortfolio = ({
  item,
  tooltip_hover = false,
}) => {
  const { id, img, video, video_id, title, category } = item || {};
  const { playVideo } = useVideoModal();

  return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="portfolio__grid-item mb-40 wow fadeInUp"
      >
        
          <div
            className={`portfolio__grid-thumb w-img fix ${
              tooltip_hover ? "tp-img-reveal tp-img-reveal-item" : ""
            }`}
            data-tip
            data-for={tooltip_hover ? id : ""}
          >
            <Link href="/portfolio-details">
              <Image
                src={img}
                alt="img"
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
            <div className={`portfolio__grid-${video ? "video" : "popup"}`}>
              {!video && (
                <PhotoProviderWrapper>
                <PhotoView src={img.src}>
                  <a
                    style={{ cursor: "pointer" }}
                    className="popup-image"
                  >
                    <Plus />
                  </a>
                </PhotoView>
                </PhotoProviderWrapper>
              )}
              {video && (
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => playVideo(video_id)}
                  className="portfolio-play-btn popup-video"
                >
                  <PlayThree />
                </a>
              )}
            </div>
          </div>
        
        {!tooltip_hover && (
          <div className="portfolio__grid-content">
            <h3 className="portfolio__grid-title">
              <Link href="/portfolio-details">{title}</Link>
            </h3>
            <div className="portfolio__grid-bottom">
              <div className="portfolio__grid-category">
                <span>
                  <a href="#">{category}</a>
                </span>
              </div>
              <div className="portfolio__grid-show-project">
                <Link href="/portfolio-details" className="portfolio-link-btn">
                  Show project
                  <span>
                    <ArrowRightTwo />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
        {tooltip_hover && (
          <ReactTooltip id={id} type="light">
            <div className="portfolio__grid-content portfolio__hover-category">
              <h3 className="portfolio__grid-title">
                <Link href="/portfolio-details">{title}</Link>
              </h3>
              <span>
                <a href="#">{category}</a>
              </span>
            </div>
          </ReactTooltip>
        )}
      </motion.div>
  );
};

export default dynamic(() => Promise.resolve(ClassicSinglePortfolio), {
  ssr: false,
});
