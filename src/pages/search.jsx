import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo"; 
import SearchArea from "@components/search/search-area";
import SearchResultItem from "@components/search/search-result-item";


export default function Search() {
  return (
    <Wrapper>
      <SEO pageTitle={'Search'} />
      <HeaderEight />
      <SearchArea/>
      <SearchResultItem/>
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
