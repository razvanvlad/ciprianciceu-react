import React from 'react';
import SEO from '@components/seo';
import { FooterSeven, HeaderEight, Wrapper } from '@layout/index';
import SwiperSliderArea from '@components/swiper-slider';


const HomeSwiper = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Swiper'} />
      <HeaderEight />
      <SwiperSliderArea />
      <FooterSeven />
    </Wrapper>
  );
};

export default HomeSwiper;