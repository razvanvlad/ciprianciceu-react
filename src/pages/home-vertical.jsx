import React, { useState } from 'react';
import SEO from '@components/seo';
import { FooterSeven, HeaderEight, Wrapper } from '@layout/index';
import VerticalSlider from '@components/verticle-slider';


const HomeVertical = () => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper>
      <SEO pageTitle={'Home Vertical'} />
      <HeaderEight />
      <VerticalSlider setActive={setActive} active={active} />
      <FooterSeven />
    </Wrapper>
  );
};

export default HomeVertical;