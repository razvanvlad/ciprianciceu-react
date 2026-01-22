import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import EventDetailsArea from "@components/event-details/event-details-area";

export default function EventDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={"Event Details"} />
      <HeaderEight />
      <EventDetailsArea />
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
