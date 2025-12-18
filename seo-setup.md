Open Graph (social share)
	•	og:title = Meta Title
	•	og:description = Meta Description
	•	og:type = website
	•	og:image = portret profesional (1200x630)
	
🧩 URMĂTORUL PAS DUPĂ META (FOARTE IMPORTANT)

👉 Schema.org – JSON-LD (Person)
Asta ajută Google să te înțeleagă ca entitate reală, nu doar site.	

1) ✅ JSON-LD: PERSON (obligatoriu)

Pune asta pe toate paginile (global), sau minim pe Home + About.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ciprianciceu.com/#person",
  "name": "Ciprian Ciceu",
  "url": "https://ciprianciceu.com/",
  "image": "https://ciprianciceu.com/images/ciprian-ciceu.jpg",
  "jobTitle": [
    "Technology Entrepreneur",
    "Blockchain Educator",
    "Founder"
  ],
  "description": "Ciprian Ciceu is a technology entrepreneur and blockchain educator focused on fintech platforms, automation and education-driven innovation.",
  "sameAs": [
    "https://www.linkedin.com/in/PASTE-YOUR-LINKEDIN-URL-HERE/"
  ],
  "knowsAbout": [
    "Fintech",
    "Blockchain",
    "Technology Platforms",
    "Automation",
    "Digital Innovation",
    "Entrepreneurship",
    "Education"
  ],
  "worksFor": {
    "@type": "Organization",
    "@id": "https://ciprianciceu.com/#organization",
    "name": "Ciprian Ciceu — Official Website",
    "url": "https://ciprianciceu.com/"
  }
}
</script>

✅ Ce trebuie să înlocuiască developerul:
	•	image → o poză oficială (recomandat 800×800+)
	•	sameAs → linkul tău real de LinkedIn (și orice alt profil oficial pe care vrei să-l legi)
	
	2) ✅ JSON-LD: WEBSITE (recomandat)

Pune asta global (în layout).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ciprianciceu.com/#website",
  "url": "https://ciprianciceu.com/",
  "name": "Ciprian Ciceu",
  "description": "Official website of Ciprian Ciceu — technology entrepreneur and blockchain educator. Biography, projects and media coverage.",
  "inLanguage": "en",
  "publisher": {
    "@id": "https://ciprianciceu.com/#person"
  }
}
</script>

3) ✅ JSON-LD: WEBPAGE + BREADCRUMB (recomandat per pagină)

Asta se pune pe fiecare pagină, cu @id și name corespunzător.

Exemplu pentru About (/about)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ciprianciceu.com/about#webpage",
  "url": "https://ciprianciceu.com/about",
  "name": "About Ciprian Ciceu",
  "isPartOf": { "@id": "https://ciprianciceu.com/#website" },
  "about": { "@id": "https://ciprianciceu.com/#person" },
  "inLanguage": "en"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://ciprianciceu.com/about#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ciprianciceu.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://ciprianciceu.com/about"
    }
  ]
}
</script>

✅ BONUS: Schema pentru articolele de presă (când e gata pagina /press)

Dacă vrei ca fiecare link din Press să aibă Article schema, spune “ACUMA PRESS SCHEMA” și îți dau formatul exact (cu headline, publisher, datePublished, url).

Următorul pas tehnic (super important)
	1.	sitemap.xml + robots.txt
	2.	canonical pe fiecare pagină
	3.	og:image + twitter card
	4.	Submit în Google Search Console
	
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml">

  <url>
    <loc>https://ciprianciceu.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://ciprianciceu.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://ciprianciceu.com/projects</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://ciprianciceu.com/press</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://ciprianciceu.com/cv</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://ciprianciceu.com/contact</loc>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

</urlset>	

✅ Note SEO:
	•	priority ridicat pentru Home / About / Press
	•	changefreq weekly la Press → semnal bun pentru Google News
	•	Structură simplă, curată (ideal pentru site personal)
	
🤖 ROBOTS.TXT

📍 URL final: https://ciprianciceu.com/robots.txt	

User-agent: *
Allow: /

Sitemap: https://ciprianciceu.com/sitemap.xml