import React from "react";
import Link from "next/link";
// internal
import { ArrowRightTwo, AwardFive, Category, Client, Date } from "@svg/index";
import MetaItem from "../list-details/single-meta";

const SliderPortfolioArea = ({ pt = '100', pb = '10' }) => {
  return (
    <>
      <section className={`portfolio__area pt-${pt} pb-${pb}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="portfolio__details-wrapper-2">
                <div className="portfolio__details-content-2 mb-40">
                  <div className="portfolio__details-category">
                    <span>
                      <a href="#">Strategic Growth</a>
                    </span>
                  </div>
                  <h3 className="portfolio__details-title-2" style={{ fontSize: '42px', lineHeight: '1.2', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    FEATURED PROJECTS
                  </h3>
                  <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                    Over the years, Ciprian Ciceu has been involved in multiple international projects, including:
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SliderPortfolioArea;
