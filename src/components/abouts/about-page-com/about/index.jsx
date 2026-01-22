import React from 'react';
import SliderPortfolioArea from '@components/portfolio-details/slider-details/slider-portfolio-area';
import SliderItems from '@components/portfolio-details/slider-details/slider-items';
import AboutFaqs from './about-faqs';
import AboutTopBar from './about-top-bar';
import TextArea from './text-area';
import CurrentFocus from './current-focus';
import AboutCta from '@components/cta/about-cta';
import { useTranslations } from '@context/IntlContext';

const AboutArea = () => {
  // Get FAQ translations using the custom hook
  const t = useTranslations('about');

  // Access the full faqs object
  const faqsObject = t('faqs');

  // Check if it's a string (translation not found) or object (translation found)
  const faqData = typeof faqsObject === 'string' ? {} : faqsObject;

  return (
    <React.Fragment>
      <AboutTopBar />
      <TextArea />
      <AboutFaqs faqData={faqData} />
      <CurrentFocus />
      <SliderPortfolioArea pt="0" />
      <SliderItems />
      <AboutCta />
    </React.Fragment>
  );
};

export default AboutArea;