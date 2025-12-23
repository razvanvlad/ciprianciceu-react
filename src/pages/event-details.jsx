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
