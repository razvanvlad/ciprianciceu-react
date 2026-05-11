import Head from "next/head";

// ─── Constants ───────────────────────────────────────────────────────────────
const SITE_URL = "https://ciprianciceu.com";
const SITE_NAME = "Ciprian Ciceu – FinTech & Blockchain Entrepreneur";
const DEFAULT_IMAGE = `${SITE_URL}/assets/img/ciprian-ciceu-og-image.jpg`;
const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${SITE_URL}/#org-mainetx`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const OGIMAGE_ID = `${SITE_URL}/#ogimage`;
const MAINETX_LOGO = `${SITE_URL}/assets/img/mainetx-logo.png`;

// ─── Schema Builders ─────────────────────────────────────────────────────────

function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "url": `${SITE_URL}/`,
    "name": "Ciprian Ciceu",
    "inLanguage": ["en", "ro", "fr", "ar"],
    "publisher": { "@id": PERSON_ID }
  };
}

function buildWebPageSchema(fullUrl, title) {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    "url": fullUrl,
    "name": title,
    "isPartOf": { "@id": WEBSITE_ID },
    "about": { "@id": PERSON_ID },
    "primaryImageOfPage": { "@id": OGIMAGE_ID },
    "inLanguage": ["en", "ro", "fr", "ar"]
  };
}

function buildImageObjectSchema() {
  return {
    "@type": "ImageObject",
    "@id": OGIMAGE_ID,
    "url": DEFAULT_IMAGE,
    "contentUrl": DEFAULT_IMAGE,
    "caption": "Ciprian Ciceu"
  };
}

function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    "name": "Ciprian Ciceu",
    "url": `${SITE_URL}/`,
    "image": { "@id": OGIMAGE_ID },
    "jobTitle": "FinTech Entrepreneur & Founder",
    "description": "Ciprian Ciceu is a Romanian fintech entrepreneur and founder of Mainet X, focused on blockchain infrastructure, automated trading systems, and financial education.",
    "birthPlace": {
      "@type": "Place",
      "name": "Romania"
    },
    "nationality": {
      "@type": "Country",
      "name": "Romania"
    },
    "knowsAbout": [
      "FinTech",
      "Blockchain Technology",
      "Cryptocurrency",
      "Automated Trading Systems",
      "Artificial Intelligence in Finance",
      "Entrepreneurship"
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Romanian-American University of Bucharest",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bucharest",
          "addressCountry": "RO"
        }
      }
    ],
    "worksFor": { "@id": ORG_ID },
    "sameAs": [
      "https://www.linkedin.com/in/ciprian-ciceu-30b72045",
      "https://x.com/ciceu_ciprian",
      "https://www.instagram.com/ciprian_ciceu22",
      "https://www.tiktok.com/@ciprian.ciceu22",
      "https://www.facebook.com/ciprian.ciceu",
      "https://youtube.com/@ciprianciceu22",
      "https://mainetx.com/"
    ]
  };
}

function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    "name": "Mainet X",
    "url": "https://mainetx.com/",
    "description": "FinTech and blockchain platform focused on trading technology and financial education.",
    "logo": {
      "@type": "ImageObject",
      "url": MAINETX_LOGO
    },
    "founder": { "@id": PERSON_ID }
  };
}

function buildBreadcrumbSchema(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url ? { "item": `${SITE_URL}${item.url}` } : {})
    }))
  };
}

function buildArticleSchema({ fullUrl, title, description, image, publishedDate, modifiedDate }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${fullUrl}#article`,
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "@id": PERSON_ID,
      "name": "Ciprian Ciceu",
      "url": `${SITE_URL}/`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ciprian Ciceu",
      "url": `${SITE_URL}/`
    },
    "image": image,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    ...(publishedDate ? { "datePublished": publishedDate } : {}),
    ...(modifiedDate ? { "dateModified": modifiedDate } : {})
  };
}

function buildBlogPostingSchema({ fullUrl, title, description, image, publishedDate, modifiedDate, tags }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${fullUrl}#blogposting`,
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "@id": PERSON_ID,
      "name": "Ciprian Ciceu",
      "url": `${SITE_URL}/`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ciprian Ciceu",
      "url": `${SITE_URL}/`
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    ...(tags && tags.length > 0 ? { "keywords": Array.isArray(tags) ? tags.join(', ') : tags } : {})
  };
}

