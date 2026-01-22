import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import JobDetailsArea from "@components/job-details/job-details-area";

export default function JobDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={"Job Details"} />
      <HeaderEight />
      <JobDetailsArea />
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
