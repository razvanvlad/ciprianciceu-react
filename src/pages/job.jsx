import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import JobSectionTitle from "@components/job-positions/job-section-title";
import JobThumbArea from "@components/job-positions/job-thumb-area";
import JobPositionArea from "@components/job-positions/job-position-area";

export default function Job() {
  return (
    <Wrapper>
      <SEO pageTitle={"Job"} />
      <HeaderEight />
      <JobSectionTitle />
      <JobThumbArea />
      <JobPositionArea style_2={true} />
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
