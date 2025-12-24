# 🏗️ WIREFRAME OFICIAL – ciprianciceu.com

**Personal Brand Website | Tech · FinTech · Blockchain**

> **Template:** Harry - Creative Agency & Portfolio React Next.js Template v2.0.0
> **Framework:** React 16.0.6 + Next.js (Pages Router)
> **Last Updated:** 2025-12-24

---

## 📋 TABLE OF CONTENTS

1. [Site Structure Overview](#site-structure-overview)
2. [Global Layout Components](#global-layout-components)
3. [Page Wireframes](#page-wireframes)
   - [Homepage](#homepage)
   - [About Page](#about-page)
   - [Projects Page](#projects-page)
   - [CV/Resume Page](#cvresume-page)
   - [Press & Media Page](#press--media-page)
   - [Contact Page](#contact-page)
4. [Component Mapping](#component-mapping)
5. [Content Source Files](#content-source-files)
6. [Implementation Checklist](#implementation-checklist)

---

## 🗺️ SITE STRUCTURE OVERVIEW

### Primary Navigation
```
ciprianciceu.com
├── Home (/)
├── About (/about)
├── Projects (/projects)
├── Media (/media)
├── CV (/cv)
└── Contact (/contact)
```

### Site Architecture
- **Main Pages:** 6 core pages
- **Layout:** Custom personal brand layout (based on Portfolio/Freelancer templates)
- **Header:** Fixed, minimal, professional
- **Footer:** Simple, with social links and contact info
- **Content Sources:** See [Content Source Files](#content-source-files)

---

## 🎨 GLOBAL LAYOUT COMPONENTS

### HEADER (Fixed, Simple)
**Component:** Custom Header (based on `HeaderFive` or `HeaderSix`)
**Location:** [src/layout/headers/](src/layout/headers/)

**Structure:**
```
┌─────────────────────────────────────────────────┐
│ Logo: "Ciprian Ciceu"    [Menu Items]   [Press]│
└─────────────────────────────────────────────────┘
```

**Menu Items:**
- Home
- About
- Projects
- Media
- CV
- Contact

**Button:** Press (highlight/accent button)

---

### FOOTER
**Component:** Custom Footer (based on `FooterFive` - minimal)
**Location:** [src/layout/footers/](src/layout/footers/)

**Structure:**
```
┌─────────────────────────────────────────────────┐
│  Ciprian Ciceu © 2025                          │
│  📧 contact@ciprianciceu.com                   │
│  🔗 LinkedIn  📷 Instagram                     │
│  Privacy | Terms                                │
└─────────────────────────────────────────────────┘
```

---

## 📄 PAGE WIREFRAMES

### HOMEPAGE
**Route:** `/`
**File:** [src/pages/index.jsx](src/pages/index.jsx) or `home.jsx`
**Content Source:** [homepage.md](homepage.md)
**Template Reference:** Portfolio/Freelancer homepage style

#### Section Breakdown:

##### 1. HERO SECTION
**Component:** `FreelancerBanner` or custom Hero
**Reference:** [src/components/hero-banners/home-freelancer-banner.jsx](src/components/hero-banners/home-freelancer-banner.jsx)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  LEFT SIDE (60%)              RIGHT SIDE (40%) │
│  ┌─────────────────────┐      ┌─────────────┐ │
│  │ H1: Ciprian Ciceu   │      │             │ │
│  │ H2: FinTech         │      │  Professional│ │
│  │ Entrepreneur ·      │      │  Business    │ │
│  │ Blockchain & AI     │      │  Photo       │ │
│  │ Innovator           │      │             │ │
│  │                     │      └─────────────┘ │
│  │ Short intro text    │                      │
│  │                     │                      │
│  │ [View Projects]     │                      │
│  │ [Media & Press]     │                      │
│  └─────────────────────┘                      │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Preferred Button Style:**
- Primary: `tp-btn-5 tp-link-btn-3`
- Secondary: `tp-btn-9`

---

##### 2. AUTHORITY / CREDIBILITY SECTION
**Component:** `HomeAbout` or custom feature cards
**Reference:** [src/components/features/portfolio-feature.jsx](src/components/features/portfolio-feature.jsx)

```
┌─────────────────────────────────────────────────┐
│          WHAT I DO / EXPERTISE                  │
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │ 🧠       │  │ 🔗       │  │ 🎓       │     │
│  │ FinTech  │  │Blockchain│  │Education │     │
│  │ & AI     │  │ & Crypto │  │& Training│     │
│  │          │  │          │  │          │     │
│  └──────────┘  └──────────┘  └──────────┘     │
│                                                 │
│  ┌──────────┐                                   │
│  │ 🌍       │                                   │
│  │International│                                │
│  │ Projects │                                   │
│  │          │                                   │
│  └──────────┘                                   │
└─────────────────────────────────────────────────┘
```

**Card Style:** Minimal & Clean Design with Gradient Overlay
**Class Reference:** `services__area pb-90 pt-110`

---

##### 3. ABOUT (SHORT VERSION)
**Component:** `HomeFreelancerAbout` or custom About section
**Reference:** [src/components/abouts/home-freelancer-about.jsx](src/components/abouts/home-freelancer-about.jsx)

```
┌─────────────────────────────────────────────────┐
│  About Ciprian Ciceu                            │
│                                                 │
│  2-3 short paragraphs:                          │
│  • Entrepreneur background                      │
│  • Education & expertise                        │
│  • Tech projects & achievements                 │
│                                                 │
│  [Read full biography →]                        │
└─────────────────────────────────────────────────┘
```

**Content Source:** [homepage.md](homepage.md) - "INTRODUCTION" section

---

##### 4. PROJECTS SECTION
**Component:** `HomeFreelancerPortfolio` or custom Portfolio grid
**Reference:** [src/components/portfolios/home-freelancer-portfolio.jsx](src/components/portfolios/home-freelancer-portfolio.jsx)

```
┌─────────────────────────────────────────────────┐
│              FEATURED PROJECTS                   │
│                                                 │
│  ┌───────────────┐  ┌───────────────┐          │
│  │               │  │               │          │
│  │  Mainet X     │  │ BeTrader      │          │
│  │               │  │ Academy       │          │
│  │ AI-powered    │  │               │          │
│  │ trading &     │  │ Financial     │          │
│  │ education     │  │ education &   │          │
│  │ ecosystem     │  │ risk mgmt     │          │
│  │               │  │               │          │
│  │ [Learn More]  │  │ [Learn More]  │          │
│  └───────────────┘  └───────────────┘          │
│                                                 │
│  ┌───────────────┐                              │
│  │               │                              │
│  │ Blockchain    │                              │
│  │ Initiatives   │                              │
│  │               │                              │
│  │ Crypto &      │                              │
│  │ decentralized │                              │
│  │ technologies  │                              │
│  │               │                              │
│  │ [Learn More]  │                              │
│  └───────────────┘                              │
│                                                 │
│  [View All Projects →]                          │
└─────────────────────────────────────────────────┘
```

**Content Source:** [projects.md](projects.md)
**Carousel Style:** `about__gallery-area fix pt-120 pb-110`

---

##### 5. PRESS & MEDIA (IMPORTANT)
**Component:** `AgencyBrands` or custom brand/logo slider
**Reference:** [src/components/brands/agency-brands.jsx](src/components/brands/agency-brands.jsx)

```
┌─────────────────────────────────────────────────┐
│           FEATURED IN MEDIA                      │
│                                                 │
│  [Forbes] [Antena 3] [Adevărul] [Click]        │
│  [Digital Journal] [Barchart] [TechNews]       │
│                                                 │
│  [View all press →]                             │
└─────────────────────────────────────────────────┘
```

**Slider Class:** `brand__area pt-110 pb-120`
**Content Source:** [press&media.md](press&media.md)

---

##### 6. TRUST / STATEMENT SECTION
**Component:** Custom quote/testimonial section
**Reference:** [src/components/testimonials/portfolio-testimonial.jsx](src/components/testimonials/portfolio-testimonial.jsx)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│   "Technology, education and responsibility     │
│    are the pillars of sustainable financial    │
│    innovation."                                 │
│                                                 │
│   — Ciprian Ciceu                               │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Parallax Style:** See [elements-parallax](http://localhost:3002/elements-parallax)

---

### ABOUT PAGE
**Route:** `/about`
**File:** [src/pages/about.jsx](src/pages/about.jsx)
**Content Source:** [about.md](about.md)
**Template Reference:** About/About Me page

#### Section Breakdown:

##### 1. BREADCRUMB
**Component:** `Breadcrumb`
**Reference:** [src/components/common/breadcrumb/breadcrumb-1.jsx](src/components/common/breadcrumb/breadcrumb-1.jsx)

##### 2. BIOGRAPHY (FULL VERSION)
**Component:** `PoliticianBiography` or custom long-form content
**Reference:** [src/components/biography/](src/components/biography/)

**Structure:**
- Introduction
- Early Career and Foundations
- Technology and Fintech Development
- Blockchain and Digital Innovation
- Education and Knowledge Sharing
- Entrepreneurship and Leadership
- Public Presence and Media
- Philosophy and Values
- Current Focus and Future Direction

**Content Source:** [about.md](about.md) - Full content

---

##### 3. EXPERIENCE TIMELINE (OPTIONAL)
**Component:** `LawyerHistory` (adapted for career timeline)
**Reference:** [src/components/histories/](src/components/histories/)

---

##### 4. SKILLS/EXPERTISE VISUALIZATION (OPTIONAL)
**Component:** `FreelancerSkill` or `PAboutSkill`
**Reference:** [src/components/skills/](src/components/skills/)

---

##### 5. CALL TO ACTION
**Component:** `AboutCta`
**Reference:** [src/components/cta/about-cta.jsx](src/components/cta/about-cta.jsx)

```
[Download CV] [View Projects] [Contact]
```

---

### PROJECTS PAGE
**Route:** `/projects`
**File:** [src/pages/projects.jsx](src/pages/projects.jsx)
**Content Source:** [projects.md](projects.md)
**Template Reference:** Portfolio/Services page

#### Section Breakdown:

##### 1. BREADCRUMB
**Component:** `Breadcrumb`

##### 2. PROJECTS INTRODUCTION
Short intro explaining the scope of projects

##### 3. PROJECT CARDS (DETAILED)
**Component:** `ServicesHome` or Portfolio cards
**Reference:** [src/components/services/services-home.jsx](src/components/services/services-home.jsx)

**Each Project Card Contains:**
- Icon/Logo
- Project Name
- Description
- Key Features (bullet points)
- Call-to-action button

**Projects:**
1. **Mainet X** - Fintech & Technology Ecosystem
2. **BeTrader Academy** - Education & Financial Literacy
3. **Blockchain & Digital Innovation** - Research & Applied Technology
4. **International Teams & Events** - Cross-Border Collaboration

**Content Source:** [projects.md](projects.md)

##### 4. PROJECT PHILOSOPHY SECTION
Quote/statement about project approach

---

### CV/RESUME PAGE
**Route:** `/cv`
**File:** [src/pages/cv.jsx](src/pages/cv.jsx) (custom page)
**Content Source:** [cv.md](cv.md)

#### Section Breakdown:

##### 1. BREADCRUMB
**Component:** `Breadcrumb`

##### 2. RESUME CONTENT
**Component:** Custom layout or `TeamDetails` adapted
**Reference:** [src/pages/team-details.jsx](src/pages/team-details.jsx)

**Structure:**
- Professional Summary
- Core Expertise (list)
- Professional Experience (detailed sections)
- Education & Academic Activity
- Media & Public Presence
- International Experience
- Professional Philosophy
- Languages
- Download PDF button

**Typography Reference:** [elements-heading](http://localhost:3002/elements-heading)

##### 3. DOWNLOAD CTA
```
┌─────────────────────────────────────────────────┐
│  📥 Download Full CV (PDF)                      │
└─────────────────────────────────────────────────┘
```

**Button Style:** `tp-btn-5 tp-link-btn-3`

---

### PRESS & MEDIA PAGE
**Route:** `/media`
**File:** [src/pages/media.jsx](src/pages/media.jsx) (custom page)
**Content Source:** [press&media.md](press&media.md)

#### Section Breakdown:

##### 1. BREADCRUMB
**Component:** `Breadcrumb`

##### 2. INTRODUCTION
Brief explanation of media coverage

##### 3. FEATURED MEDIA COVERAGE
**Component:** Blog cards adapted for media articles
**Reference:** [src/components/blogs/home-blogs.jsx](src/components/blogs/home-blogs.jsx)

**Each Media Card:**
- Publication logo/name
- Article title
- Short excerpt
- Link to article
- Date (optional)

**Featured Publications:**
- Forbes Romania
- Antena 3
- Adevărul
- Click!
- Digital Journal
- TechNewsTab
- Barchart

##### 4. INTERVIEWS & COMMENTARY SECTION
Text section about topics covered

##### 5. MEDIA CONTACT
Contact information for press inquiries

**Content Source:** [press&media.md](press&media.md)

---

### CONTACT PAGE
**Route:** `/contact`
**File:** [src/pages/contact.jsx](src/pages/contact.jsx)
**Content Source:** [contact.md](contact.md)
**Template Reference:** Contact page

#### Section Breakdown:

##### 1. BREADCRUMB
**Component:** `Breadcrumb`
**Reference:** [src/components/common/breadcrumb/breadcrumb-1.jsx](src/components/common/breadcrumb/breadcrumb-1.jsx)

##### 2. CONTACT FORM
**Component:** `ContactForm`
**Reference:** [src/components/contacts/](src/components/contacts/)

**Form Class:** `contact__form-area pt-120 pb-120`
**Reference:** [elements-form](http://localhost:3002/elements-form)

**Form Fields:**
- Name
- Email
- Subject
- Message
- Submit button

##### 3. CONTACT INFORMATION
```
┌─────────────────────────────────────────────────┐
│  📧 General Inquiries                           │
│  contact@ciprianciceu.com                       │
│                                                 │
│  📧 Press & Media                               │
│  press@ciprianciceu.com                         │
│                                                 │
│  🔗 LinkedIn                                    │
│  (link to profile)                              │
│                                                 │
│  🌍 Location                                    │
│  Europe & Middle East                           │
└─────────────────────────────────────────────────┘
```

##### 4. PROFESSIONAL SCOPE
List of inquiry types accepted

##### 5. PRIVACY NOTICE
Brief privacy/communication policy statement

**Content Source:** [contact.md](contact.md)

---

## 🧩 COMPONENT MAPPING

### Template Components to Use

Based on [prefered-components-from-theme.md](prefered-components-from-theme.md) and template analysis:

| Section | Preferred Component | Location | Class/Style |
|---------|-------------------|----------|-------------|
| **Buttons** | Primary/Secondary/Link | `elements-button` | `tp-btn-5 tp-link-btn-3`, `tp-btn-9`, `tp-link-btn-2` |
| **Hero Banner** | Freelancer/Portfolio Banner | `src/components/hero-banners/` | Custom |
| **About Section** | Freelancer About | `src/components/abouts/home-freelancer-about.jsx` | Custom |
| **Projects Grid** | Freelancer Portfolio | `src/components/portfolios/home-freelancer-portfolio.jsx` | `about__gallery-area fix pt-120 pb-110` |
| **Features/Expertise** | Icon Boxes | `elements-iconbox` | `services__area pb-90 pt-110` |
| **Logo Slider** | Brand Slider | `src/components/brands/` | `brand__area pt-110 pb-120` |
| **Contact Form** | Contact Form | `src/components/contacts/` | `contact__form-area pt-120 pb-120` |
| **Typography** | Headings | `elements-heading` | Standard |
| **Quote/Statement** | Testimonial/Parallax | `elements-parallax`, `elements-testimonial` | Custom |
| **Feature Tabs** | Tab Component | `elements-tab` | `features__area pt-140 pb-140` |
| **Video (if needed)** | Video Component | `elements-video` | Custom |

### Data Files to Create/Modify

| Content Type | File Location | Content |
|-------------|--------------|---------|
| **Portfolio Items** | `src/data/portfolio-data.js` | 3 main projects (Mainet X, BeTrader, Blockchain) |
| **Services** | `src/data/service-data.js` | 4 expertise areas (FinTech & AI, Blockchain, Education, International) |
| **Blog/Media** | `src/data/blog-data.js` | Media articles/press coverage |
| **Team** | `src/data/team-data.js` | Personal profile data (if using team component) |

---

## 📚 CONTENT SOURCE FILES

All content is organized in separate markdown files:

| File | Purpose | Target Page(s) |
|------|---------|---------------|
| [homepage.md](homepage.md) | Homepage content & sections | Homepage (/) |
| [about.md](about.md) | Full biography & professional story | About (/about) |
| [projects.md](projects.md) | All projects & initiatives | Projects (/projects), Homepage projects section |
| [cv.md](cv.md) | Professional resume/CV | CV (/cv) |
| [press&media.md](press&media.md) | Media coverage & publications | Media (/media), Homepage media section |
| [contact.md](contact.md) | Contact information & policies | Contact (/contact) |
| [prefered-components-from-theme.md](prefered-components-from-theme.md) | Component selection guide | All pages (reference) |
| [template-map.md](template-map.md) | Complete template documentation | All pages (reference) |

---

## ✅ IMPLEMENTATION STATUS & CHECKLIST

### 📊 Overall Progress
**Status:** In Progress
**Completion:** ~25%

---

### Phase 1: Setup & Configuration ⏳ IN PROGRESS
- [x] Review all content source files
- [x] Document site structure and wireframes
- [ ] Set up routing structure (`src/pages/`)
- [ ] Configure header navigation (custom based on HeaderFive/Six)
- [ ] Configure footer (custom based on FooterFive)
- [ ] Set up SEO metadata structure
- [ ] Configure favicon and brand assets

**Status:** 30% Complete

---

### Phase 2: Data Population 📝 TO DO
- [ ] Create/update portfolio data for 3 projects (Mainet X, BeTrader, Blockchain)
- [ ] Create/update service data for 4 expertise areas
- [ ] Create/update blog data for media articles (9+ publications)
- [ ] Add professional photos to `public/assets/img/`
- [ ] Configure brand logos for media section (Forbes, News.ro, EVZ, Adevărul, Digital Journal, etc.)
- [ ] Add project-specific images

**Status:** 0% Complete
**Required Assets:**
- Professional business photo (hero section)
- Media publication logos (7+ logos)
- Project screenshots/images (3 projects)

---

### Phase 3: Homepage Development 🏠 TO DO
- [ ] Hero section with professional photo
- [ ] Authority/credibility cards (4 expertise areas: FinTech & AI, Blockchain, Education, International)
- [ ] About section (short version from homepage.md)
- [ ] Projects section (3 featured projects with cards)
- [ ] Press & Media logo slider (7+ publications)
- [ ] Trust statement/quote section

**Status:** 0% Complete
**Dependencies:** Phase 2 (data + images)

---

### Phase 4: Inner Pages Development 📄 TO DO
- [ ] **About page** (full biography from about.md)
- [ ] **Projects page** (detailed project listings)
  - [ ] Mainet X project page
  - [ ] BeTrader Academy project page
  - [ ] Blockchain initiatives section
- [ ] **CV/Resume page** (from cv.md + downloadable PDF option)
- [ ] **Press & Media page** (organized by project categories)
  - [ ] Ciprian Ciceu - Public Profile section
  - [ ] Mainet X - Fintech section
  - [ ] BeTrader Academy - Education section
  - [ ] Blockchain & Innovation section
- [ ] **Contact page** (form + information)
- [ ] **Security page** (NEW - user protection & anti-phishing)
- [ ] **Trust page** (NEW - transparency & verification)
- [ ] **FAQ page** (NEW - common questions)

**Status:** 0% Complete
**New Pages Added:** Security, Trust, FAQ

---

### Phase 5: Additional Pages & Features ⚙️ TO DO
**NEW REQUIREMENTS:**

#### Security & Trust Infrastructure
- [ ] Create `/security` page with:
  - [ ] Account security best practices
  - [ ] 2FA information
  - [ ] Anti-phishing guidelines
  - [ ] Official communication channels
  - [ ] Payment & transaction safety
  - [ ] Disclaimer section
- [ ] Create `/trust` page
- [ ] Create `/faq` page with schema markup
- [ ] Internal linking strategy (link all pages to /trust, /security, /faq)

#### Media Organization
- [ ] Organize media/press by project categories
- [ ] Add article descriptions (1-2 sentences each)
- [ ] Add external links with proper target="_blank"
- [ ] Create featured media logo section

#### Project Detail Pages
- [ ] `/projects/mainet-x` - Dedicated project page
- [ ] `/projects/betrader-academy` - Dedicated project page

**Status:** 0% Complete

---

### Phase 6: Styling & Refinement 🎨 TO DO
- [ ] Apply preferred button styles (tp-btn-5, tp-btn-9)
- [ ] Implement typography styles (from elements-heading)
- [ ] Add animations/transitions
- [ ] Optimize images (compression, WebP format)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Implement parallax effects (quote section)
- [ ] Style media logo slider
- [ ] Create gradient overlays for cards

**Status:** 0% Complete

---

### Phase 7: Content Integration 📝 TO DO
- [ ] Copy content from .md files to components
- [ ] Proofread all text
- [ ] Add meta descriptions for SEO (each page)
- [ ] Set up social media links (LinkedIn, Instagram)
- [ ] Configure contact email addresses (contact@, press@)
- [ ] Add schema markup (Person, Organization, ProfilePage)
- [ ] Create downloadable CV PDF
- [ ] Add article links with descriptions

**Status:** 0% Complete

---

### Phase 8: SEO & Anti-Scam Strategy 🔍 NEW
- [ ] Implement SEO strategy for anti-scam:
  - [ ] Create educational content pages
  - [ ] Implement internal linking (/trust → /security → /faq → /media)
  - [ ] Add Person schema markup
  - [ ] Optimize meta descriptions with authority keywords
- [ ] Google Search Console setup
- [ ] Schema.org markup implementation
- [ ] Sitemap.xml generation
- [ ] Robots.txt configuration

**Status:** 0% Complete

---

### Phase 9: Testing & Launch 🚀 TO DO
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness testing
- [ ] Form submission testing
- [ ] Link checking (all internal and external links)
- [ ] SEO validation (meta tags, schema, sitemap)
- [ ] Performance optimization (Lighthouse score)
- [ ] Accessibility testing (WCAG compliance)
- [ ] Deploy to production
- [ ] DNS configuration
- [ ] SSL certificate setup
- [ ] 301 redirects setup (.ro → .com)

**Status:** 0% Complete

---

## 🚧 SETUP REQUIREMENTS

### Development Environment
- [x] Node.js installed
- [x] Harry template installed
- [ ] Development server running
- [ ] Git repository initialized

### Content Assets Needed
- [ ] Professional business photo (high-res)
- [ ] Media publication logos:
  - [ ] Forbes Romania logo
  - [ ] News.ro logo
  - [ ] EVZ.ro logo
  - [ ] Adevărul logo
  - [ ] Click.ro logo
  - [ ] Digital Journal logo
  - [ ] TechNewsTab logo
  - [ ] BarChart logo
  - [ ] Antena3 logo
  - [ ] WowBiz logo
- [ ] Project images (Mainet X, BeTrader Academy, Blockchain)
- [ ] CV/Resume PDF file
- [ ] Social media profile links

### External Services
- [ ] Email service setup (contact@, press@)
- [ ] Form submission service/API
- [ ] Analytics setup (Google Analytics)
- [ ] Search Console verification
- [ ] Hosting provider account
- [ ] Domain registration (.com, .ro)
- [ ] CDN setup (optional)

### Technical Requirements
- [ ] Custom header component creation
- [ ] Custom footer component creation
- [ ] Data files population (portfolio, services, blog)
- [ ] Custom page components (Security, Trust, FAQ)
- [ ] Schema markup implementation
- [ ] SEO metadata configuration

---

## 📋 PRIORITY TASKS (NEXT STEPS)

### Immediate (Week 1)
1. **Set up routing structure** - Create all page files
2. **Configure header/footer** - Custom components with navigation
3. **Gather content assets** - Photos, logos, images
4. **Populate data files** - Portfolio, services, media articles

### Short-term (Week 2-3)
1. **Develop homepage** - All 6 sections
2. **Create inner pages** - About, Projects, CV, Media, Contact
3. **Add new pages** - Security, Trust, FAQ
4. **Implement styling** - Apply preferred components and styles

### Medium-term (Week 4)
1. **Content integration** - Copy all text from .md files
2. **SEO implementation** - Schema markup, meta tags
3. **Testing** - Cross-browser, mobile, performance
4. **Launch preparation** - Hosting, DNS, SSL

---

## ⚠️ BLOCKERS & DEPENDENCIES

### Content Blockers
- **Professional photo needed** - Required for hero section
- **Media logos needed** - Required for press section
- **Article links verification** - Need to verify all external links are working

### Technical Blockers
- None identified yet

### Decision Needed
- [ ] Choose hosting provider
- [ ] Decide on form submission service
- [ ] Confirm email addresses (contact@, press@)
- [ ] Approve final content from .md files

---

## 📈 SUCCESS METRICS

### SEO Goals
- [ ] Google indexing within 48 hours
- [ ] Page 1 ranking for "Ciprian Ciceu"
- [ ] Featured snippets for key terms
- [ ] Media articles properly linked and credited

### Performance Goals
- [ ] Lighthouse score > 90
- [ ] Page load time < 3 seconds
- [ ] Mobile-friendly (100% responsive)
- [ ] All links working (0 broken links)

### Anti-Scam Strategy
- [ ] Educational content ranking higher than negative articles
- [ ] /trust, /security, /faq pages indexed
- [ ] Strong internal linking structure
- [ ] Authoritative media references prominently displayed

---

## 📝 NOTES

### Design Philosophy
- **Clean & Professional:** Minimal design, focus on content
- **Trust & Authority:** Professional photography, media logos, structured content
- **Education-Focused:** Clear, factual, informative tone
- **International Appeal:** Professional English, global standards

### Key Differences from Template
This is a **personal brand website**, not a corporate agency site. Adapt template components to:
- Use singular "I" instead of "we"
- Focus on individual achievements
- Highlight personal expertise
- Maintain professional but approachable tone

### SEO Strategy
- Use full name "Ciprian Ciceu" consistently
- Include key terms: FinTech, Blockchain, Entrepreneur, Educator
- Structure content with clear headings
- Add schema markup for Person/ProfilePage
- Optimize meta descriptions for each page

### Technical Notes
- **Framework:** Next.js Pages Router (file-based routing)
- **Styling:** SCSS + Bootstrap 5
- **Forms:** Formik + Yup validation
- **No jQuery Dependency**

---

**Last Updated:** 2025-12-24
**Version:** 1.0
**Status:** Ready for Implementation

---

## Quick Links

- [Template Documentation](template-map.md)
- [Preferred Components](prefered-components-from-theme.md)
- [Homepage Content](homepage.md)
- [About Content](about.md)
- [Projects Content](projects.md)
- [CV Content](cv.md)
- [Media Content](press&media.md)
- [Contact Content](contact.md)
