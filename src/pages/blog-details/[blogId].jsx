import { useRouter } from "next/router";
// internal
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbSix from "@components/common/breadcrumb/breadcrumb-6";
import BlogDetailsArea from "@components/blogs/blog-details/blog-details-area";
import blog_data from "@data/blog-data";

export default function BlogDetails() {
  const router = useRouter();
  const { blogId } = router.query;
  const single_blog = blog_data.find(
    (item) => Number(item.id) === Number(blogId)
  );

  // Convert date to ISO format for structured data
  const getISODate = (dateString) => {
    if (!dateString) return new Date().toISOString();
    try {
      const date = new Date(dateString);
      return date.toISOString();
    } catch {
      return new Date().toISOString();
    }
  };

  return (
    <Wrapper>
      <SEO
        pageTitle={single_blog?.title || "Blog Details"}
        description={single_blog?.sm_desc || single_blog?.desc || "Read the latest insights and updates from Ciprian Ciceu"}
        image={single_blog?.img?.src || single_blog?.img}
        url={`/blog-details/${blogId}`}
        type="article"
        author={single_blog?.author_name || "Ciprian Ciceu"}
        publishedDate={getISODate(single_blog?.date)}
        tags={single_blog?.tag}
      />
      <HeaderEight />
      <BreadcrumbSix {...single_blog} />
      <BlogDetailsArea blog={single_blog} />
      <FooterSeven />
    </Wrapper>
  );
}


export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}