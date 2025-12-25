import React from "react";

// data
const skill_data = [
  {
    title: "Blockchain Architecture & Crypto Ecosystems",
    level: "Expert Level",
    description: "Design of scalable blockchain systems, token economics, smart contracts, secure payment flows, and real-world crypto adoption."
  },
  {
    title: "AI-Powered Trading & Automation",
    level: "Advanced",
    description: "Development of automated trading robots, hedge strategies, risk optimization models, and AI-driven execution systems."
  },
  {
    title: "FinTech Product Strategy & UX Vision",
    level: "Advanced",
    description: "End-to-end design of trading platforms, prop-firm infrastructures, user dashboards, and financial UX at scale."
  },
  {
    title: "Global Business Leadership & Scaling",
    level: "Expert Level",
    description: "International expansion, team leadership across multiple countries, strategic partnerships, and long-term vision execution."
  },
  {
    title: "Personal Branding, Growth & Reputation Management",
    level: "Advanced",
    description: "High-authority personal branding, SEO reputation strategy, media positioning, and digital influence building."
  },
];

// career_data
const career_data = [
  {
    title: "Founder & CEO",
    designation: "Mainet Prop Firm Services – FZCO · Dubai, UAE",
    year: "2020 – Present",
    description: "Leading a global fintech and AI-driven trading ecosystem operating across Europe, the Middle East, and Africa. Architect of the Mainet X platform, combining automated trading, prop-firm systems, and advanced fintech infrastructure."
  },
  {
    title: "Founder & Strategic Visionary",
    designation: "BeTrader Academy · Europe",
    year: "2017 – Present",
    description: "International financial education platform focused on trading, blockchain, and applied financial intelligence. Creator of proprietary trading methodologies and scalable education systems."
  },
  {
    title: "Blockchain Technology Professor",
    designation: "Romanian-American University · Bucharest",
    year: "2019 – 2022",
    description: "Delivered academic and practical courses on blockchain technology, crypto economics, and digital finance applications."
  },
  {
    title: "Founder & Product Architect",
    designation: "Betra Coin / BetraPay",
    year: "2017 – Present",
    description: "Developed Romania's first privately funded cryptocurrency ecosystem, focusing on utility, payments, and adoption strategy."
  },
  {
    title: "International FinTech & Blockchain Consultant",
    designation: "Independent",
    year: "2014 – 2019",
    description: "Advised startups and private investors on fintech products, trading automation, crypto systems, and scaling strategies."
  },
];

const PortfolioSkills = () => {
  return (
    <>
      <section className="skill__area pt-95 grey-bg-12 pb-125">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5">
              <div className="skill__wrapper-9">
                <div className="section__title-wrapper-9 mb-55">
                  <span className="section__title-pre-9">Elite Capabilities</span>
                  <h3 className="section__title-9">
                    Skills & <br />
                    Experience
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
                <h4 className="career__title">Experience</h4>
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
                    "I build scalable financial ecosystems where technology, automation, and vision converge."
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
