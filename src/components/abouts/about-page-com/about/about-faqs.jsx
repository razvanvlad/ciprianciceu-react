import React from "react";
// internal
import SingleFaq from "@components/faqs/single-faq";
import { PlayThree } from "@svg/index";
import { useVideoModal } from "src/provider/VideoProvider";

// YouTube thumbnail URL for video 4XQLNYJc2xQ
const faq_bg = "https://img.youtube.com/vi/4XQLNYJc2xQ/maxresdefault.jpg";

const faq_items = [
  {
    id: "about-one",
    title: "Blockchain and Digital Innovation",
    show: true,
    desc: (
      <div>
        <p>Blockchain technology represents a central pillar of Ciprian's professional activity. As an early advocate for blockchain education and practical adoption, he has been involved in projects that explore how decentralized technologies can enhance transparency, security and operational efficiency.</p>
        <div style={{marginTop: '10px'}}>His work in this field includes:</div>
        <ul style={{marginLeft: '20px', marginTop: '8px', marginBottom: '8px'}}>
          <li>Blockchain education and training initiatives</li>
          <li>Research and applied use of distributed ledger technologies</li>
          <li>Exploration of digital asset infrastructures</li>
          <li>Advisory roles related to blockchain integration</li>
        </ul>
        <p style={{marginTop: '10px'}}>Ciprian approaches blockchain not as a speculative trend, but as a foundational technology with long-term implications for finance, governance and digital systems.</p>
      </div>
    ),
    parent: "faqaccordion",
  },
  {
    id: "about-two",
    title: "Education and Knowledge Sharing",
    desc: (
      <div>
        <p>Education is a core component of Ciprian Ciceu's mission. He strongly believes that sustainable innovation can only be achieved through knowledge, training and responsible use of technology.</p>
        <div style={{marginTop: '10px'}}>He has contributed to the development of educational programs and academies focused on:</div>
        <ul style={{marginLeft: '20px', marginTop: '8px', marginBottom: '8px'}}>
          <li>Financial literacy</li>
          <li>Technology and blockchain fundamentals</li>
          <li>Practical trading education</li>
          <li>Strategic thinking and risk awareness</li>
        </ul>
        <p style={{marginTop: '10px'}}>Through these initiatives, Ciprian has helped individuals and communities better understand complex digital concepts and apply them in structured, informed ways.</p>
      </div>
    ),
    parent: "faqaccordion",
  },
  {
    id: "about-three",
    title: "Entrepreneurship and Leadership",
    desc: (
      <div>
        <p>As an entrepreneur, Ciprian has founded and supported multiple initiatives that combine technology, education and community building. His leadership style emphasizes:</p>
        <ul style={{marginLeft: '20px', marginTop: '8px', marginBottom: '8px'}}>
          <li>Clear structure and governance</li>
          <li>Long-term strategic planning</li>
          <li>Ethical responsibility</li>
          <li>International collaboration</li>
        </ul>
        <p style={{marginTop: '10px'}}>He has worked with teams across Europe, the Middle East and other regions, coordinating efforts between developers, educators, analysts and business leaders. His experience managing diverse, multicultural teams has been instrumental in scaling projects beyond local markets.</p>
      </div>
    ),
    parent: "faqaccordion",
  },
  {
    id: "about-four",
    title: "Public Presence and Media",
    desc: (
      <div>
        <p>Ciprian Ciceu has been featured in various national and international media outlets, where he has shared insights on technology, blockchain, entrepreneurship and digital education. His public contributions are focused on explaining complex topics in an accessible manner and encouraging informed, responsible adoption of new technologies.</p>
        <div style={{marginTop: '10px'}}>In addition to media appearances, Ciprian participates in conferences, workshops and private events, where he speaks about:</div>
        <ul style={{marginLeft: '20px', marginTop: '8px', marginBottom: '8px'}}>
          <li>Technology and digital transformation</li>
          <li>Blockchain fundamentals and applications</li>
          <li>Entrepreneurship and leadership</li>
          <li>Education as a driver of innovation</li>
        </ul>
      </div>
    ),
    parent: "faqaccordion",
  },
  {
    id: "about-five",
    title: "Philosophy and Values",
    desc: (
      <div>
        <p>Ciprian's work is guided by a set of core principles that shape both his professional and personal approach:</p>
        <ul style={{marginLeft: '20px', marginTop: '8px', marginBottom: '8px'}}>
          <li><strong>Clarity over hype</strong> – prioritizing understanding over promotion</li>
          <li><strong>Education over speculation</strong> – empowering people through knowledge</li>
          <li><strong>Structure over improvisation</strong> – building systems that endure</li>
          <li><strong>Long-term vision over short-term results</strong> – focusing on sustainable growth</li>
        </ul>
        <p style={{marginTop: '10px'}}>He believes that technology should serve people, simplify complexity and contribute to meaningful, long-lasting progress.</p>
      </div>
    ),
    parent: "faqaccordion",
  },
];

const AboutFaqs = ({ element_faq = false }) => {
  const { playVideo } = useVideoModal();

  return (
    <React.Fragment>
      <section className="faq__area p-relative">
        <div
          className="faq__video"
          style={{ backgroundImage: `url(${faq_bg})` }}
        >
          <div className="faq__video-btn">
            <a
              style={{ cursor: "pointer" }}
              onClick={() => playVideo("4XQLNYJc2xQ")}
              className="tp-pulse-border popup-video"
            >
              <PlayThree />
            </a>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div className="faq__wrapper-2 faq__gradient-border faq__style-2 tp-accordion pl-160">
                <div className="faq__title-wrapper">
                  <span className="faq__title-pre">
                    {element_faq
                      ? "Minimal Design"
                      : "Get in touch with us to see how"}
                  </span>
                  <h3 className="faq__title">
                    {element_faq
                      ? "Accordion with image"
                      : "Provide smart and flexible digital services"}
                  </h3>
                </div>
                <div className="accordion" id="faqaccordion">
                  {faq_items.map((item) => (
                    <SingleFaq key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutFaqs;
