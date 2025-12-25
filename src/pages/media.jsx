import React from 'react';
import SEO from '@components/seo';
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import ElementsVideoMain from "@elements/elements-video";

export default function Media() {
  return (
    <Wrapper>
      <SEO pageTitle={'Media - Ciprian Ciceu'} />
      <HeaderEight />
      <ElementsVideoMain />
      <FooterSeven />
    </Wrapper>
  );
}
