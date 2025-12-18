import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

// internal
import shape_1 from "@assets/img/slider/5/shape/slider-shape-1.png";
import shape_2 from "@assets/img/slider/5/shape/slider-shape-2.png";
import shape_3 from "@assets/img/slider/5/shape/slider-shape-3.png";
import shape_4 from "@assets/img/slider/5/shape/slider-shape-4.png";
import img_1 from "@assets/img/slider/5/slider-img-1.png";
import img_2 from "@assets/img/slider/5/slider-img-2.png";

// contents
const contents = {
  pre_title: "Digital Experience",
  title: "Digital Agency with Excellence Services.",
  sub_text:
    "The 3 golden rules professional graphic designer don’t want you to know about.",
  hero_img_1: img_1,
  hero_img_2: img_2,
};

const { pre_title, title, sub_text, hero_img_1, hero_img_2 } = contents;

const HomeAgencyBanner = () => {
  // Motion values for X and Y
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform values for parallax movement
  const x1 = useTransform(mouseX, [0, 1920], [-30, 30]);
  const y1 = useTransform(mouseY, [0, 1080], [-30, 30]);

  const x2 = useTransform(mouseX, [0, 1920], [-50, 50]);
  const y2 = useTransform(mouseY, [0, 1080], [-50, 50]);

  return (
    <section
      className="slider__area box-plr-5-245 slider__height-5 d-flex align-items-center p-relative z-index-1 fix"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
    >
      <div className="slider__shape">
        <Image className="slider__shape-5" src={shape_1} alt="shape" />
        <Image className="slider__shape-6" src={shape_2} alt="shape" />
        <Image className="slider__shape-7" src={shape_3} alt="shape" />
        <Image className="slider__shape-8" src={shape_4} alt="shape" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="slider__content-5">
              <span className="slider__title-pre-5">{pre_title}</span>
              <h3 className="slider__title-5">{title}</h3>
              <p>{sub_text}</p>
              <Link href="/about" className="tp-btn-blue-sm">
                More About Us
              </Link>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="slider__thumb-5 text-end">
              <motion.div className="slider-thumb-5 one" style={{ x: x1, y: y1 }}>
                <Image
                  className="slider__thumb-5-1 layer"
                  src={hero_img_1}
                  alt="img"
                  style={{ width: "auto", height: "auto" }}
                />
              </motion.div>
              <motion.div className="slider-thumb-5 two" style={{ x: x2, y: y2 }}>
                <Image
                  className="slider__thumb-5-2 layer"
                  src={hero_img_2}
                  alt="img"
                  priority
                  style={{ width: "auto", height: "auto" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAgencyBanner;
