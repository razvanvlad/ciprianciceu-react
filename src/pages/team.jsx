import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import TeamBreadcrumb from "@components/common/breadcrumb/team-breadcrumb";
import TeamsArea from "@components/teams/teams-area";
import JobPositionArea from "@components/job-positions/job-position-area";



export default function Team() {
  return (
    <Wrapper>
      <SEO pageTitle={'Team'} />
      <HeaderEight />
      <TeamBreadcrumb/>
      <TeamsArea/>
      <JobPositionArea/>
      <FooterSeven />
    </Wrapper>
  )
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
