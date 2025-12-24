import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from 'next/link';
// internal
import img_1 from "@assets/img/portfolio/details/mainetx-project.png";
import img_2 from "@assets/img/portfolio/details/betrader-courses.png";
import img_3 from "@assets/img/portfolio/details/blockchain-project.png";
import { ArrowRightTwo, AwardFive, Category, Client, Date } from "@svg/index";
import MetaItem from "../list-details/single-meta";

// data
const project_data = [
  {
    img: img_1,
    title: "Mainet X",
    description: "A fintech and technology ecosystem focused on automation, digital finance and scalable infrastructure.",
    founder: "Ciprian Ciceu",
    status: "Active",
    sector: "Technology",
    launched: "2022"
  },
  {
    img: img_2,
    title: "BeTrader Academy",
    description: "An educational initiative dedicated to financial literacy, technology training and applied trading education.",
    founder: "Ciprian Ciceu",
    status: "Active",
    sector: "Education",
    launched: "2021"
  },
  {
    img: img_3,
    title: "Blockchain & Automation Projects",
    description: "Independent and collaborative initiatives focused on blockchain integration, automation and digital transformation.",
    founder: "Ciprian Ciceu",
    status: "Active",
    sector: "Innovation",
    launched: "2023"
  }
];

// slider setting
const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  rtl: true,
};

//ImageStyle
const ImageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "15px",
};

const SliderItems = ({ padd = '120' }) => {
  const sliderRef = useRef();
  return (
    <section className={`portfolio__area fix pb-${padd}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10">
            <div className="portfolio__details-slider-2 p-relative mb-50">
              <Slider
                {...settings}
                ref={sliderRef}
                className="portfolio__details-slider-active-2"
              >
                {project_data.map((item, i) => (
                  <div
                    key={i}
                    className="portfolio__details-slider-item-2 w-img p-relative"
                  >
                    <div className="portfolio__slide-content mb-30 text-center">
                      <h3 style={{ fontSize: '32px', marginBottom: '10px', color: 'var(--tp-common-black)' }}>{item.title}</h3>
                      <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto', color: '#666' }}>{item.description}</p>
                    </div>
                    <div style={{ padding: '0 20px' }}>
                      <Image src={item.img} alt={item.title} style={ImageStyle} />
                    </div>
                    <div className="portfolio__details-meta portfolio__details-meta-slider d-flex justify-content-center flex-wrap mt-40" style={{ gap: '40px' }}>
                      <MetaItem
                        icon={<Client />}
                        title="Founder:"
                        subtitle={item.founder}
                      />
                      <MetaItem
                        icon={<AwardFive />}
                        title="Status:"
                        subtitle={item.status}
                      />
                      <MetaItem
                        icon={<Category />}
                        title="Sector:"
                        subtitle={item.sector}
                      />
                      <MetaItem
                        icon={<Date />}
                        title="Launched:"
                        subtitle={item.launched}
                      />
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="portfolio__details-arrow portfolio-details-slider-arrow-2 d-none d-md-block">
                <button
                  onClick={() => sliderRef.current?.slickPrev()}
                  type="button"
                  className="portfolio-details-2-button-prev slick-prev slick-arrow"
                >
                  <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button
                  onClick={() => sliderRef.current?.slickNext()}
                  type="button"
                  className="portfolio-details-2-button-next slick-next slick-arrow"
                >
                  <i className="fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="portfolio__details-concluding-content text-center mt-60">
              <p style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '40px', color: 'var(--tp-common-black)' }}>
                Each project reflects a long-term vision centered on innovation, education and sustainable growth.
              </p>
              <div className="portfolio__details-btn">
                <Link href="/portfolio" className="tp-btn-border">
                  View Projects
                  <span>
                    <ArrowRightTwo />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderItems;
