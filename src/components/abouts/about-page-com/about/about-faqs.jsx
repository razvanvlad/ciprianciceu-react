import React from "react";
// internal
import SingleFaq from "@components/faqs/single-faq";
import { PlayThree } from "@svg/index";
import { useVideoModal } from "src/provider/VideoProvider";

// YouTube thumbnail URL for video 4XQLNYJc2xQ
const faq_bg = "https://img.youtube.com/vi/4XQLNYJc2xQ/maxresdefault.jpg";

const AboutFaqs = ({ element_faq = false, faqData }) => {
  const { playVideo } = useVideoModal();
  const [openId, setOpenId] = React.useState("about-one");

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Generate FAQ items from translations - use prop data
  const faq_items = (faqData?.items || []).map((item, index) => {
    const id = `about-${['one', 'two', 'three', 'four', 'five'][index]}`;

    return {
      id,
      title: item.title,
      show: index === 0,
      desc: (
        <div>
          <p>{item.intro}</p>
          {item.listTitle && (
            <div style={{marginTop: '10px'}}>{item.listTitle}</div>
          )}
          <ul style={{marginLeft: '20px', marginTop: '8px', marginBottom: '8px'}}>
            {item.list.map((listItem, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
            ))}
          </ul>
          {item.conclusion && (
            <p style={{marginTop: '10px'}}>{item.conclusion}</p>
          )}
        </div>
      ),
      parent: "faqaccordion",
    };
  });

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
                      : faqData?.preTitle || 'Get in touch with us to see how'}
                  </span>
                  <h3 className="faq__title">
                    {element_faq
                      ? "Accordion with image"
                      : faqData?.title || 'Provide smart and flexible digital services'}
                  </h3>
                </div>
                <div className="accordion" id="faqaccordion">
                  {faq_items.map((item) => (
                    <SingleFaq
                      key={item.id}
                      item={item}
                      isOpen={openId === item.id}
                      onToggle={() => handleToggle(item.id)}
                    />
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
