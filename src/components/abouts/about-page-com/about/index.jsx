import React from 'react';
import SliderPortfolioArea from '@components/portfolio-details/slider-details/slider-portfolio-area';
import SliderItems from '@components/portfolio-details/slider-details/slider-items';
import AboutFaqs from './about-faqs';
import AboutTopBar from './about-top-bar';
import TextArea from './text-area';
import CurrentFocus from './current-focus';
import AboutCta from '@components/cta/about-cta';

const AboutArea = () => {
  return (
    <React.Fragment>
      <AboutTopBar />
      <TextArea />
      <AboutFaqs />
      <CurrentFocus />
      <SliderPortfolioArea pt="0" />
      <SliderItems />
      <AboutCta />
    </React.Fragment>
  );
};

export default AboutArea;