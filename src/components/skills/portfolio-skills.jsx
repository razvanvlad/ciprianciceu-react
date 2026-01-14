import React from "react";
import { useTranslations } from '@context/IntlContext';

const PortfolioSkills = () => {
  const tSkills = useTranslations('skills');
  const tExperience = useTranslations('experience');

  const skill_data = tSkills('items');
  const career_data = tExperience('items');

  return (
    <>
      <section className="skill__area pt-95 grey-bg-12 pb-125">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5">
              <div className="skill__wrapper-9">
                <div className="section__title-wrapper-9 mb-55">
                  <span className="section__title-pre-9">{tSkills('preTitle')}</span>
                  <h3 className="section__title-9">
                    {tSkills('title').split(' & ')[0]} & <br />
                    {tSkills('title').split(' & ')[1]}
                  </h3>
                </div>
                <div className="skill__item-wrapper-9">
                  {skill_data.map((skill, i) => (
                    <div key={i} className="skill__item-9 mb-30">
                      <div className="skill__content-9">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h4 className="mb-0">{skill.title}</h4>
                          <span className="badge bg-primary text-white px-3 py-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                            {skill.level}
                          </span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div className="career__wrapper career__style-2 pl-60">
                <h4 className="career__title">{tExperience('title')}</h4>
                {career_data.map((item, i) => (
                  <div
                    key={i}
                    className="career__item transition-3 white-bg mb-30 wow fadeInUp"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                    style={{ padding: '30px' }}
                  >
                    <div className="career__info-content">
                      <h3 className="career__info-title mb-2">{item.title}</h3>
                      <span className="career__info-designation d-block mb-2" style={{ fontWeight: '600', color: '#5956e9' }}>
                        {item.designation}
                      </span>
                      <div className="career__year-info mb-3">
                        <p style={{ fontSize: '14px', color: '#999', margin: 0 }}>{item.year}</p>
                      </div>
                      <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="mt-50 text-center" style={{ borderTop: '2px solid #e0e0e0', paddingTop: '30px' }}>
                  <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#333', fontWeight: '500', lineHeight: '1.6' }}>
                    "{tExperience('quote')}"
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

export default PortfolioSkills;
