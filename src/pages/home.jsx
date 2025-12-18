import { Footer, Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import HomeSliderBanner from "@components/hero-banners/home-slider-banner";
import HomeAbout from "@components/abouts/home-about";
import HomeCounter from "@components/counters/home-counter";
import ServicesHome from "@components/services/services-home";
import HomeEvents from "@components/events/home-events";
import HomeTeams from "@components/teams/home-teams";
import HomeFaq from "@components/faqs/home-faq";
import HomePortfolio from "@components/portfolios/home-portfolio";
import HomeTestimonial from "@components/testimonials/home-testimonial";
import HomeBlogs from "@components/blogs/home-blogs";


export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Main'} />
      <Header/>
      <HomeSliderBanner/>
      <HomeAbout/>
      <HomeCounter/>
      <ServicesHome/>
      <HomeEvents/>
      <HomeTeams/>
      <HomeFaq/>
      <HomePortfolio/>
      <HomeTestimonial/>
      <HomeBlogs/>
      <Footer/>
    </Wrapper>
  )
}
