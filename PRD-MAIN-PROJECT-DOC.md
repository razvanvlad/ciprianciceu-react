# 📋 PRD - MAIN PROJECT DOCUMENTATION
## ciprianciceu.com - Personal Brand Website

> **Project:** Ciprian Ciceu Personal Brand Website
> **Template:** Harry - Creative Agency & Portfolio React Next.js Template v2.0.0
> **Framework:** React 16.0.6 + Next.js (Pages Router)
> **Purpose:** Professional personal brand website with SEO optimization and reputation management
> **Last Updated:** 2025-12-24
> **Status:** In Development (Phase 1)

---

## 📖 TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [Documentation Structure](#documentation-structure)
3. [Site Architecture](#site-architecture)
4. [Page Specifications](#page-specifications)
5. [Media & Press Strategy](#media--press-strategy)
6. [Security & Trust Pages](#security--trust-pages)
7. [SEO & Anti-Scam Strategy](#seo--anti-scam-strategy)
8. [Technical Specifications](#technical-specifications)
9. [Content Management](#content-management)
10. [Implementation Roadmap](#implementation-roadmap)
11. [Assets & Resources](#assets--resources)

---

## 🎯 PROJECT OVERVIEW

### Mission
Create a comprehensive personal brand website for Ciprian Ciceu that establishes authority, builds trust, showcases professional achievements, and implements a strategic SEO approach to manage online reputation.

### Key Objectives
1. **Authority Building** - Showcase expertise in FinTech, Blockchain, and Technology Education
2. **Trust & Transparency** - Implement security, trust, and FAQ pages to address concerns
3. **Media Presence** - Highlight legitimate media coverage and publications
4. **Reputation Management** - Strategic SEO to outrank negative content with educational resources
5. **Professional Showcase** - Display projects, achievements, and professional background

### Target Audience
- **Primary:** Professional contacts, investors, media, potential collaborators
- **Secondary:** Technology community, students, general public
- **Search Engines:** Google, Bing, AI search engines (ChatGPT, Perplexity, etc.)

### Success Criteria
- ✅ Professional, trustworthy online presence
- ✅ High search ranking for "Ciprian Ciceu" and related terms
- ✅ Clear presentation of legitimate media coverage
- ✅ Educational content outranking negative articles
- ✅ Strong internal linking for SEO authority

---

## 📚 DOCUMENTATION STRUCTURE

This is the main project documentation file that centralizes and references all other documentation.

### Core Documentation Files

| File | Purpose | Status |
|------|---------|--------|
| **PRD-MAIN-PROJECT-DOC.md** | Main project documentation (THIS FILE) | ✅ Active |
| [wireframe.md](wireframe.md) | Complete wireframe with implementation status | ✅ Updated |
| [template-map.md](template-map.md) | Harry template component reference | ✅ Complete |
| [prefered-components-from-theme.md](prefered-components-from-theme.md) | Component selection guide | ✅ Complete |
| [COLOR_SYSTEM_COMPLETE.md](COLOR_SYSTEM_COMPLETE.md) | Color system documentation | ✅ Complete |
| [seo-setup.md](seo-setup.md) | SEO configuration guide | ✅ Complete |
| [website-administration-seo.md](website-administration-seo.md) | SEO administration guide | ✅ Complete |
| [dns.md](dns.md) | DNS configuration | ✅ Complete |

### Page Content Files

| File | Purpose | Target Page | Status |
|------|---------|-------------|--------|
| [homepage.md](homepage.md) | Homepage content & structure | `/` | ✅ Complete |
| [about.md](about.md) | Full biography & professional story | `/about` | ✅ Complete |
| [projects.md](projects.md) | Projects & initiatives overview | `/projects` | ✅ Complete |
| [cv.md](cv.md) | Professional CV/Resume | `/cv` | ✅ Complete |
| [press&media.md](press&media.md) | Media coverage & publications | `/media` | ✅ Complete |
| [contact.md](contact.md) | Contact information & policies | `/contact` | ✅ Complete |

### New Content (This Document)
- **Media/Press Organization** - Structured by project categories
- **Security Page Content** - User protection & anti-phishing
- **Trust & FAQ Pages** - Transparency and verification
- **Project Detail Pages** - Mainet X & BeTrader Academy
- **Anti-Scam SEO Strategy** - Educational content approach

---

## 🏗️ SITE ARCHITECTURE

### Primary Navigation Structure

```
ciprianciceu.com
├── Home (/)
├── About (/about)
├── Projects (/projects)
│   ├── Mainet X (/projects/mainet-x) [NEW]
│   └── BeTrader Academy (/projects/betrader-academy) [NEW]
├── Media (/media)
├── CV (/cv)
├── Contact (/contact)
├── Security (/security) [NEW]
├── Trust (/trust) [NEW]
└── FAQ (/faq) [NEW]
```

### Page Hierarchy

**Level 1: Main Pages** (in header navigation)
- Home
- About
- Projects
- Media
- CV
- Contact

**Level 2: Support Pages** (in footer, internal linking)
- Security
- Trust
- FAQ
- Privacy
- Terms

**Level 3: Sub-Pages**
- Projects → Mainet X
- Projects → BeTrader Academy
- Projects → Blockchain Initiatives

### Internal Linking Strategy

**Hub Pages** (link to everything):
- `/trust` → links to `/security`, `/faq`, `/media`
- `/security` → links to `/trust`, `/faq`
- `/faq` → links to `/trust`, `/security`, `/media`
- `/media` → links to `/trust`, `/security`, `/faq`

**Purpose:** Create strong internal linking structure for SEO authority and reputation management.

---

## 📄 PAGE SPECIFICATIONS

### 1. HOMEPAGE (`/`)
**Status:** To Do
**Priority:** High
**Content Source:** [homepage.md](homepage.md)
**Template Reference:** Portfolio/Freelancer style

#### Sections:
1. **Hero Section**
   - Professional photo (right side)
   - Name, title, tagline (left side)
   - CTA buttons: [View Projects] [Media & Press]

2. **Authority/Credibility Cards**
   - 4 expertise areas:
     - 🧠 FinTech & AI
     - 🔗 Blockchain & Crypto
     - 🎓 Education & Training
     - 🌍 International Projects

3. **About Section (Short)**
   - 2-3 paragraphs
   - Link to full biography

4. **Projects Section**
   - 3 featured projects (cards)
   - Link to projects page

5. **Press & Media**
   - Logo slider with 10 publications
   - Link to media page

6. **Trust Statement**
   - Quote section (parallax)

**See:** [wireframe.md](wireframe.md) for detailed wireframe

---

### 2. ABOUT PAGE (`/about`)
**Status:** To Do
**Priority:** High
**Content Source:** [about.md](about.md)

#### Structure:
- Breadcrumb
- Full biography (9 sections from about.md)
- Optional: Experience timeline
- Optional: Skills visualization
- CTA: [Download CV] [View Projects] [Contact]

**See:** [about.md](about.md) for full content

---

### 3. PROJECTS PAGE (`/projects`)
**Status:** To Do
**Priority:** High
**Content Source:** [projects.md](projects.md)

#### Main Projects:
1. **Mainet X** - Links to `/projects/mainet-x`
2. **BeTrader Academy** - Links to `/projects/betrader-academy`
3. **Blockchain & Digital Innovation**
4. **International Teams & Events**

**See:** [projects.md](projects.md) for overview content

---

### 4. PROJECT DETAIL PAGE: MAINET X (`/projects/mainet-x`)
**Status:** To Do (NEW PAGE)
**Priority:** Medium

#### Content:

**Page Title:**
```
Mainet X – AI-Powered Fintech & Automated Trading Platform
```

**Main Content:**
```markdown
Mainet X is a fintech and technology platform focused on automated trading
systems, financial innovation and scalable digital infrastructure.

Developed with a strong emphasis on artificial intelligence, risk management
and system automation, Mainet X combines technology and strategic execution
to deliver advanced trading solutions adapted to modern financial markets.

The platform has been developed and scaled with international teams across
Europe, the Middle East and emerging markets, reflecting a global approach
to fintech innovation and digital transformation.

Mainet X represents a long-term vision centered on transparency, technology-
driven efficiency and sustainable growth within the global financial ecosystem.
```

#### Key Features Section:
- Automated trading systems
- AI-powered financial innovation
- Scalable digital infrastructure
- International team coordination
- Risk management focus
- 24/7 market execution

#### Media Coverage (Mainet X):
- Link to media section showing Mainet X articles
- See [Media Strategy](#media--press-strategy) below

#### CTA:
- [Learn More About Our Technology]
- [View Media Coverage]

---

### 5. PROJECT DETAIL PAGE: BETRADER ACADEMY (`/projects/betrader-academy`)
**Status:** To Do (NEW PAGE)
**Priority:** Medium

#### Content:

**Page Title:**
```
BeTrader Academy – Trading & Financial Education Platform
```

**Main Content:**
```markdown
BeTrader Academy is an education-focused initiative dedicated to trading,
financial literacy and practical market understanding.

The academy was developed to provide structured educational programs that
combine theoretical knowledge with real-world trading concepts, risk
management principles and strategic thinking.

With a strong emphasis on education as a foundation for long-term success,
BeTrader Academy has contributed to the development of professional learning
environments designed for individuals seeking a deeper understanding of
financial markets and trading systems.

The project reflects a commitment to responsible education, transparency
and continuous learning within the global financial ecosystem.
```

#### Key Features Section:
- Structured learning programs
- Financial literacy focus
- Risk management education
- Technology-assisted learning
- Community-based education
- Practical trading concepts

#### Media Coverage (BeTrader):
- Link to media section showing BeTrader articles
- See [Media Strategy](#media--press-strategy) below

#### CTA:
- [Learn More About Our Programs]
- [View Media Coverage]

---

### 6. CV/RESUME PAGE (`/cv`)
**Status:** To Do
**Priority:** Medium
**Content Source:** [cv.md](cv.md)

#### Structure:
- Professional Summary
- Core Expertise
- Professional Experience
- Founder – Mainet X
- Founder – BeTrader Academy
- Education & Academic Activity
- Media & Public Presence
- International Experience
- Professional Philosophy
- Languages
- Download CV button (PDF)

**See:** [cv.md](cv.md) for full content

---

### 7. CONTACT PAGE (`/contact`)
**Status:** To Do
**Priority:** Medium
**Content Source:** [contact.md](contact.md)

#### Structure:
- Contact form
- Contact information:
  - 📧 contact@ciprianciceu.com
  - 📧 press@ciprianciceu.com
  - 🔗 LinkedIn
  - 🌍 Location: Europe & Middle East
- Professional scope
- Privacy notice

**See:** [contact.md](contact.md) for full content

---

## 📰 MEDIA & PRESS STRATEGY

### Overview
Organize media coverage by **project categories** to create clear associations and improve SEO for each initiative.

### Media Page Structure (`/media`)

**URL:** `/media`
**Layout:** Organized by project categories (NOT just a list)

---

### 🔹 SECTION 1: FEATURED MEDIA (Top of Page)

**Large, clickable logos:**

| Logo | Status | Priority |
|------|--------|----------|
| Forbes Romania | ✅ Find logo | HIGH |
| News.ro | ✅ Find logo | HIGH |
| EVZ.ro | ✅ Find logo | HIGH |
| Adevărul | ✅ Find logo | HIGH |
| Click.ro | ✅ Find logo | MEDIUM |
| Digital Journal | ✅ Find logo | HIGH |
| Antena3 | ✅ Find logo | HIGH |
| TechNewsTab | ✅ Find logo | MEDIUM |
| BarChart | ✅ Find logo | MEDIUM |
| WowBiz | ✅ Find logo | LOW |

**Design:**
- Logo grid or slider
- Clickable (scroll to article)
- Prominent placement
- "Featured in Media" heading

---

### 🔹 SECTION 2: CIPRIAN CICEU – PUBLIC PROFILE & LEADERSHIP

**Category Description:**
```
Media coverage highlighting Ciprian Ciceu's public leadership, professional
background and involvement in technology-driven initiatives.
```

#### Articles:

**1. News.ro – RE:START România pornește în cursa pentru alegerile locale**
- **URL:** https://www.news.ro/politic-intern/re-start-romania-porneste-in-cursa-pentru-alegerile-locale-cu-4-candidati-in-bucuresti-1922402019002020081319455790
- **Description:**
  ```
  Article highlighting Ciprian Ciceu's public leadership role and involvement
  in initiatives focused on transparency, technology and institutional reform.
  ```
- **Link Text:** [Read full article →]

**2. EVZ.ro – Ciprian Ciceu și-a depus candidatura la Primăria Sectorului 1**
- **URL:** https://evz.ro/ciprian-ciceu-si-a-depus-candidatura-la-primaria-sectorului-1-din-partea-restart-romania.html
- **Description:**
  ```
  Coverage of Ciprian Ciceu's public engagement and leadership profile,
  emphasizing his background in technology, entrepreneurship and strategic
  management.
  ```
- **Link Text:** [Read full article →]

**3. WowBiz.ro – Candidatul surpriză la Primăria Sectorului 1**
- **URL:** https://www.wowbiz.ro/exclusiv-cum-a-fost-surprins-noul-candidat-surpriza-la-primaria-sectorului-1-foto-20096636
- **Description:**
  ```
  Media coverage presenting Ciprian Ciceu as an emerging public figure, with
  a background in business, education and technology-driven initiatives.
  ```
- **Link Text:** [Read full article →]

---

### 🔹 SECTION 3: MAINET X – FINTECH & AI TRADING PLATFORM

**Category Description:**
```
International media coverage of Mainet X, an AI-powered fintech platform
focused on automated trading systems and financial innovation.
```

#### Articles:

**1. Digital Journal – Mainet X Celebrates 5-Year Anniversary with AI-Powered Financial Innovation**
- **URL:** https://www.digitaljournal.com/pr/news/revupmarketer/mainet-x-celebrates-5-year-anniversary-1131800285.html
- **Description:**
  ```
  International coverage of Mainet X as an AI-powered fintech platform,
  highlighting innovation, automated trading systems and global expansion.
  ```
- **Link Text:** [Read full article →]
- **Link to Project:** [Learn more about Mainet X →](/projects/mainet-x)

**2. TechNewsTab – Mainet X Announces 5-Year Anniversary and Dubai Event**
- **URL:** https://www.technewstab.com/mainet-x-announces-5-year-anniversary-and-dubai-event/
- **Description:**
  ```
  Article covering Mainet X's growth, international presence and milestone
  events within the fintech and digital trading ecosystem.
  ```
- **Link Text:** [Read full article →]
- **Link to Project:** [Learn more about Mainet X →](/projects/mainet-x)

**3. BarChart – Mainet X launches AI-driven automated trading platform**
- **URL:** https://www.barchart.com/story/news/35092029/mainet-x-launches-ai-driven-automated-trading-platform-with-24-7-market-execution
- **Description:**
  ```
  Industry-focused coverage on the launch of Mainet X, emphasizing AI-driven
  automation, market execution and fintech innovation.
  ```
- **Link Text:** [Read full article →]
- **Link to Project:** [Learn more about Mainet X →](/projects/mainet-x)

---

### 🔹 SECTION 4: BETRADER ACADEMY – EDUCATION & TRADING

**Category Description:**
```
Media coverage of BeTrader Academy, an educational initiative focused on
financial literacy, trading education and risk management training.
```

#### Articles:

**1. Antena3.ro – Billions în București: academia care te pregătește pentru trading**
- **URL:** https://www.antena3.ro/economic/companii/billions-in-bucuresti-academia-care-te-pregateste-pentru-risc-mize-mari-si-eficienta-in-trading-539069.html
- **Description:**
  ```
  National media feature on BeTrader Academy, focusing on education, risk
  management and professional trading training programs.
  ```
- **Link Text:** [Read full article →]
- **Link to Project:** [Learn more about BeTrader Academy →](/projects/betrader-academy)

**2. Click.ro – BeTrader Academy din Pipera**
- **URL:** https://click.ro/actualitate/national/betrader-academy-din-pipera-a-creat-prima-37991.html
- **Description:**
  ```
  Coverage highlighting BeTrader Academy's role in financial education and
  structured trading learning environments.
  ```
- **Link Text:** [Read full article →]
- **Link to Project:** [Learn more about BeTrader Academy →](/projects/betrader-academy)

**3. Adevărul.ro – Academia internațională din Pipera**
- **URL:** https://adevarul.ro/economie/academia-internationala-din-pipera-care-te-invata-1972598.html
- **Description:**
  ```
  Article presenting BeTrader Academy as an international education initiative
  focused on trading, technology and financial literacy.
  ```
- **Link Text:** [Read full article →]
- **Link to Project:** [Learn more about BeTrader Academy →](/projects/betrader-academy)

---

### 🔹 SECTION 5: BLOCKCHAIN & INNOVATION

**Category Description:**
```
Coverage related to blockchain technology, digital innovation and technology
education initiatives.
```

**Note:** This section will grow over time with additional articles, interviews, and educational content.

**Placeholder Content:**
```
Additional media coverage, interviews and educational content related to
blockchain technology, fintech innovation and digital transformation will
be featured in this section.
```

---

### 🔹 SECTION 6: INTERVIEWS & COMMENTARY

**Content:**
```markdown
Ciprian Ciceu has participated in interviews and editorial discussions
addressing topics such as:

• Technology and digital transformation
• Blockchain education and adoption
• Fintech infrastructure and automation
• Entrepreneurship and leadership
• Public policy and institutional reform

These contributions emphasize clarity, education and responsible innovation
rather than promotional narratives.
```

---

### 🔹 SECTION 7: MEDIA CONTACT

**Content:**
```markdown
For press inquiries, interview requests or official statements:

📧 press@ciprianciceu.com
📧 contact@ciprianciceu.com
```

**Internal Links:**
- [View Professional Profile →](/about)
- [View Projects →](/projects)
- [Contact →](/contact)

---

### Media Page SEO Notes

**IMPORTANT SEO RULES:**

1. ❌ **DON'T** create a simple list of links
2. ✅ **DO** organize by categories (projects)
3. ✅ **DO** add 1-2 sentence descriptions for each article
4. ✅ **DO** use proper heading structure (H2, H3)
5. ✅ **DO** link to project pages
6. ✅ **DO** use target="_blank" for external links
7. ✅ **DO** add internal links to /trust, /security, /faq
8. ✅ **DO** feature logos prominently

**Why:** Google rewards well-structured content. Category organization shows authority and improves ranking.

---

## 🔐 SECURITY & TRUST PAGES

### 1. SECURITY PAGE (`/security`)

**Status:** To Do (NEW PAGE)
**Priority:** HIGH (Anti-scam strategy)
**Purpose:** User protection, anti-phishing, establishes trust

#### Page Content:

**URL:** `/security`

**Page Title:** Security & User Protection

**Meta Description:**
```
Learn about security best practices, account protection, anti-phishing
guidelines and official communication channels for Ciprian Ciceu's platforms
and initiatives.
```

---

#### SECTION 1: Introduction

```markdown
# Security & User Protection

Security and user protection are essential elements of any serious digital
platform. This page explains common security practices, account protection
measures, and how users can verify official communications and avoid
impersonation or phishing attempts.
```

---

#### SECTION 2: Account Security Best Practices

```markdown
## Account Security Best Practices

Users are encouraged to apply standard security practices when accessing
online platforms, including the use of strong passwords, two-factor
authentication (2FA), and secure devices.

Security is a shared responsibility. While platforms implement technical
safeguards, users should also remain vigilant and follow recommended
protection guidelines.
```

---

#### SECTION 3: Two-Factor Authentication (2FA)

```markdown
## Two-Factor Authentication (2FA)

Two-factor authentication (2FA) adds an extra layer of protection by
requiring a secondary verification step in addition to a password.

In some cases, platforms may introduce temporary security cooldowns after
enabling or disabling 2FA. These measures are designed to prevent
unauthorized access and protect user accounts from potential compromise.
```

---

#### SECTION 4: Phishing & Impersonation Awareness

```markdown
## Phishing & Impersonation Awareness

Phishing attempts and impersonation are common risks across the internet.
Users should always verify the source of any communication before taking
action.

**Best practices include:**
* Checking official domain names carefully
* Avoiding links from unknown or unofficial sources
* Never sharing passwords, recovery codes, or verification codes
* Bookmarking official websites and accessing them directly
```

---

#### SECTION 5: Official Communication Channels

```markdown
## Official Communication Channels

Official announcements, updates, and security notices are communicated only
through verified channels, including the official website and documented
support systems.

Users should be cautious of messages received through unofficial social
media accounts, private messages, or third-party platforms claiming to
represent an organization or individual.

**Official Channels:**
* Website: ciprianciceu.com
* Email: contact@ciprianciceu.com
* Email (Press): press@ciprianciceu.com

Always verify the domain and sender before responding to any communication.
```

---

#### SECTION 6: Payment & Transaction Safety

```markdown
## Payment & Transaction Safety

Payment processing and transaction handling often involve external,
regulated providers. Each transaction is subject to predefined security
rules, verification steps, and network confirmations.

Users should carefully verify payment details, supported assets, and
networks before initiating transactions to avoid errors or delays caused
by incorrect submissions.

**Key Points:**
* Use only official payment channels
* Verify recipient addresses
* Double-check transaction details
* Wait for network confirmations
```

---

#### SECTION 7: Platform Updates & System Changes

```markdown
## Platform Updates & System Changes

Security updates, infrastructure upgrades, or interface improvements may
occasionally require users to refresh their browser, clear cache, or
reauthenticate.

These steps are normal technical processes and help ensure users are
accessing the most up-to-date and secure version of the platform.
```

---

#### SECTION 8: User Responsibility & Education

```markdown
## User Responsibility & Education

Staying informed is one of the most effective security measures. Users are
encouraged to review educational materials, official documentation, and
trusted media references to better understand how digital platforms operate.

Independent verification and critical evaluation are essential components
of responsible online participation.

**Recommended Resources:**
* [Frequently Asked Questions →](/faq)
* [Trust & Transparency →](/trust)
* [Media Coverage →](/media)
```

---

#### SECTION 9: Disclaimer

```markdown
## Disclaimer

**Disclaimer:** This page is provided for informational and educational
purposes only and does not constitute legal, financial, or investment advice.

Users are responsible for conducting their own research and due diligence
before engaging with any platform, service, or financial product.
```

---

#### Internal Links (Footer of Security Page):

**Related Pages:**
- [Trust & Transparency →](/trust)
- [Frequently Asked Questions →](/faq)
- [Media Coverage →](/media)
- [Contact →](/contact)

---

### 2. TRUST PAGE (`/trust`)

**Status:** To Do (NEW PAGE)
**Priority:** HIGH (Anti-scam strategy)
**Purpose:** Transparency, verification, authority building

#### Suggested Structure:

**Page Title:** Trust & Transparency

**Sections:**
1. **Introduction** - Commitment to transparency
2. **Verification** - How to verify official information
3. **Media References** - Link to media page showing legitimate coverage
4. **Educational Approach** - Focus on education over speculation
5. **Official Channels** - How to contact and verify
6. **Disclaimer** - Legal protection

**Internal Links:**
- Link to `/media` (media coverage)
- Link to `/security` (security practices)
- Link to `/faq` (common questions)
- Link to `/about` (professional background)

---

### 3. FAQ PAGE (`/faq`)

**Status:** To Do (NEW PAGE)
**Priority:** HIGH (Anti-scam strategy)
**Purpose:** Address common questions, improve SEO

#### Suggested Questions:

1. **Who is Ciprian Ciceu?**
   - Link to `/about`

2. **What is Mainet X?**
   - Link to `/projects/mainet-x`

3. **What is BeTrader Academy?**
   - Link to `/projects/betrader-academy`

4. **How can I verify official communications?**
   - Link to `/security`

5. **Where has Ciprian Ciceu been featured in media?**
   - Link to `/media`

6. **How can I contact Ciprian Ciceu?**
   - Link to `/contact`

7. **What are the official websites and channels?**
   - List official domains and emails

8. **Is this website official?**
   - Confirm ciprianciceu.com is official

#### Schema Markup:
- Implement FAQPage schema
- Each Q&A as Question/Answer schema
- Improves Google search appearance
- May show as featured snippet

**Internal Links:**
- Link to `/security`
- Link to `/trust`
- Link to `/media`
- Link to `/about`
- Link to `/projects`

---

## 🎯 SEO & ANTI-SCAM STRATEGY

### Overview
Create educational, authoritative content that outranks negative articles through SEO best practices and strategic content organization.

### Strategy Components

#### 1. Educational Content Approach
**Principle:** Education over hype, clarity over speculation

**Tactics:**
- ✅ Create `/security` page (user protection)
- ✅ Create `/trust` page (transparency)
- ✅ Create `/faq` page (common questions)
- ✅ Organize media by categories (not simple lists)
- ✅ Add educational context to all content

**Goal:** Position as educator and authority, not promoter

---

#### 2. Internal Linking Structure

**Hub Pages** (most important):
- `/trust` → main authority page
- `/security` → user protection
- `/faq` → answers questions
- `/media` → proves legitimacy

**Linking Pattern:**
```
Every page should link to:
├── /trust
├── /security
├── /faq
└── /media

These pages link to each other (hub)
```

**Why:** Google rewards sites with strong internal linking. Creates "hub" pages that build authority.

---

#### 3. Schema Markup Implementation

**Required Schema Types:**

**Person Schema** (on homepage, about page):
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ciprian Ciceu",
  "jobTitle": "FinTech Entrepreneur & Blockchain Educator",
  "description": "Technology entrepreneur with expertise in FinTech, blockchain and digital education",
  "url": "https://ciprianciceu.com",
  "sameAs": [
    "https://linkedin.com/in/...",
    "https://instagram.com/..."
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Mainet X"
  }
}
```

**FAQPage Schema** (on FAQ page):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Who is Ciprian Ciceu?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ciprian Ciceu is a technology entrepreneur..."
    }
  }]
}
```

**Organization Schema** (for Mainet X, BeTrader):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mainet X",
  "description": "AI-powered fintech and trading platform",
  "founder": {
    "@type": "Person",
    "name": "Ciprian Ciceu"
  }
}
```

---

#### 4. Meta Descriptions (SEO)

**Homepage:**
```
Ciprian Ciceu - FinTech entrepreneur, blockchain educator and founder with
expertise in AI-powered trading platforms, financial education and digital
innovation. Featured in Forbes, Digital Journal and international media.
```

**About:**
```
Biography of Ciprian Ciceu - Technology entrepreneur with experience in
fintech, blockchain education and international business development. Learn
about professional background and achievements.
```

**Media:**
```
Media coverage and press articles featuring Ciprian Ciceu in Forbes, Digital
Journal, Antena 3, Adevărul and other publications. Official media references
and verified publications.
```

**Security:**
```
Security best practices, anti-phishing guidelines and official communication
channels. Learn how to verify official information and protect your account.
```

**Trust:**
```
Trust and transparency information. Learn how to verify official channels,
media references and educational resources related to Ciprian Ciceu's
professional work.
```

**FAQ:**
```
Frequently asked questions about Ciprian Ciceu, Mainet X, BeTrader Academy
and professional projects. Official answers to common questions.
```

---

#### 5. Content Ranking Strategy

**Objective:** Outrank negative content with educational resources

**How It Works:**

1. **Create Authority Content**
   - `/trust` - establishes transparency
   - `/security` - shows responsibility
   - `/faq` - answers questions directly
   - `/media` - proves legitimacy

2. **Google Rewards:**
   - Well-structured content
   - Internal linking
   - Schema markup
   - Educational value
   - Fresh, updated content

3. **Result:**
   - Educational pages rank higher
   - Negative articles pushed down
   - First page shows: official site, media coverage, educational content
   - Negative content appears on page 2-3 (if at all)

**Note:** This is NOT about hiding information - it's about providing better, more comprehensive information that naturally ranks higher.

---

#### 6. Keyword Strategy

**Primary Keywords:**
- Ciprian Ciceu
- Ciprian Ciceu entrepreneur
- Ciprian Ciceu blockchain
- Ciprian Ciceu fintech

**Long-tail Keywords:**
- Mainet X AI trading platform
- BeTrader Academy financial education
- Ciprian Ciceu media coverage
- Ciprian Ciceu projects

**Defensive Keywords:**
- Ciprian Ciceu official website
- Ciprian Ciceu verified
- Ciprian Ciceu security
- Ciprian Ciceu trust

**Usage:**
- Use in H1, H2 tags
- Include in meta descriptions
- Natural placement in content
- Schema markup

---

#### 7. Google Search Console & Sitemap

**Required Setup:**

1. **Google Search Console**
   - Verify ownership
   - Submit sitemap.xml
   - Monitor search performance
   - Track ranking for keywords

2. **Sitemap.xml Structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ciprianciceu.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ciprianciceu.com/about</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ciprianciceu.com/media</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ciprianciceu.com/trust</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ciprianciceu.com/security</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ciprianciceu.com/faq</loc>
    <priority>0.8</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

3. **robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://ciprianciceu.com/sitemap.xml
```

---

## 💻 TECHNICAL SPECIFICATIONS

### Technology Stack

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Framework** | Next.js | Pages Router | React-based SSR framework |
| **React** | React | 16.0.6 | UI library |
| **Styling** | SCSS + Bootstrap | 5.x | Styling system |
| **Forms** | Formik + Yup | Latest | Form handling & validation |
| **Animations** | Custom + WOW.js | - | Page animations |
| **Template** | Harry | 2.0.0 | Base template |

### File Structure

```
ciprianciceu-react/
├── src/
│   ├── pages/              # Next.js pages (routes)
│   │   ├── index.jsx       # Homepage
│   │   ├── about.jsx       # About page
│   │   ├── projects.jsx    # Projects page
│   │   ├── media.jsx       # Media page [NEW]
│   │   ├── cv.jsx          # CV page
│   │   ├── contact.jsx     # Contact page
│   │   ├── security.jsx    # Security page [NEW]
│   │   ├── trust.jsx       # Trust page [NEW]
│   │   ├── faq.jsx         # FAQ page [NEW]
│   │   └── projects/
│   │       ├── mainet-x.jsx        # [NEW]
│   │       └── betrader-academy.jsx # [NEW]
│   │
│   ├── components/         # React components
│   │   ├── hero-banners/
│   │   ├── abouts/
│   │   ├── portfolios/
│   │   ├── services/
│   │   ├── testimonials/
│   │   ├── brands/
│   │   ├── blogs/
│   │   └── common/
│   │
│   ├── layout/             # Layout components
│   │   ├── headers/
│   │   └── footers/
│   │
│   ├── data/               # Data files
│   │   ├── portfolio-data.js  # Project data
│   │   ├── service-data.js    # Expertise data
│   │   ├── blog-data.js       # Media articles data
│   │   └── menu-data.js       # Navigation data
│   │
│   └── svg/                # SVG components
│
├── public/
│   └── assets/
│       ├── img/            # Images
│       │   ├── logo/       # Logos
│       │   ├── brand/      # Media publication logos [NEW]
│       │   ├── project/    # Project images [NEW]
│       │   └── author/     # Personal photos [NEW]
│       └── scss/           # SCSS files
│
└── documentation/          # All .md files
    ├── PRD-MAIN-PROJECT-DOC.md [THIS FILE]
    ├── wireframe.md
    ├── template-map.md
    ├── homepage.md
    ├── about.md
    ├── projects.md
    ├── cv.md
    ├── press&media.md
    └── contact.md
```

### Data Files to Create/Update

**1. Portfolio Data** (`src/data/portfolio-data.js`):
```javascript
// Add 3 projects:
{
  id: 1,
  title: "Mainet X",
  category: "FinTech & AI",
  description: "AI-powered trading & education ecosystem",
  image: "/assets/img/project/mainet-x.jpg",
  link: "/projects/mainet-x",
  home: true
}
// BeTrader Academy
// Blockchain Initiatives
```

**2. Service Data** (`src/data/service-data.js`):
```javascript
// Add 4 expertise areas:
{
  id: 1,
  icon: <FinTechIcon />,
  title: "FinTech & AI",
  subtitle: "Automated systems and digital finance platforms",
  home: true
}
// Blockchain & Crypto
// Education & Training
// International Projects
```

**3. Blog Data** (`src/data/blog-data.js`):
```javascript
// Add media articles (10 articles):
{
  id: 1,
  category: "Ciprian Ciceu - Public Profile",
  publication: "News.ro",
  title: "RE:START România launches candidates",
  description: "Article highlighting public leadership role...",
  link: "https://www.news.ro/...",
  logo: "/assets/img/brand/newsro.png",
  date: "2020-08-13",
  home_media: true
}
// Add all 10 articles from media strategy
```

**4. Menu Data** (`src/data/menu-data.js`):
```javascript
// Update navigation:
[
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  {
    title: "Projects",
    link: "/projects",
    submenus: [
      { title: "All Projects", link: "/projects" },
      { title: "Mainet X", link: "/projects/mainet-x" },
      { title: "BeTrader Academy", link: "/projects/betrader-academy" }
    ]
  },
  { title: "Media", link: "/media" },
  { title: "CV", link: "/cv" },
  { title: "Contact", link: "/contact" }
]
```

---

### Components to Create

**1. Custom Header** (based on HeaderFive/Six):
- File: `src/layout/headers/header-ciprian.jsx`
- Navigation with 6 main items
- Press button (highlighted)
- Mobile responsive
- Sticky on scroll

**2. Custom Footer** (based on FooterFive):
- File: `src/layout/footers/footer-ciprian.jsx`
- Minimal design
- Social links (LinkedIn, Instagram)
- Email: contact@, press@
- Footer links: Security, Trust, FAQ, Privacy, Terms
- Copyright © 2025

**3. Media Category Component** (NEW):
- File: `src/components/media/media-category.jsx`
- Category header
- Article cards with:
  - Publication name
  - Article title
  - Description (1-2 sentences)
  - External link
  - Project link (if applicable)

**4. Featured Media Logos** (NEW):
- File: `src/components/brands/featured-media.jsx`
- Logo grid/slider
- Clickable logos
- Responsive

**5. Security Page Components** (NEW):
- File: `src/components/security/security-content.jsx`
- Structured content sections
- Internal links
- Disclaimer

---

## 📁 CONTENT MANAGEMENT

### Content Organization

All content is managed in markdown files for easy editing:

| Content Type | Location | Managed By |
|--------------|----------|------------|
| **Page Content** | .md files in root | Content team |
| **Data Files** | src/data/*.js | Developers |
| **Images** | public/assets/img/ | Designers |
| **Styles** | public/assets/scss/ | Designers |

### Content Update Workflow

1. **Update .md file** - Edit content in markdown
2. **Copy to component** - Paste into React component
3. **Test locally** - Verify display
4. **Deploy** - Push to production

### Media Asset Requirements

**Images Needed:**

| Asset | Size | Format | Priority |
|-------|------|--------|----------|
| Professional photo (hero) | 800x1000px | JPG/WebP | HIGH |
| Forbes logo | 200x60px | PNG/SVG | HIGH |
| News.ro logo | 200x60px | PNG/SVG | HIGH |
| EVZ logo | 200x60px | PNG/SVG | HIGH |
| Adevărul logo | 200x60px | PNG/SVG | HIGH |
| Digital Journal logo | 200x60px | PNG/SVG | HIGH |
| Antena3 logo | 200x60px | PNG/SVG | HIGH |
| Click logo | 200x60px | PNG/SVG | MEDIUM |
| BarChart logo | 200x60px | PNG/SVG | MEDIUM |
| TechNewsTab logo | 200x60px | PNG/SVG | MEDIUM |
| WowBiz logo | 200x60px | PNG/SVG | LOW |
| Mainet X image | 600x400px | JPG/WebP | MEDIUM |
| BeTrader image | 600x400px | JPG/WebP | MEDIUM |

---

## 🚀 IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Week 1) ⏳ IN PROGRESS

**Setup:**
- [x] Review all documentation
- [x] Create wireframe with status tracking
- [x] Create main PRD document
- [ ] Set up development environment
- [ ] Create git repository
- [ ] Set up routing structure

**Content:**
- [ ] Gather all content assets (photos, logos)
- [ ] Verify all external article links
- [ ] Prepare CV PDF for download

**Estimated Completion:** End of Week 1

---

### Phase 2: Data & Components (Week 2)

**Data Files:**
- [ ] Populate portfolio data (3 projects)
- [ ] Populate service data (4 expertise areas)
- [ ] Populate blog data (10 media articles)
- [ ] Update menu data (navigation)

**Components:**
- [ ] Create custom header
- [ ] Create custom footer
- [ ] Create media category component
- [ ] Create featured media logos component
- [ ] Create security page component

**Estimated Completion:** End of Week 2

---

### Phase 3: Core Pages (Week 2-3)

**Homepage:**
- [ ] Hero section
- [ ] Authority cards
- [ ] About section
- [ ] Projects section
- [ ] Media logos slider
- [ ] Trust statement

**Inner Pages:**
- [ ] About page (full biography)
- [ ] Projects page (overview)
- [ ] CV page (resume + PDF)
- [ ] Contact page (form)

**Estimated Completion:** End of Week 3

---

### Phase 4: New Pages (Week 3-4)

**Trust & Security:**
- [ ] Media page (organized by categories)
- [ ] Security page (anti-phishing, best practices)
- [ ] Trust page (transparency, verification)
- [ ] FAQ page (with schema markup)

**Project Details:**
- [ ] Mainet X project page
- [ ] BeTrader Academy project page

**Estimated Completion:** End of Week 4

---

### Phase 5: SEO & Optimization (Week 4)

**SEO Implementation:**
- [ ] Add schema markup (Person, Organization, FAQPage)
- [ ] Add meta descriptions (all pages)
- [ ] Create sitemap.xml
- [ ] Configure robots.txt
- [ ] Internal linking (hub pages)
- [ ] Google Search Console setup

**Performance:**
- [ ] Image optimization
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Performance testing (Lighthouse)

**Estimated Completion:** End of Week 4

---

### Phase 6: Testing & Launch (Week 4-5)

**Testing:**
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Form submission testing
- [ ] Link checking (internal + external)
- [ ] SEO validation
- [ ] Accessibility testing

**Launch:**
- [ ] Deploy to production
- [ ] DNS configuration
- [ ] SSL certificate
- [ ] 301 redirects (.ro → .com)
- [ ] Google Analytics
- [ ] Monitor search indexing

**Estimated Completion:** End of Week 5

---

### Success Metrics & KPIs

**Week 1:**
- ✅ All documentation complete
- ✅ Development environment ready
- ✅ Content assets gathered

**Week 2:**
- ✅ All data files populated
- ✅ Custom components created

**Week 3:**
- ✅ Core pages functional (Home, About, Projects, CV, Contact)

**Week 4:**
- ✅ All pages complete (including Security, Trust, FAQ)
- ✅ SEO implemented

**Week 5:**
- ✅ Testing complete
- ✅ Site launched
- ✅ Google indexing confirmed

**Post-Launch (Week 6+):**
- Monitor search rankings
- Track analytics
- Respond to any issues
- Content updates as needed

---

## 📦 ASSETS & RESOURCES

### Required Assets Checklist

#### Images
- [ ] Professional business photo (high-resolution)
- [ ] 10 media publication logos (see list in Media section)
- [ ] Mainet X project image
- [ ] BeTrader Academy project image
- [ ] Favicon (multiple sizes)

#### Documents
- [ ] CV/Resume PDF (downloadable)

#### Accounts & Services
- [ ] Hosting account
- [ ] Domain registration (.com, .ro)
- [ ] Email service (contact@, press@)
- [ ] Google Analytics account
- [ ] Google Search Console account
- [ ] Form submission service/API

#### Links & Credentials
- [ ] LinkedIn profile URL
- [ ] Instagram profile URL
- [ ] Social media assets

---

### External Links to Verify

All media article links must be verified before publishing:

**Ciprian Ciceu - Public Profile:**
1. ✅ https://www.news.ro/politic-intern/re-start-romania-porneste-in-cursa-pentru-alegerile-locale-cu-4-candidati-in-bucuresti-1922402019002020081319455790
2. ✅ https://evz.ro/ciprian-ciceu-si-a-depus-candidatura-la-primaria-sectorului-1-din-partea-restart-romania.html
3. ✅ https://www.wowbiz.ro/exclusiv-cum-a-fost-surprins-noul-candidat-surpriza-la-primaria-sectorului-1-foto-20096636

**Mainet X:**
4. ✅ https://www.digitaljournal.com/pr/news/revupmarketer/mainet-x-celebrates-5-year-anniversary-1131800285.html
5. ✅ https://www.technewstab.com/mainet-x-announces-5-year-anniversary-and-dubai-event/
6. ✅ https://www.barchart.com/story/news/35092029/mainet-x-launches-ai-driven-automated-trading-platform-with-24-7-market-execution

**BeTrader Academy:**
7. ✅ https://www.antena3.ro/economic/companii/billions-in-bucuresti-academia-care-te-pregateste-pentru-risc-mize-mari-si-eficienta-in-trading-539069.html
8. ✅ https://click.ro/actualitate/national/betrader-academy-din-pipera-a-creat-prima-37991.html
9. ✅ https://adevarul.ro/economie/academia-internationala-din-pipera-care-te-invata-1972598.html

---

## 📝 APPENDIX

### A. Quick Reference Links

**Main Documentation:**
- [PRD-MAIN-PROJECT-DOC.md](PRD-MAIN-PROJECT-DOC.md) ← **YOU ARE HERE**
- [wireframe.md](wireframe.md)
- [template-map.md](template-map.md)

**Content Files:**
- [homepage.md](homepage.md)
- [about.md](about.md)
- [projects.md](projects.md)
- [cv.md](cv.md)
- [press&media.md](press&media.md)
- [contact.md](contact.md)

**Reference:**
- [prefered-components-from-theme.md](prefered-components-from-theme.md)
- [COLOR_SYSTEM_COMPLETE.md](COLOR_SYSTEM_COMPLETE.md)
- [seo-setup.md](seo-setup.md)

---

### B. Key Decisions & Rationale

**Why organize media by project categories?**
- Better SEO (Google rewards organized content)
- Clearer association between projects and coverage
- Easier for visitors to understand
- More professional presentation

**Why create Security/Trust/FAQ pages?**
- Addresses concerns proactively
- Builds authority and trust
- SEO strategy to outrank negative content
- Shows transparency and responsibility

**Why strong internal linking?**
- Google rewards hub pages
- Improves site-wide SEO authority
- Helps all pages rank better
- Natural navigation for users

**Why schema markup?**
- Improves search appearance
- May show as featured snippets
- Helps AI search engines (ChatGPT, etc.)
- Validates information as "official"

---

### C. Anti-Scam Strategy Summary

**The Approach:**
**DON'T attack** → **DO educate**

**What NOT to do:**
- ❌ Don't mention "scam" aggressively
- ❌ Don't attack other people/projects
- ❌ Don't create defensive content

**What TO do:**
- ✅ Create educational content (Security, Trust, FAQ)
- ✅ Show legitimate media coverage (organized, professional)
- ✅ Use schema markup (establish as "official")
- ✅ Strong internal linking (build SEO authority)
- ✅ Transparency and verification (build trust)

**Result:**
Educational content ranks higher → pushes negative content down → visitors see official, authoritative information first.

---

### D. Contact Information

**Official Website:**
- ciprianciceu.com (primary)
- .ro → 301 redirect to .com

**Official Email:**
- contact@ciprianciceu.com
- press@ciprianciceu.com

**Social Media:**
- LinkedIn: [Profile URL needed]
- Instagram: [Profile URL needed]

---

## ✅ STATUS SUMMARY

**Documentation:** ✅ Complete
- Main PRD created
- Wireframe updated with status tracking
- All content files reviewed
- Media strategy defined
- Security pages specified
- SEO strategy documented

**Implementation:** ⏳ Phase 1 (25% complete)
- Setup in progress
- Content assets needed
- Development to begin

**Next Steps:**
1. Gather content assets (photos, logos)
2. Set up development environment
3. Create routing structure
4. Begin data file population

---

**Last Updated:** 2025-12-24
**Version:** 1.0
**Document Status:** COMPLETE & READY FOR IMPLEMENTATION

---

**End of PRD - Main Project Documentation**
