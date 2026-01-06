import Head from "next/head";

const SEO = ({
  pageTitle,
  description = "Ciprian Ciceu is a FinTech & Blockchain entrepreneur, Founder & CEO of Mainet X, building scalable financial ecosystems from Dubai to Europe.",
  image,
  url,
  type = "website",
  author = "Ciprian Ciceu",
  publishedDate,
  modifiedDate,
  tags = [],
  canonical
}) => {
  const siteName = "Ciprian Ciceu – FinTech & Blockchain Entrepreneur";
  const fullTitle = pageTitle ? `${pageTitle} | ${siteName}` : siteName;
  const defaultImage = image || "https://ciprianciceu.com/assets/img/ciprian-ciceu-og-image.jpg";
  const siteUrl = "https://ciprianciceu.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  // Truncate description to 160 characters for optimal SEO
  const metaDescription = description.length > 160
    ? description.substring(0, 157) + '...'
    : description;

  // Person Schema - Always present on all pages
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    "name": "Ciprian Ciceu",
    "url": siteUrl,
    "image": defaultImage,
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "Mainet X",
      "url": "https://mainetx.com"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "University of Bucharest"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "UAE"
    },
    "sameAs": [
      "https://www.linkedin.com/in/ciprian-ciceu-30b72045",
      "https://x.com/ciceu_ciprian",
      "https://www.instagram.com/ciprian_ciceu22",
      "https://www.tiktok.com/@ciprian.ciceu22",
      "https://www.facebook.com/ciprian.ciceu",
      "https://youtube.com/@ciprianciceu22",
      "https://mainetx.com"
    ],
    "knowsAbout": [
      "FinTech",
      "Blockchain Technology",
      "Cryptocurrency",
      "Financial Technology",
      "Trading Systems",
      "Entrepreneurship",
      "AI-driven Trading Platforms"
    ],
    "description": "FinTech & Blockchain entrepreneur, Founder & CEO of Mainet X, building scalable financial ecosystems and educational platforms."
  };

  // Organization Schema - Mainet X
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Mainet X",
    "url": "https://mainetx.com",
    "founder": {
      "@type": "Person",
      "@id": `${siteUrl}/#person`
    },
    "description": "FinTech and Blockchain platform building scalable financial ecosystems"
  };

  // Article Schema - connected to Person entity
  const articleSchema = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": metaDescription,
    "image": defaultImage,
    "author": {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Ciprian Ciceu",
      "url": siteUrl
    },
    "publisher": {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
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
    "keywords": Array.isArray(tags) ? tags.join(', ') : tags,
    "about": {
      "@type": "Person",
      "@id": `${siteUrl}/#person`
    }
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

      {/* JSON-LD Structured Data - Person Schema (Always present) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* JSON-LD Structured Data - Organization Schema (Always present) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* JSON-LD Structured Data - Article Schema (When applicable) */}
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
