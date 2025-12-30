import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <Head>
    <title>
      {pageTitle && `${pageTitle} - Ciprian Ciceu
Entrepreneur & Blockchain Educator`}
    </title>
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content="Over the years, Ciprian Ciceu has been involved in multiple international projects" />
    <meta name="robots" content="noindex, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;
