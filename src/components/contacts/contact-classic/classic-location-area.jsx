import React from "react";
import Image from "next/image";
// internal
import location_icon_1 from "@assets/img/contact/contact-location-1.png";
import location_icon_2 from "@assets/img/contact/contact-location-2.png";
import location_icon_3 from "@assets/img/contact/contact-location-3.png";

// single location item
function SingleLocationItem({ title, subtitle, icon, company, location, tel }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="contact__location-box text-center white-bg mb-30">
        <div className="contact__location-box-icon">
          <Image src={icon} alt="icon image" />
        </div>
        <div className="contact__location-box-content">
          <h3 className="contact__location-box-title">{title}</h3>
          <p className="contact__location-box-title">{subtitle}</p>

          <div className="contact__location-box-info">
            <p>{company}</p>
            <p>
              {location}
            </p>
            <p>
              <a href="tel:+40746847493">{tel}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ClassicLocationArea = ({ element_style = false }) => {
  return (
    <section
      className={`contact__loacation-box-area ${element_style ? "pt-110" : "pt-120"
        } pb-90`}
    >
      <div className="container">
        {element_style && (
          <div className="row">
            <div className="col-xxl-12">
              <div className="tp-section-wrapper-3 mb-60 text-center">
                <span className="tp-section-subtitle-3">
                  Minimal &amp; Clean Design
                </span>
                <h3 className="tp-section-title-3">Contact Icon Box 2</h3>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <SingleLocationItem
            title="ROMÂNIA BUCUREȘTI "
            subtitle="TRADING ACADEMY"
            icon={location_icon_1}
            location="Bulevardul Pipera nr 31, București"
            tel="+40746847493"
          />
          <SingleLocationItem
            title="DUBAI UAE"
            subtitle="COMPANY OFFICE"
            icon={location_icon_2}
            company="MainetX Prop Firm Service FZCO "
            location="Silicon Oasis Digital Park A1 (UNITED ARAB EMIRATES)"
            tel="+971/502809015"
          />
          <SingleLocationItem
            title="BELGIUM BRUXELLES"
            subtitle="TRADING ACADEMY"
            icon={location_icon_3}
            location="Avenue Louise nr 173, 1050 Bruxelles"
            tel="+40746847493"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassicLocationArea;
