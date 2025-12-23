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
