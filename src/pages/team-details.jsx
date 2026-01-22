import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import TeamDetailsArea from "@components/team-details/team-details-area";
import TeamDetailsAbout from "@components/team-details/team-details-about";
import LawyerBlogs from "@components/blogs/lawyer-blogs";

export default function TeamDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={"Team Details"} />
      <HeaderEight />
      <TeamDetailsArea />
      <TeamDetailsAbout />
      <LawyerBlogs style_2={true} />
      <FooterSeven />
    </Wrapper>
  );
}

// Load translations for this page
export async function getStaticProps() {
  return {
    props: {
      messages: {
        ...(await import(`../messages/en/common.json`)).default,
        ...(await import(`../messages/en/home.json`)).default,
      }
    }
  };
}