function buildFAQSchema(faqItems) {
  if (!faqItems || faqItems.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

// ─── SEO Component ───────────────────────────────────────────────────────────

const SEO = ({
  pageTitle,
  description = "Ciprian Ciceu is a Romanian fintech entrepreneur and founder of Mainet X, focused on blockchain infrastructure, automated trading systems, and financial education.",
  image,
  url,
  pageType = "default",
  author = "Ciprian Ciceu",
  publishedDate,
  modifiedDate,
  tags = [],
  keywords = [],
  canonical,
  breadcrumbs,
  faqItems,
  ogTitle,
  ogDescription,
}) => {
  const fullTitle = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
  const metaDescription = description.length > 160
    ? description.substring(0, 157) + '...'
    : description;

  // Ensure absolute image URL
  const absoluteImage = image
    ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
    : DEFAULT_IMAGE;

  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;

  // Determine og:type
  const ogType = ['about', 'blogPost', 'pressArticle'].includes(pageType) ? 'article' : 'website';

  // ─── Build JSON-LD blocks based on pageType ──────────────────────────────
  const jsonLdBlocks = [];

  switch (pageType) {
    case 'homepage': {
      // Single @graph block — core entity graph
      jsonLdBlocks.push({
        "@context": "https://schema.org",
        "@graph": [
          buildWebSiteSchema(),
          buildWebPageSchema(fullUrl, fullTitle),
          buildImageObjectSchema(),
          buildPersonSchema(),
          buildOrganizationSchema()
        ]
      });
      break;
    }

    case 'about': {
      // Article schema for biography page
      jsonLdBlocks.push(buildArticleSchema({
        fullUrl,
        title: pageTitle || "About Ciprian Ciceu",
        description: metaDescription,
        image: absoluteImage,
        publishedDate,
        modifiedDate
      }));

      // Breadcrumbs
      const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);
      if (breadcrumbSchema) jsonLdBlocks.push(breadcrumbSchema);
      break;
    }

    case 'blogPost': {
      // BlogPosting schema
      jsonLdBlocks.push(buildBlogPostingSchema({
        fullUrl,
        title: pageTitle || "Blog Post",
        description: metaDescription,
        image: absoluteImage,
        publishedDate,
        modifiedDate,
        tags: [...(Array.isArray(tags) ? tags : tags ? [tags] : []), ...keywords]
      }));

      // Optional FAQ
      const faqSchema = buildFAQSchema(faqItems);
      if (faqSchema) jsonLdBlocks.push(faqSchema);

      // Breadcrumbs
      const blogBreadcrumb = buildBreadcrumbSchema(breadcrumbs);
      if (blogBreadcrumb) jsonLdBlocks.push(blogBreadcrumb);
      break;
    }

    case 'pressArticle': {
      // Article schema for press
      jsonLdBlocks.push(buildArticleSchema({
        fullUrl,
        title: pageTitle || "Press Article",
        description: metaDescription,
        image: absoluteImage,
        publishedDate,
        modifiedDate
      }));

      // Breadcrumbs
      const pressBreadcrumb = buildBreadcrumbSchema(breadcrumbs);
      if (pressBreadcrumb) jsonLdBlocks.push(pressBreadcrumb);
      break;
    }

    default: {
      // Listing pages, contact, portfolio, media, etc. — breadcrumbs only
      const defaultBreadcrumb = buildBreadcrumbSchema(breadcrumbs);
      if (defaultBreadcrumb) jsonLdBlocks.push(defaultBreadcrumb);
      break;
    }
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="author" content={author} />
      {(keywords.length > 0 || tags.length > 0) && (
        <meta name="keywords" content={[...keywords, ...(Array.isArray(tags) ? tags : tags ? [tags] : [])].join(', ')} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:site_name" content="Ciprian Ciceu" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={ogTitle || "Ciprian Ciceu – FinTech Entrepreneur & Blockchain Lecturer"} />
      <meta property="og:description" content={ogDescription || "Official website of Ciprian Ciceu, fintech entrepreneur and founder of Mainet X."} />
      <meta property="og:image" content={absoluteImage} />
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {author && <meta property="article:author" content={author} />}
      {tags.length > 0 && Array.isArray(tags) && tags.map((tag, i) => (
        <meta key={i} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || "Ciprian Ciceu – FinTech Entrepreneur & Blockchain Lecturer"} />
      <meta name="twitter:description" content={ogDescription || "Official website of Ciprian Ciceu, fintech entrepreneur and founder of Mainet X."} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:site" content="@ciceu_ciprian" />
      <meta name="twitter:creator" content="@ciceu_ciprian" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* JSON-LD Structured Data */}
      {jsonLdBlocks.map((block, i) => (
        <script
          key={`jsonld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </Head>
  );
};

export default SEO;
