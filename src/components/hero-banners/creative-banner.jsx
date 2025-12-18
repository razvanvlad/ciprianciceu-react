import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";

// internal
import shape_1 from '@assets/img/slider/6/shape/slider-shape-1.png';
import shape_2 from '@assets/img/slider/6/shape/slider-shape-2.png';
import shape_3 from '@assets/img/slider/6/shape/slider-shape-3.png';
import shape_4 from '@assets/img/slider/6/shape/slider-shape-4.png';
import shape_5 from '@assets/img/slider/6/shape/slider-shape-5.png';
import shape_6 from '@assets/img/slider/6/shape/slider-shape-6.png';
import shape_7 from '@assets/img/slider/6/shape/slider-shape-7.png';
import shape_8 from '@assets/img/slider/6/shape/slider-shape-8.png';
import shape_9 from '@assets/img/slider/6/shape/slider-shape-9.png';
import shape_10 from '@assets/img/slider/6/shape/slider-shape-10.png';
import user_1 from '@assets/img/slider/6/user/slider-user-1.jpg';
import user_2 from '@assets/img/slider/6/user/slider-user-2.jpg';
import user_3 from '@assets/img/slider/6/user/slider-user-3.jpg';
import thumb_1 from '@assets/img/slider/6/slider-1.jpg';
import thumb_2 from '@assets/img/slider/6/slider-2.jpg';
import thumb_3 from '@assets/img/slider/6/slider-3.jpg';

const CreativeBanner = () => {
  // Motion values for mouse X/Y
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform values for parallax layers
  const thumb1X = useTransform(mouseX, [0, 1920], [-20, 20]);
  const thumb1Y = useTransform(mouseY, [0, 1080], [-20, 20]);

  const thumb2X = useTransform(mouseX, [0, 1920], [-40, 40]);
  const thumb2Y = useTransform(mouseY, [0, 1080], [-40, 40]);

  const thumb3X = useTransform(mouseX, [0, 1920], [-60, 60]);
  const thumb3Y = useTransform(mouseY, [0, 1080], [-60, 60]);

  return (
    <section
      className="slider__area slider__height-6 p-relative box-plr-6-245 d-flex align-items-center fix"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
    >
      <div className="slider__shape">
        {[shape_1, shape_2, shape_3, shape_4, shape_5, shape_6, shape_7, shape_8, shape_9, shape_10].map((shape, idx) => (
          <Image
            key={idx}
            className={`slider__shape-${idx + 9}`}
            src={shape}
            alt="shape"
            priority={idx === 9}
          />
        ))}
      </div>

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="slider__content-6">
              <span className="slider__title-pre-6">WELCOME TO STARTUP.</span>
              <h3 className="slider__title-6">We Build Good Startups.</h3>
              <p>Elementum ipsum donec usodales porttitor mauris augue fermentum sagittis elementum.</p>

              <div className="slider__btn-6">
                <Link href="/contact" className="tp-btn-border-5 tp-link-btn-3">
                  Get Started
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div>

              <div className="slider__user">
                <ul>
                  {[user_1, user_2, user_3].map((user, idx) => (
                    <li key={idx}>
                      <a href="#">
                        <Image src={user} alt="user" />
                      </a>
                    </li>
                  ))}
                </ul>
                <p>Connect <br />More People</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
            <div className="slider__thumb-wrapper-6 mb-10 pl-40 pr-30 scene">

              <motion.div className="slider__thumb-6 pl-20 one" style={{ x: thumb1X, y: thumb1Y }}>
                <Image className="layer" src={thumb_1} alt="thumb image" />
              </motion.div>

              <motion.div className="slider__thumb-6 two" style={{ x: thumb2X, y: thumb2Y }}>
                <Image className="layer" src={thumb_2} alt="thumb image" />
              </motion.div>

              <motion.div className="slider__thumb-6 three" style={{ x: thumb3X, y: thumb3Y }}>
                <Image className="layer" src={thumb_3} alt="thumb image" />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeBanner;
