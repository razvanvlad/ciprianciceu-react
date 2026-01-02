import React from 'react';
import SEO from '@components/seo';
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import ElementsVideoMain from "@elements/elements-video";

export default function Media() {
  return (
    <Wrapper>
      <SEO
        pageTitle={'Media & Press Coverage'}
        description="Watch international media coverage and press features of Ciprian Ciceu discussing fintech innovation, blockchain technology, and Mainet X ecosystem development."
        url="/media"
      />
      <HeaderEight />
      <ElementsVideoMain />
      <FooterSeven />
    </Wrapper>
  );
}
