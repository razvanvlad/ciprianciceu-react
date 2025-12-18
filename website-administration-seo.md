[14:17, 12/18/2025] Cipri Ciceu: 📌 CE URMEAZĂ IMEDIAT (ORDINE CORECTĂ)

1️⃣ Publicare site
2️⃣ Verificare:
	•	https://ciprianciceu.com/sitemap.xml
	•	https://ciprianciceu.com/robots.txt

3️⃣ Google Search Console
	•	Add property: https://ciprianciceu.com
	•	Submit sitemap
	•	Request indexing pentru:
	•	Home
	•	About
	•	Press

###

🔥 URMĂTORUL PAS CRITIC

👉 Open Graph & Social Share (og:image + Twitter Card)
Asta controlează cum apare site-ul tău pe WhatsApp, LinkedIn, Facebook.
[14:18, 12/18/2025] Cipri Ciceu: 📌 CE URMEAZĂ IMEDIAT (ORDINE CORECTĂ)

1️⃣ Publicare site
2️⃣ Verificare:
	•	https://ciprianciceu.com/sitemap.xml
	•	https://ciprianciceu.com/robots.txt

3️⃣ Google Search Console
	•	Add property: https://ciprianciceu.com
	•	Submit sitemap
	•	Request indexing pentru:
	•	Home
	•	About
	•	Press

###

🔥 URMĂTORUL PAS CRITIC

👉 Open Graph & Social Share (og:image + Twitter Card)
Asta controlează cum apare site-ul tău pe WhatsApp, LinkedIn, Facebook.

AUTOMATIZARE PENTRU NEXT.JS, explicată clar + copy-paste, ca să o trimiți direct developerului.
(Confirm din start: varianta statică e OK, asta e doar upgrade-ul corect.)

###

⚙️ NEXT.JS – SITEMAP DINAMIC (RECOMANDAT)

✔️ CÂND să o folosiți
	•	când site-ul este stabil
	•	când veți adăuga articole / presă / pagini noi
	•	pentru SEO curat, fără update manual

###

🟢 VARIANTA 1 – Next.js 13+ (App Router) ✅ RECOMANDAT
/app/sitemap.xml/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://ciprianciceu.com';

  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/press', priority: '0.9', changefreq: 'weekly' },
    { url: '/projects', priority: '0.8', changefreq: 'monthly' },
    { url: '/cv', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.5', changefreq: 'yearly' }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}

https://ciprianciceu.com/sitemap.xml

✅ CHECKLIST FINAL SEO

✔ sitemap.xml
✔ robots.txt
✔ meta titles
✔ schema.org
✔ canonical
✔ redirect .ro → .com

👉 URMĂTORUL PAS FINAL (ultimul din setup):
Open Graph & Social Share (WhatsApp / LinkedIn / Facebook)

Perfect. Mai jos ai SOCIAL / OPEN GRAPH SETUP complet (WhatsApp, LinkedIn, Facebook, X/Twitter), gata de dat developerului pentru Next.js (template HARRY).

###

✅ 1) IMAGINI NECESARE (FOARTE IMPORTANT)

Developerul trebuie să pună în /public/:
	•	/og/og-home.jpg (1200×630)
	•	/og/og-about.jpg (1200×630)
	•	/og/og-press.jpg (1200×630)
	•	/og/og-projects.jpg (1200×630)
	•	/og/og-cv.jpg (1200×630)
	•	/og/og-contact.jpg (1200×630)

📌 Recomandare design: portret profesional + nume “Ciprian Ciceu” + “Official Website”.

###

✅ 2) META TAGS SOCIAL (Open Graph + Twitter)

🟢 Next.js 13+ (App Router) — app/layout.tsx

Asta setează default global; apoi fiecare pagină poate suprascrie title/description/og:image.

