import React from 'react';
import SEO from '@components/seo';
import { FooterSeven, HeaderEight, Wrapper } from '@layout/index';
import MediaHero from '@components/media/media-hero';
import MediaVideos from '@components/media/media-videos';
import MediaPress from '@components/media/media-press';
import MediaSocial from '@components/media/media-social';
import MediaPodcasts from '@components/media/media-podcasts';

export default function Media() {
  return (
    <Wrapper>
      <SEO pageTitle={'Media - Ciprian Ciceu'} />
      <HeaderEight />
      <MediaHero />
      <MediaVideos />
      <MediaPress />
      <MediaSocial />
      <MediaPodcasts />
      <FooterSeven />
    </Wrapper>
  );
}
