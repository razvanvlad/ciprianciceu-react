import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import LandingHeader from "@layout/headers/landing-header";
import LandingHero from "src/landing/landing-hero";
import LandingFeatures from "src/landing/landing-features";
import LandingDemos from "src/landing/landing-demos";
import LandingPlugins from "src/landing/landing-plugins";
import LandingPortfolio from "src/landing/landing-portfolio";
import LandingHeaderFooterPrev from "src/landing/landing-header-footer-prev";
import LandingBlogs from "src/landing/landing-blogs";
import LandingShops from "src/landing/landing-shops";
import LandingElements from "src/landing/landing-elements";
import LandingTools from "src/landing/landing-tools";
import LandingMobileArea from "src/landing/landing-mobile-area";
import LandingFooter from "src/landing/landing-footer";


export default function LandingPage() {
  return (
    <Wrapper>
      <SEO pageTitle={'Harry'} />
      <div id="landing_page">
      <LandingHeader/>
      <LandingHero/>
      <LandingFeatures/>
      <LandingDemos/>
      <LandingPlugins/>
      <LandingPortfolio/>
      <LandingHeaderFooterPrev/>
      <LandingBlogs/>
      <LandingShops/>
      <LandingElements/>
      <LandingTools/>
      <LandingMobileArea/>
      <LandingFooter/>
      </div>
    </Wrapper>
  )
}