export const metadata = {
  metadataBase: new URL('https://ciprianciceu.com'),
  title: 'Ciprian Ciceu | Tech & Blockchain Entrepreneur',
  description:
    'Official website of Ciprian Ciceu, technology entrepreneur and blockchain educator. Projects, media coverage, biography and professional profile.',
  openGraph: {
    title: 'Ciprian Ciceu | Tech & Blockchain Entrepreneur',
    description:
      'Official website of Ciprian Ciceu, technology entrepreneur and blockchain educator. Projects, media coverage, biography and professional profile.',
    url: 'https://ciprianciceu.com/',
    siteName: 'Ciprian Ciceu',
    images: [
      {
        url: '/og/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Ciprian Ciceu — Official Website'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ciprian Ciceu | Tech & Blockchain Entrepreneur',
    description:
      'Official website of Ciprian Ciceu, technology entrepreneur and blockchain educator.',
    images: ['/og/og-home.jpg']
  },
  alternates: {
    canonical: 'https://ciprianciceu.com/'
  }
};

 3) SOCIAL METADATA PER PAGINĂ (recomandat)

Exemplu pentru About — app/about/page.tsx

export const metadata = {
  title: 'About Ciprian Ciceu | Entrepreneur & Blockchain Educator',
  description:
    'Learn more about Ciprian Ciceu, technology entrepreneur and blockchain educator with international experience in fintech, education and innovation.',
  openGraph: {
    title: 'About Ciprian Ciceu',
    description:
      'Official biography and professional background of Ciprian Ciceu.',
    url: 'https://ciprianciceu.com/about',
    images: [
      {
        url: '/og/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Ciprian Ciceu'
      }
    ],
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ciprian Ciceu',
    description: 'Official biography and professional background.',
    images: ['/og/og-about.jpg']
  },
  alternates: {
    canonical: 'https://ciprianciceu.com/about'
  }
};

press → image /og/og-press.jpg
	•	/projects → /og/og-projects.jpg
	•	/cv → /og/og-cv.jpg
	•	/contact → /og/og-contact.jpg

###

✅ 4) WHATSAPP / LINKEDIN CHECK (foarte important)

După deploy, testează share preview cu:
	•	WhatsApp: trimite linkul într-un chat privat
	•	LinkedIn: “Post” draft și vezi preview

Dacă nu apare imediat corect:
	•	e normal să aibă cache (mai ales Facebook/LinkedIn)
	•	dar dacă OG tags sunt corecte, se rezolvă după refresh.

###

✅ 5) BONUS (recomandare)

Adaugă și:
	•	favicon.ico
	•	apple-touch-icon.png (180×180)
	•	site.webmanifest

###

🔜 URMĂTORUL PAS FINAL (după social)

Google Search Console + Indexing plan (Home/About/Press) + checklist de lansare.

1) Intră în Google Search Console
	•	Deschide Google Search Console
	•	Click Add property
	•	Alege URL prefix și pune:
https://ciprianciceu.com

2) Verifică domeniul

Alege metoda recomandată de GSC (de obicei):
	•	DNS TXT record în zona domeniului (Namecheap/Cloudflare/etc.)
	•	după ce îl adaugi → Verify

Dacă site-ul e pe Vercel, poate merge și verificare simplă cu HTML tag, dar DNS e cel mai solid.

###

3) Trimite Sitemap

În Search Console:
	•	Meniu stânga → Sitemaps
	•	Add a new sitemap:
sitemap.xml
	•	Submit

Verifici că apare Success.

###

4) Cere indexare pentru paginile cheie (în ordinea asta)

În Search Console → URL Inspection:
	1.	https://ciprianciceu.com/
	2.	https://ciprianciceu.com/about
	3.	https://ciprianciceu.com/press
	4.	https://ciprianciceu.com/projects
	5.	https://ciprianciceu.com/cv
	6.	https://ciprianciceu.com/contact

Pentru fiecare:
	•	“Test Live URL”
	•	apoi “Request Indexing”

###

5) Verificare rapidă (obligatoriu)

În browser, deschide:
	•	https://ciprianciceu.com/robots.txt  ✅ trebuie să existe
	•	https://ciprianciceu.com/sitemap.xml ✅ trebuie să existe
	•	Trimite linkul pe WhatsApp/LinkedIn și vezi preview (OG image) ✅

###

6) Setare redirect .ro (dacă nu e făcut)

ciprianciceu.ro și www.ciprianciceu.ro → 301 către
https://ciprianciceu.com