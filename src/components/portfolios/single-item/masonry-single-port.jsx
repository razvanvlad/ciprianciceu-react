import React from "react";
import { Tooltip } from "react-tooltip";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const MasonrySinglePort = ({ item }) => {
  const { id, img, title, category } = item || {};
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="portfolio__grid-item mb-20"
        data-tooltip-id={id}
        data-tooltip-content=""
      >
        <div className="portfolio__grid-thumb w-img fix tp-img-reveal tp-img-reveal-item">
          <Link href="/portfolio-details-list">
            <Image
              src={img}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </div>
      </motion.div>
      <Tooltip
        id={id}
        style={{ backgroundColor: "#fff", color: "#000" }}
      >
        <div className="portfolio__grid-content portfolio__hover-category">
          <h3 className="portfolio__grid-title">
            <Link href="/portfolio-details">{title}</Link>
          </h3>
          <span>
            <a href="#">{category}</a>
          </span>
        </div>
      </Tooltip>
    </React.Fragment>
  );
};

export default dynamic(() => Promise.resolve(MasonrySinglePort), {
  ssr: false,
});
