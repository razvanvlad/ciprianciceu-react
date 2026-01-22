import React from "react";
import Image from "next/image";
// internal
import location_icon_1 from "@assets/img/contact/contact-location-1.png";
import location_icon_2 from "@assets/img/contact/contact-location-2.png";
import location_icon_3 from "@assets/img/contact/contact-location-3.png";
import { useTranslations } from '@context/IntlContext';

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
            {company && <p>{company}</p>}
            <p>
              {location}
            </p>
            <p>
              <a href={`tel:${tel.replace(/\//g, '')}`}>{tel}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ClassicLocationArea = ({ element_style = false }) => {
  const t = useTranslations('contact.locations');

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
            title={t('romania.title')}
            subtitle={t('romania.subtitle')}
            icon={location_icon_1}
            location={t('romania.location')}
            tel="+40746847493"
          />
          <SingleLocationItem
            title={t('dubai.title')}
            subtitle={t('dubai.subtitle')}
            icon={location_icon_2}
            company={t('dubai.company')}
            location={t('dubai.location')}
            tel="+971/502809015"
          />
          <SingleLocationItem
            title={t('belgium.title')}
            subtitle={t('belgium.subtitle')}
            icon={location_icon_3}
            location={t('belgium.location')}
            tel="+40746847493"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassicLocationArea;
