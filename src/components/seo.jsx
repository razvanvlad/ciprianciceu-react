import Head from "next/head";

const SEO = ({
  pageTitle,
  description = "Over the years, Ciprian Ciceu has been involved in multiple international projects",
  image,
  url,
  type = "website",
  author = "Ciprian Ciceu",
  publishedDate,
  modifiedDate,
  tags = [],
  canonical
}) => {
  const siteName = "Ciprian Ciceu - Entrepreneur & Blockchain Educator";
  const fullTitle = pageTitle ? `${pageTitle} | ${siteName}` : siteName;
  const defaultImage = image || "https://ciprianciceu.com/assets/img/ciprian-ciceu-og-image.jpg";
  const siteUrl = "https://ciprianciceu.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  // Truncate description to 160 characters for optimal SEO
  const metaDescription = description.length > 160
    ? description.substring(0, 157) + '...'
    : description;

  // Generate JSON-LD structured data for articles
  const articleSchema = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": metaDescription,
    "image": defaultImage,
    "author": {
      "@type": "Person",
      "name": author,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Person",
      "name": "Ciprian Ciceu",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/assets/img/logo/logo.png`
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "keywords": Array.isArray(tags) ? tags.join(', ') : tags
  } : null;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="author" content={author} />
      {tags.length > 0 && <meta name="keywords" content={Array.isArray(tags) ? tags.join(', ') : tags} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />

      {/* Open Graph Tags for Social Media */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {author && <meta property="article:author" content={author} />}
      {tags.length > 0 && Array.isArray(tags) && tags.map((tag, i) => (
        <meta key={i} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:site" content="@ciceu_ciprian" />
      <meta name="twitter:creator" content="@ciceu_ciprian" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* JSON-LD Structured Data for Articles */}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
    </Head>
  );
};

export default SEO;
