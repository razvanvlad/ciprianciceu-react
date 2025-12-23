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

