# Harry Template - Complete Content & Component Map

> **Template:** Harry - Creative Agency & Portfolio React Next.js Template
> **Version:** 2.0.0
> **Framework:** React 16.0.6 + Next.js (Pages Router)
> **Last Updated:** 2025-12-18

## Table of Contents

1. [Template Overview](#template-overview)
2. [Homepage Variations](#homepage-variations)
3. [Content Types & Data Structures](#content-types--data-structures)
4. [All Pages & Routes](#all-pages--routes)
5. [Component Sections Library](#component-sections-library)
6. [Common/Utility Components](#commonutility-components)
7. [Component Composition Patterns](#component-composition-patterns)
8. [Quick Reference Tables](#quick-reference-tables)

---

## Template Overview

### Key Statistics

| Metric | Count |
|--------|-------|
| **Homepage Variations** | 14 |
| **Total Pages** | 89 |
| **Content Types** | 8 |
| **Component Sections** | 150+ |
| **Blog Items** | 63 |
| **Products** | 36 |
| **Portfolio Items** | 26 |
| **Team Members** | 23 |
| **Services** | 23 |
| **Events** | 8 |

### Framework Details

- **Router:** Next.js Pages Router (file-based routing)
- **Routing Location:** `src/pages/`
- **Data Location:** `src/data/`
- **Components Location:** `src/components/`
- **Styling:** SCSS + Bootstrap 5
- **Form Handling:** Formik + Yup
- **No jQuery Dependency**

### Supported Business Types

1. **Creative Agency** - Full-service digital agency
2. **Freelancer** - Individual service provider
3. **Lawyer/Law Firm** - Legal services
4. **Startup/SaaS** - Tech product launch
5. **Architecture** - Architecture & interior design
6. **Photographer** - Photography portfolio
7. **Politician** - Political campaign/biography
8. **Portfolio** - Designer/artist showcase
9. **E-commerce/Shop** - Online retail
10. **General Business** - Multi-purpose

---

## Homepage Variations

### 1. Main Home (`/home`)

**File:** [src/pages/home.jsx](src/pages/home.jsx)
**Target:** General multi-purpose homepage
**Page Title:** "Home Main"

**Content Sections (in order):**
1. `HomeSliderBanner` - Hero slider with fade effect
2. `HomeAbout` - About section with counter
3. `HomeCounter` - Statistics counter
4. `ServicesHome` - Services grid
5. `HomeEvents` - Events listing
6. `HomeTeams` - Team members grid
7. `HomeFaq` - FAQ accordion
8. `HomePortfolio` - Portfolio showcase
9. `HomeTestimonial` - Client testimonials
10. `HomeBlogs` - Latest blog posts

**Data Used:**
- Blog data (`home: true`)
- Portfolio data (`home: true`)
- Service data (`home: true`)
- Team data (`home: true`)
- Event data (`home: true`)

---

### 2. Agency (`/home-agency`)

**File:** [src/pages/home-agency.jsx](src/pages/home-agency.jsx)
**Target:** Professional B2B agency
**Page Title:** "Home Agency"
**Header:** `HeaderFour`
**Footer:** `FooterFour`

**Content Sections (in order):**
1. `HomeAgencyBanner` - Agency-focused hero
2. `ServicesAgency` - Agency services list
3. `HomeAgencyAbout` - About with shapes & video modal
4. `AgencyCounter` - Statistics
5. `HomeAgencyPortfolio` - Work showcase
6. `AgencyAward` - Awards & recognition
7. `AgencyPricing` - Pricing tiers
8. `AgencyTestimonial` - Client testimonials (3-column carousel)
9. `AgencyBrands` - Client logos
10. `AgencyBlogs` - News/articles
11. `AgencyCta` - Call-to-action with decorative shapes

**Data Used:**
- Blog data (`home_agency: true`)
- Portfolio data (`home_agency: true`)
- Service data (`home_agency: true`)
- Team data (if applicable)

---

### 3. Freelancer (`/home-freelancer`)

**File:** [src/pages/home-freelancer.jsx](src/pages/home-freelancer.jsx)
**Target:** Individual service providers

**Content Sections (in order):**
1. `FreelancerBanner` - Personal hero section
2. `FreelancerBrands` - Client/partner logos
3. `HomeFreelancerAbout` - Personal bio
4. `HomeFreelancerPortfolio` - Project showcase with shapes
5. `FreelancerSkill` - Skills display
6. `FreelancerAward` - Achievements
7. `FreelancerTestimonial` - Client feedback
8. `FreelancerBlogs` - Articles
9. `FreelancerCta` - Hire CTA

**Data Used:**
- Blog data (`home_freelancer: true`)
- Portfolio data (`home_freelancer: true` - includes shapes, icon, tags, image arrays)
- Service data (`home_freelancer: true`)

---

### 4. Lawyer (`/home-lawyer`)

**File:** [src/pages/home-lawyer.jsx](src/pages/home-lawyer.jsx)
**Target:** Law firms & legal services

**Content Sections (in order):**
1. `HomeLawyerBanner` - Legal services hero
2. `HomeLawyerAward` - Awards & credentials
3. `HomeLawyerCase` - Case studies/portfolio
4. `HomeLawyerAbout` - Firm profile
5. `LawyerFacts` - Key statistics
6. `LawyerHistory` - Firm timeline
7. `LawyerVideo` - Video introduction
8. `ServicesLawyer` - Legal services
9. `LawyerBlogs` - Legal insights
10. `LawyerTestimonial` - Client testimonials
11. `LawyerTeams` - Attorneys
12. `LawyerCounter` - Statistics
13. `LawyerContact` - Contact form

**Data Used:**
- Blog data (`home_lawyer: true`)
- Portfolio data (`home_lower: true` - includes price field)
- Service data (`home_lawyer: true`)
- Team data (`home_lawyer: true`)

---

### 5. Startup (`/home-startup`)

**File:** [src/pages/home-startup.jsx](src/pages/home-startup.jsx)
**Target:** SaaS products & startups

**Content Sections (in order):**
1. `HomeStartupBanner` - Product hero
2. `StartupFeatures` - Key features
3. `HomeStartupAbout` - Product overview
4. `StartupCounter` - Statistics
5. `StartupServices` - Product features as services
6. `StartupFeatureLists` - Detailed features
7. `StartupSupport` - Support/help
8. `StartUpTestimonial` - Customer testimonials
9. `StartUpPricing` - Pricing plans
10. `StartUpFaqs` - FAQ accordion
11. `StartUpBlogs` - Company blog
12. `StartUpCta` - Product CTA

**Data Used:**
- Blog data (`home_start_up: true`)
- Service data (`home_startup: true`)

---

### 6. Architecture (`/home-architecture`)

**File:** [src/pages/home-architecture.jsx](src/pages/home-architecture.jsx)
**Target:** Architecture & interior design firms

**Content Sections (in order):**
1. `ArchitectureBanner` - Visual portfolio hero
2. `ArchitectureServices` - Services grid
3. `ArchitectureAbout` - Firm overview
4. `ArchitectureCounter` - Project statistics
5. `ArchitecturePortfolio` - Project showcase
6. `ArchitectureAwards` - Accolades
7. `ArchitectureTestimonial` - Client reviews
8. `ArchitectureBrands` - Partner logos
9. `ArchBlogs` - Architecture news

**Data Used:**
- Blog data (`home_architecture: true` - includes category field)
- Portfolio data (`home_architecture: true`)
- Service data (`home_architecture: true`)
- Team data (`home_architecture: true`)

---

### 7. Photographer (`/home-photographer`)

**File:** [src/pages/home-photographer.jsx](src/pages/home-photographer.jsx)
**Target:** Photography portfolio

**Content Sections (in order):**
1. `PhotographerBanner` - Visual hero
2. `PAboutSelf` - Personal bio
3. `PAboutEducation` - Credentials
4. `PAboutSkill` - Skills
5. `PhotographerPortfolio` - Photo gallery
6. `PhotographyServices` - Photography services
7. `PhotographyPrice` - Package pricing
8. `PhotographyTestimonial` - Client feedback
9. `PhotographyBrands` - Client logos
10. `PhotographyBlogs` - Photography blog

**Data Used:**
- Portfolio data (`home_photographer: true` - includes camera, city, date fields)

---

### 8. Politician (`/home-politician`)

**File:** [src/pages/home-politician.jsx](src/pages/home-politician.jsx)
**Target:** Political campaigns

**Content Sections (in order):**
1. `PoliticianBanner` - Campaign hero
2. `PoliticianBiography` - Political bio
3. `PoliticianFeature` - Platform features
4. `PoliticianEvents` - Campaign events
5. `PoliticianTeams` - Campaign staff
6. `PoliticianTestimonial` - Endorsements
7. `PoliticianCounter` - Campaign statistics
8. `PoliticianBlogs` - News/updates
9. `PoliticianSubscribe` - Newsletter signup
10. `PoliticianCta` - Campaign CTA

**Data Used:**
- Blog data (`home_politician: true` - nested structure with `sm_blogs` array)
- Event data (`home_politician: true`)
- Team data (`home_politician: true` - includes phone field)

---

### 9. Portfolio (`/home-portfolio`)

**File:** [src/pages/home-portfolio.jsx](src/pages/home-portfolio.jsx)
**Target:** Designer/creative portfolio

**Content Sections (in order):**
1. `PortfolioBanner` - Creative hero
2. `PortfolioAbout` - Designer bio
3. `PortfolioCounter` - Statistics
4. `PortfolioService` - Services offered
5. `PortfolioPortfolio` - Work showcase
6. `PortfolioTestimonial` - Client reviews
7. `PortfolioBlogs` - Articles

**Data Used:**
- Blog data (`home_portfolio: true`)
- Portfolio data (`home_portfolio: true`)

---

### 10. Creative (`/home-creative`)

**File:** [src/pages/home-creative.jsx](src/pages/home-creative.jsx)
**Target:** Creative studios

**Content Sections (in order):**
1. `CreativeBanner` - Creative agency hero
2. `CreativeServices` - Creative services
3. `CreativeAbout` - Studio overview
4. `CreativeCounter` - Statistics
5. `CreativePortfolio` - Work showcase
6. `CreativeTestimonial` - Client testimonials
7. `CreativeBrands` - Client logos
8. `CreativeBlogs` - Creative blog
9. `CreativeCta` - Service CTA

**Data Used:**
- Blog data (`home_creative: true` - includes video_id field)
- Service data (`home_creative: true` - includes color CSS class)

---

### 11. Shop (`/home-shop`)

**File:** [src/pages/home-shop.jsx](src/pages/home-shop.jsx)
**Target:** E-commerce store

**Content Sections (in order):**
1. `ShopHeroBanner` - E-commerce hero
2. `ProductFeature` - Product features
3. `ShopAbout` - Store overview
4. `ShopCounter` - Statistics
5. `ShopServices` - Store services/guarantees
6. `ShopTestimonial` - Customer reviews
7. `ShopPricing` - Special offers
8. `ShopBlogs` - Store blog
9. `ShopCta` - Conversion CTA

**Data Used:**
- Product data (all 36 products)

---

### 12. Swiper (`/home-swiper`)

**File:** [src/pages/home-swiper.jsx](src/pages/home-swiper.jsx)
**Target:** Vertical slider demo

**Content Sections:**
- Swiper/Slider components
- Vertical navigation

---

### 13. Vertical (`/home-vertical`)

**File:** [src/pages/home-vertical.jsx](src/pages/home-vertical.jsx)
**Target:** Vertical layout demo

**Content Sections:**
- Vertical slider navigation
- Full-height sections

---

### 14. Landing Page (`/`)

**File:** [src/pages/index.jsx](src/pages/index.jsx)
**Target:** Main entry point / demo selector

**Purpose:** Showcase all homepage variations or redirect to main home

---

## Content Types & Data Structures

### 1. Blog Data

**File:** [src/data/blog-data.js](src/data/blog-data.js)
**Total Items:** 63 blog posts
**Variants:** 10+ template-specific types

#### Basic Blog Schema (Home)

```javascript
{
  id: number,
  img: image,
  tag: string,              // Category tag
  title: string,            // Post title (can be JSX)
  date: string,             // Publication date
  read: string,             // Read time (e.g., "4 Min")
  delay: string,            // Animation delay (e.g., ".3s")
  author_img: image,
  author_name: string,
  comments: number,         // Comment count
  home: true               // Flag for home page
}
```

#### Lawyer Blog Schema

```javascript
{
  id: number,
  img: image,
  tag: string,
  title: string,
  sm_text: string,          // Short description
  author_img: image,
  author_name: string,
  date: string,
  comment: number,
  home_lawyer: true
}
```

#### Freelancer Blog Schema

```javascript
{
  id: number,
  img: image,
  tag: string,
  title: string,
  sm_text: string,
  author_img: image,
  author_name: string,
  date: string,
  delay: string,
  home_freelancer: true
}
```

#### Agency Blog Schema

```javascript
{
  id: number,
  img: image,
  tag: string,
  title: JSX.Element,       // Title with line breaks
  sm_text: string,
  author_img: image,
  comment: number,
  author_name: string,
  date: string,
  delay: string,
  home_agency: true
}
```

#### Startup Blog Schema

```javascript
{
  id: number,
  img: image,
  tag: string,
  title: string,
  sm_text: string,
  author_img: image,
  comment: number,
  see: number,              // View count
  author_name: string,
  date: string,
  home_start_up: true
}
```

#### Creative Blog Schema

```javascript
{
  id: number,
  img: image,
  icon: JSX.Element,        // SVG icon
  tag: string,
  title: JSX.Element,
  sm_text: string,
  author_img: image,
  author_name: string,
  date: string,
  delay: string,
  video_id: string,         // YouTube video ID
  home_creative: true
}
```

#### Portfolio Blog Schema

```javascript
{
  id: number,
  img: image,
  tag: string,
  title: JSX.Element,
  date: string,
  delay: string,
  home_portfolio: true
}
```

#### Architecture Blog Schema

```javascript
{
  id: number,
  img: image,
  tag: string,
  category: string,         // Additional category field
  title: JSX.Element,
  date: string,
  home_architecture: true
}
```

#### Politician Blog Schema

```javascript
{
  id: number,
  img: image,
  sm_blogs: [               // Nested small blogs array
    {
      id: number,
      tag: string,
      title: string,
      author_img: image,
      author_name: string,
      date: string,
      comments: number
    }
  ],
  p_blog_1: true,
  p_blog_big: true,
  home_politician: true
}
```

#### Blog Post Box Schema (Full Posts)

```javascript
{
  id: number,
  img: image,
  author_name: string,
  date: string,
  comments: number,
  title: string,
  desc: string,             // Full description
  blog_post_box: true
}
```

**Special Post Types:**

1. **Video Post:**
```javascript
{
  video: true,
  video_id: string,
  // ... other fields
}
```

2. **Quote Post:**
```javascript
{
  blog_quote: true,
  sm_desc: string,          // Quote text
  // ... other fields
}
```

3. **Audio Post:**
```javascript
{
  blog_audio: true,
  audio_url: string,
  // ... other fields
}
```

4. **Slider Post:**
```javascript
{
  blog_slider: true,
  slider_images: [image1, image2, ...],
  // ... other fields
}
```

#### Blog Grid/Masonry Schema

```javascript
{
  id: number,
  tag: string,
  img: image,
  date: string,
  title: string,
  sm_desc: string,
  author_name: string,
  author_img: image,
  comments: number,
  watch: number,            // View count
  blog_grid: true           // or blog_masonry: true
}
```

---

### 2. Product Data

**File:** [src/data/products.js](src/data/products.js)
**Total Items:** 36 products

#### Product Schema

```javascript
{
  id: number,
  title: string,
  slug: string,             // URL-friendly title
  parent: string,           // Main category (e.g., "Call Phone &Tablets")
  children: string,         // Subcategory (e.g., "Call Phone")
  image: image,
  originalPrice: string,    // Original price (e.g., "239.00")
  price: string,            // Current price
  discount: number,         // Discount percentage (0-100)
  quantity: number,         // Stock quantity
  type: string,             // Product type (e.g., "Phones", "Tablets")
  tag: [string],            // Array of tags (e.g., ["Phone", "Tablets", "Headphone"])
  SKU: string,              // Stock keeping unit (e.g., "29045-SB-1")
  shortDesc: string,        // Short description
  description: string,      // Full description
  reviews: number,          // Review count
  relatedImages: [          // Product gallery images
    {img: image},
    {img: image},
    // ...
  ],
  topRated: boolean,        // Top rated flag (products 1-12)
  bestSelling: boolean,     // Best selling flag (products 13-24)
  latestProduct: boolean,   // Latest product flag (products 25-36)
  badge: string             // Optional badge ("sale", "new")
}
```

**Product Categories:**
- Products 1-12: Top Rated
- Products 13-24: Best Selling
- Products 25-36: Latest Products

---

### 3. Portfolio Data

**File:** [src/data/portfolio-data.js](src/data/portfolio-data.js)
**Total Items:** 26 portfolio items

#### Basic Portfolio Schema

```javascript
{
  id: number,
  bg: image,                // or 'img'
  tag: string,              // Category
  title: string,            // Can be JSX
  text: string,             // Description
  delay: string,            // Animation delay
  home: true
}
```

#### Lawyer Portfolio Schema (Cases)

```javascript
{
  id: number,
  bg: image,
  price: string,            // Case value
  title: string,
  text: string,
  delay: string,
  home_lower: true
}
```

#### Freelancer Portfolio Schema

```javascript
{
  id: number,
  shapes: [                 // Decorative shapes array
    {id, img, class}
  ],
  icon: JSX.Element,        // SVG icon
  tags: [string],           // Multiple tags
  title: JSX.Element,
  image: [                  // Multiple images
    {id, img},
    {id, img}
  ],
  bg_color: string,         // Background color class
  diff: boolean,            // Optional difference flag
  home_freelancer: true
}
```

#### Agency Portfolio Schema

```javascript
{
  id: number,
  img: image,
  tag: string,
  title: string,
  delay: string,
  home_agency: true
}
```

#### Photography Portfolio Schema

```javascript
{
  id: number,
  img: image,
  tag: string,
  title: string,
  camera: string,           // Camera used
  city: string,             // Location
  date: string,             // Shoot date
  home_photographer: true
}
```

#### General Portfolio Schema

```javascript
{
  id: number,
  img: image,
  tag: string,
  title: string,
  home_portfolio: true
}
```

---

### 4. Service Data

**File:** [src/data/service-data.js](src/data/service-data.js)
**Total Items:** 23 services

#### Basic Service Schema

```javascript
{
  id: number,
  icon: JSX.Element,        // SVG icon
  title: string,
  subtitle: string,         // Description
  home: true
}
```

#### Lawyer Service Schema

```javascript
{
  id: number,
  delay: string,
  bg: image,
  icon: JSX.Element,
  title: string,
  subtitle: string,
  home_lawyer: true
}
```

#### Agency Service Schema

```javascript
{
  id: number,
  delay: string,
  img: image,
  title: string,
  subtitle: string,
  home_agency: true
}
```

#### Startup Service Schema

```javascript
{
  id: number,
  delay: string,
  icon: JSX.Element,
  title: string,
  subtitle: string,
  home_startup: true
}
```

#### Creative Service Schema

```javascript
{
  id: number,
  delay: string,
  icon: JSX.Element,
  title: string,
  subtitle: string,
  color: string,            // CSS color class
  home_creative: true
}
```

---

### 5. Team Data

**File:** [src/data/team-data.js](src/data/team-data.js)
**Total Items:** 23 team members

#### Team Member Schema

```javascript
{
  id: number,
  img: image,
  name: string,
  title: string,            // Job title/position
  mail: string,             // Email (mailto: link)
  social_links: [
    {
      link: string,         // URL
      target: string,       // "_blank"
      icon: string,         // Font Awesome class (e.g., "fa-brands fa-facebook-f")
      name: string          // Social platform name
    }
  ],
  home: true                // or template-specific flag
}
```

#### Extended Team Schema (Lawyer, Creative)

```javascript
{
  id: number,
  img: image,
  name: string,
  title: string,
  sm_desc: string,          // Short bio
  mail: string,
  delay: string,
  social_links: [...],
  home_lawyer: true         // or home_creative, home_architecture
}
```

#### Politician Team Schema

```javascript
{
  id: number,
  img: image,
  name: string,
  title: string,
  phone: string,            // Phone number
  mail: string,
  social_links: [...],
  home_politician: true
}
```

**Team Page Flag:**
- `team_p: true` - Marks items for team page display

---

### 6. Event Data

**File:** [src/data/event-data.js](src/data/event-data.js)
**Total Items:** 8 events

#### Home Event Schema

```javascript
{
  id: number,
  title: string,
  speakers: [               // Array of speaker images
    image1,
    image2,
    image3
  ],
  date: string,
  delay: string,
  home: true
}
```

#### Politician Event Schema

```javascript
{
  id: number,
  img: image,
  event_thumb_title: string,
  event_thumb_subtitle: string,
  tag: string,
  date: string,
  title: string,
  location: string,
  home_politician: true
}
```

---

### 7. Menu Data

**File:** [src/data/menu-data.js](src/data/menu-data.js)
**Total Items:** 6 main menu items + 40+ submenus

#### Dropdown Menu Item Schema

```javascript
{
  id: number,
  hasDropdown: true,
  title: string,
  link: string,
  submenus: [
    {
      title: string,
      link: string
    }
  ]
}
```

#### Mega Menu Item Schema

```javascript
{
  id: number,
  title: string,
  megaMenu: true,
  link: string,
  mega_menus: [
    {
      title: string,        // Section title
      link: string,
      submenus: [
        {title, link},
        // ...
      ]
    }
  ],
  pages: boolean            // Optional pages flag
}
```

**Main Menu Structure:**

1. **Demos** (Dropdown)
   - 13 homepage variations

2. **Elements** (Mega Menu)
   - 4 sections with multiple widget showcases

3. **Portfolio** (Dropdown)
   - 10 portfolio layout styles

4. **Blog** (Dropdown)
   - 8 blog layouts

5. **Pages** (Mega Menu)
   - 4 sections with various page types

6. **Contact** (Dropdown)
   - 2 contact variations

---

### 8. Index File

**File:** [src/data/index.js](src/data/index.js)
**Purpose:** Central export for all data modules

```javascript
export { default as menu_data } from './menu-data';
export { default as service_data } from './service-data';
export { default as event_data } from './event-data';
export { default as team_data } from './team-data';
export { default as portfolio_data } from './portfolio-data';
export { default as blog_data } from './blog-data';
```

---

## All Pages & Routes

### Route Organization

**Total Files:** 89
**Router Type:** Next.js Pages Router
**Base Directory:** `src/pages/`

### 1. Homepage Variations (14 pages)

| Route | File | Description |
|-------|------|-------------|
| `/` | [index.jsx](src/pages/index.jsx) | Landing page / Demo selector |
| `/home` | [home.jsx](src/pages/home.jsx) | Main home page |
| `/home-agency` | [home-agency.jsx](src/pages/home-agency.jsx) | Agency demo |
| `/home-architecture` | [home-architecture.jsx](src/pages/home-architecture.jsx) | Architecture demo |
| `/home-creative` | [home-creative.jsx](src/pages/home-creative.jsx) | Creative agency demo |
| `/home-freelancer` | [home-freelancer.jsx](src/pages/home-freelancer.jsx) | Freelancer demo |
| `/home-lawyer` | [home-lawyer.jsx](src/pages/home-lawyer.jsx) | Lawyer/legal demo |
| `/home-photographer` | [home-photographer.jsx](src/pages/home-photographer.jsx) | Photographer demo |
| `/home-politician` | [home-politician.jsx](src/pages/home-politician.jsx) | Politician demo |
| `/home-portfolio` | [home-portfolio.jsx](src/pages/home-portfolio.jsx) | Portfolio demo |
| `/home-shop` | [home-shop.jsx](src/pages/home-shop.jsx) | Shop/eCommerce demo |
| `/home-startup` | [home-startup.jsx](src/pages/home-startup.jsx) | Startup demo |
| `/home-swiper` | [home-swiper.jsx](src/pages/home-swiper.jsx) | Swiper/slider demo |
| `/home-vertical` | [home-vertical.jsx](src/pages/home-vertical.jsx) | Vertical layout demo |

---

### 2. Blog Pages (9 pages)

| Route | File | Content Type | Description |
|-------|------|--------------|-------------|
| `/blog` | [blog.jsx](src/pages/blog.jsx) | Blog listing | Main blog index |
| `/blog-details` | [blog-details/index.jsx](src/pages/blog-details/index.jsx) | Blog post | Default blog detail |
| `/blog-details/[blogId]` | [blog-details/[blogId].jsx](src/pages/blog-details/[blogId].jsx) | Blog post | Dynamic blog by ID |
| `/blog-details-2` | [blog-details-2.jsx](src/pages/blog-details-2.jsx) | Blog post | Blog detail variant 2 |
| `/blog-grid` | [blog-grid.jsx](src/pages/blog-grid.jsx) | Blog listing | Grid layout |
| `/blog-grid-2` | [blog-grid-2.jsx](src/pages/blog-grid-2.jsx) | Blog listing | Grid layout variant 2 |
| `/blog-grid-sidebar` | [blog-grid-sidebar.jsx](src/pages/blog-grid-sidebar.jsx) | Blog listing | Grid with sidebar |
| `/blog-list-sidebar` | [blog-list-sidebar.jsx](src/pages/blog-list-sidebar.jsx) | Blog listing | List with sidebar |
| `/blog-masonry` | [blog-masonry.jsx](src/pages/blog-masonry.jsx) | Blog listing | Masonry layout |

**Data Used:** Blog data from [src/data/blog-data.js](src/data/blog-data.js)

---

### 3. Portfolio Pages (10 pages)

| Route | File | Content Type | Description |
|-------|------|--------------|-------------|
| `/portfolio` | [portfolio.jsx](src/pages/portfolio.jsx) | Portfolio grid | Main portfolio |
| `/portfolio-2` | [portfolio-2.jsx](src/pages/portfolio-2.jsx) | Portfolio grid | Portfolio variant 2 |
| `/portfolio-details` | [portfolio-details.jsx](src/pages/portfolio-details.jsx) | Portfolio item | Classic detail view |
| `/portfolio-details-list` | [portfolio-details-list.jsx](src/pages/portfolio-details-list.jsx) | Portfolio item | List detail view |
| `/portfolio-details-slider` | [portfolio-details-slider.jsx](src/pages/portfolio-details-slider.jsx) | Portfolio item | Slider detail view |
| `/portfolio-details-video` | [portfolio-details-video.jsx](src/pages/portfolio-details-video.jsx) | Portfolio item | Video detail view |
| `/portfolio-gallery` | [portfolio-gallery.jsx](src/pages/portfolio-gallery.jsx) | Portfolio grid | Gallery layout |
| `/portfolio-masonry` | [portfolio-masonry.jsx](src/pages/portfolio-masonry.jsx) | Portfolio grid | Masonry layout |
| `/portfolio-metro` | [portfolio-metro.jsx](src/pages/portfolio-metro.jsx) | Portfolio grid | Metro layout |
| `/portfolio-slider` | [portfolio-slider.jsx](src/pages/portfolio-slider.jsx) | Portfolio grid | Slider layout |

**Data Used:** Portfolio data from [src/data/portfolio-data.js](src/data/portfolio-data.js)

---

### 4. Services Pages (4 pages)

| Route | File | Content Type | Description |
|-------|------|--------------|-------------|
| `/services` | [services.jsx](src/pages/services.jsx) | Services listing | Main services |
| `/services-2` | [services-2.jsx](src/pages/services-2.jsx) | Services listing | Services variant 2 |
| `/services-3` | [services-3.jsx](src/pages/services-3.jsx) | Services listing | Services variant 3 |
| `/service-details` | [service-details.jsx](src/pages/service-details.jsx) | Service item | Service detail page |

**Data Used:** Service data from [src/data/service-data.js](src/data/service-data.js)

---

### 5. Shop/Product Pages (6 pages)

| Route | File | Content Type | Description |
|-------|------|--------------|-------------|
| `/shop` | [shop.jsx](src/pages/shop.jsx) | Product listing | Shop grid view |
| `/shop-right-sidebar` | [shop-right-sidebar.jsx](src/pages/shop-right-sidebar.jsx) | Product listing | Shop with sidebar |
| `/product-details` | [product-details/index.jsx](src/pages/product-details/index.jsx) | Product item | Default product detail |
| `/product-details/[productId]` | [product-details/[productId].jsx](src/pages/product-details/[productId].jsx) | Product item | Dynamic product by ID |
| `/cart` | [cart.jsx](src/pages/cart.jsx) | Shopping cart | Cart page |
| `/checkout` | [checkout.jsx](src/pages/checkout.jsx) | Checkout form | Checkout flow |
| `/wishlist` | [wishlist.jsx](src/pages/wishlist.jsx) | Saved items | Wishlist/favorites |

**Data Used:** Product data from [src/data/products.js](src/data/products.js)

---

### 6. Team Pages (2 pages)

| Route | File | Content Type | Description |
|-------|------|--------------|-------------|
| `/team` | [team.jsx](src/pages/team.jsx) | Team listing | Team members grid |
| `/team-details` | [team-details.jsx](src/pages/team-details.jsx) | Team member | Team member bio |

**Data Used:** Team data from [src/data/team-data.js](src/data/team-data.js)

---

### 7. About & Contact Pages (4 pages)

| Route | File | Content Type | Description |
|-------|------|--------------|-------------|
| `/about` | [about.jsx](src/pages/about.jsx) | About page | Company about |
| `/about-me` | [about-me.jsx](src/pages/about-me.jsx) | About page | Personal about |
| `/contact` | [contact.jsx](src/pages/contact.jsx) | Contact form | Contact page |
| `/contact-2` | [contact-2.jsx](src/pages/contact-2.jsx) | Contact form | Contact variant 2 |

---

### 8. Authentication Pages (3 pages)

| Route | File | Content Type | Description |
|-------|------|--------------|-------------|
| `/login` | [login.jsx](src/pages/login.jsx) | Auth form | Login page |
| `/register` | [register.jsx](src/pages/register.jsx) | Auth form | Registration page |
| `/forgot` | [forgot.jsx](src/pages/forgot.jsx) | Auth form | Password reset |

---

### 9. Event & Job Pages (3 pages)

| Route | File | Content Type | Description |
|-------|------|--------------|-------------|
| `/event-details` | [event-details.jsx](src/pages/event-details.jsx) | Event item | Event detail page |
| `/job` | [job.jsx](src/pages/job.jsx) | Job listing | Job openings |
| `/job-details` | [job-details.jsx](src/pages/job-details.jsx) | Job item | Job detail page |

**Data Used:** Event data from [src/data/event-data.js](src/data/event-data.js)

---

### 10. Pricing, FAQ & Search (3 pages)

| Route | File | Content Type | Description |
|-------|------|--------------|-------------|
| `/pricing` | [pricing.jsx](src/pages/pricing.jsx) | Pricing table | Pricing plans |
| `/faq` | [faq.jsx](src/pages/faq.jsx) | FAQ accordion | FAQ page |
| `/search` | [search.jsx](src/pages/search.jsx) | Search results | Search page |

---

### 11. Utility Pages (4 pages)

| Route | File | Content Type | Description |
|-------|------|--------------|-------------|
| `/coming-soon` | [coming-soon.jsx](src/pages/coming-soon.jsx) | Utility | Coming soon page |
| `/help` | [help.jsx](src/pages/help.jsx) | Utility | Help/support |
| `/policy` | [policy.jsx](src/pages/policy.jsx) | Utility | Privacy policy |
| `/terms` | [terms.jsx](src/pages/terms.jsx) | Utility | Terms of service |

---

### 12. Elements/Components Showcase (23 pages)

Component demonstration pages showing UI elements:

| Route | File | Showcases |
|-------|------|-----------|
| `/elements-accordion` | [elements-accordion.jsx](src/pages/elements-accordion.jsx) | Accordion components |
| `/elements-blog-post` | [elements-blog-post.jsx](src/pages/elements-blog-post.jsx) | Blog post components |
| `/elements-brand` | [elements-brand.jsx](src/pages/elements-brand.jsx) | Brand/logo components |
| `/elements-button` | [elements-button.jsx](src/pages/elements-button.jsx) | Button components |
| `/elements-carousel` | [elements-carousel.jsx](src/pages/elements-carousel.jsx) | Carousel components |
| `/elements-cta` | [elements-cta.jsx](src/pages/elements-cta.jsx) | CTA components |
| `/elements-form` | [elements-form.jsx](src/pages/elements-form.jsx) | Form components |
| `/elements-gallery` | [elements-gallery.jsx](src/pages/elements-gallery.jsx) | Gallery components |
| `/elements-heading` | [elements-heading.jsx](src/pages/elements-heading.jsx) | Heading components |
| `/elements-iconbox` | [elements-iconbox.jsx](src/pages/elements-iconbox.jsx) | Icon box components |
| `/elements-instagram` | [elements-instagram.jsx](src/pages/elements-instagram.jsx) | Instagram feed |
| `/elements-map` | [elements-map.jsx](src/pages/elements-map.jsx) | Map components |
| `/elements-parallax` | [elements-parallax.jsx](src/pages/elements-parallax.jsx) | Parallax components |
| `/elements-pricing` | [elements-pricing.jsx](src/pages/elements-pricing.jsx) | Pricing components |
| `/elements-process` | [elements-process.jsx](src/pages/elements-process.jsx) | Process components |
| `/elements-shop` | [elements-shop.jsx](src/pages/elements-shop.jsx) | Shop components |
| `/elements-skill` | [elements-skill.jsx](src/pages/elements-skill.jsx) | Skill/progress bars |
| `/elements-social` | [elements-social.jsx](src/pages/elements-social.jsx) | Social components |
| `/elements-subscribe` | [elements-subscribe.jsx](src/pages/elements-subscribe.jsx) | Subscribe components |
| `/elements-tab` | [elements-tab.jsx](src/pages/elements-tab.jsx) | Tab components |
| `/elements-team` | [elements-team.jsx](src/pages/elements-team.jsx) | Team components |
| `/elements-testimonial` | [elements-testimonial.jsx](src/pages/elements-testimonial.jsx) | Testimonial components |
| `/elements-video` | [elements-video.jsx](src/pages/elements-video.jsx) | Video components |

---

### 13. Dynamic Routes (2 routes)

| Route Pattern | File | Parameter | Description |
|---------------|------|-----------|-------------|
| `/blog-details/[blogId]` | [blog-details/[blogId].jsx](src/pages/blog-details/[blogId].jsx) | `blogId` | Dynamic blog posts |
| `/product-details/[productId]` | [product-details/[productId].jsx](src/pages/product-details/[productId].jsx) | `productId` | Dynamic products |

**Access Parameters:**
```javascript
import { useRouter } from 'next/router';
const router = useRouter();
const { blogId } = router.query;
```

---

### 14. Special Framework Files (4 files)

| File | Purpose |
|------|---------|
| [_app.jsx](src/pages/_app.jsx) | Global app wrapper |
| [_document.jsx](src/pages/_document.jsx) | Custom HTML document |
| [404.jsx](src/pages/404.jsx) | Custom 404 error page |
| [api/hello.js](src/pages/api/hello.js) | API route example |

---

## Component Sections Library

**Total Component Directories:** 48+
**Total Section Variations:** 150+
**Base Directory:** `src/components/`

### 1. Hero/Banner Sections (11 variations)

**Directory:** `src/components/hero-banners/`

| Component | File | Used In | Features |
|-----------|------|---------|----------|
| Home Slider Banner | [home-slider-banner.jsx](src/components/hero-banners/home-slider-banner.jsx) | Main Home | Slider with fade, form integration |
| Agency Banner | [home-agency-banner.jsx](src/components/hero-banners/home-agency-banner.jsx) | Agency | Professional B2B hero |
| Freelancer Banner | [home-freelancer-banner.jsx](src/components/hero-banners/home-freelancer-banner.jsx) | Freelancer | Personal portfolio hero |
| Lawyer Banner | [home-lowyer-banner.jsx](src/components/hero-banners/home-lowyer-banner.jsx) | Lawyer | Legal services hero |
| Startup Banner | [home-startup-banner.jsx](src/components/hero-banners/home-startup-banner.jsx) | Startup | SaaS product hero |
| Photographer Banner | [photographer-banner.jsx](src/components/hero-banners/photographer-banner.jsx) | Photographer | Visual portfolio hero |
| Politician Banner | [politician-banner.jsx](src/components/hero-banners/politician-banner.jsx) | Politician | Campaign hero |
| Portfolio Banner | [portfolio-banner.jsx](src/components/hero-banners/portfolio-banner.jsx) | Portfolio | Creative showcase hero |
| Architecture Banner | [architecture-banner.jsx](src/components/hero-banners/architecture-banner.jsx) | Architecture | Design portfolio hero |
| Creative Banner | [creative-banner.jsx](src/components/hero-banners/creative-banner.jsx) | Creative | Creative agency hero |
| Shop Hero Banner | [shop-hero-banner.jsx](src/components/hero-banners/shop-hero-banner.jsx) | Shop | E-commerce hero |

---

### 2. About Sections (10+ variations)

**Directory:** `src/components/abouts/`

| Component | File | Used In | Features |
|-----------|------|---------|----------|
| Home About | [home-about.jsx](src/components/abouts/home-about.jsx) | Main Home | Counter, author info |
| Agency About | [home-agency-about.jsx](src/components/abouts/home-agency-about.jsx) | Agency | Shapes, video modal |
| Freelancer About | [home-freelancer-about.jsx](src/components/abouts/home-freelancer-about.jsx) | Freelancer | Personal bio |
| Lawyer About | [home-lowyer-about.jsx](src/components/abouts/home-lowyer-about.jsx) | Lawyer | Firm profile |
| Startup About | [home-stratup-about.jsx](src/components/abouts/home-stratup-about.jsx) | Startup | Product overview |
| Portfolio About | [portfolio-about.jsx](src/components/abouts/portfolio-about.jsx) | Portfolio | Designer bio |
| Creative About | [creative-about.jsx](src/components/abouts/creative-about.jsx) | Creative | Studio overview |
| Architecture About | [architecture-about.jsx](src/components/abouts/architecture-about.jsx) | Architecture | Firm overview |
| Service 3 About | [service-3-about.jsx](src/components/abouts/service-3-about.jsx) | Services 3 | Service-specific |
| Services About | [services-about.jsx](src/components/abouts/services-about.jsx) | Services | Services overview |

**Photographer About Sub-components:**
- [p-about-self.jsx](src/components/abouts/photographer-about/p-about-self.jsx) - Personal bio
- [p-about-education.jsx](src/components/abouts/photographer-about/p-about-education.jsx) - Credentials
- [p-about-skill.jsx](src/components/abouts/photographer-about/p-about-skill.jsx) - Skills

**About Page Components:**
- [about/](src/components/abouts/about-page-com/about/) - Full about page layout
- [about-me/](src/components/abouts/about-page-com/about-me/) - Personal about page

---

### 3. Service Sections (14+ variations)

**Directory:** `src/components/services/`

| Component | File | Used In | Style |
|-----------|------|---------|-------|
| Services Home | [services-home.jsx](src/components/services/services-home.jsx) | Main Home | Grid with customizable styles |
| Services Agency | [services-agency.jsx](src/components/services/services-agency.jsx) | Agency | List layout |
| Services Lawyer | [services-lawyer.jsx](src/components/services/services-lawyer.jsx) | Lawyer | Legal services |
| Services 2 Area | [services-2-area.jsx](src/components/services/services-2-area.jsx) | Services 2 | Alternative layout |
| Service 3 Services | [service-3-services.jsx](src/components/services/service-3-services.jsx) | Services 3 | Specialized layout |
| Portfolio Service | [portfolio-service.jsx](src/components/services/portfolio-service.jsx) | Portfolio | Portfolio-focused |
| Architecture Services | [architecture-services.jsx](src/components/services/architecture-services.jsx) | Architecture | Architecture services |
| Photography Services | [photography-services.jsx](src/components/services/photography-services.jsx) | Photographer | Photography services |
| Startup Services | [startup-services.jsx](src/components/services/startup-services.jsx) | Startup | Product features |

---

### 4. Testimonial Sections (14 variations)

**Directory:** `src/components/testimonials/`

| Component | File | Used In | Features |
|-----------|------|---------|----------|
| Agency Testimonial | [agency-testimonial.jsx](src/components/testimonials/agency-testimonial.jsx) | Agency | 3-column carousel, ratings |
| Freelancer Testimonial | [freelancer-testimonial.jsx](src/components/testimonials/freelancer-testimonial.jsx) | Freelancer | Client feedback |
| Lawyer Testimonial | [lawyer-testimonial.jsx](src/components/testimonials/lawyer-testimonial.jsx) | Lawyer | Legal testimonials |
| Creative Testimonial | [creative-testimonial.jsx](src/components/testimonials/creative-testimonial.jsx) | Creative | Creative testimonials |
| Architecture Testimonial | [architecture-testimonial.jsx](src/components/testimonials/architecture-testimonial.jsx) | Architecture | Client reviews |
| Home Testimonial | [home-testimonial.jsx](src/components/testimonials/home-testimonial.jsx) | Main Home | Default testimonials |
| Photography Testimonial | [photography-testimonial.jsx](src/components/testimonials/photography-testimonial.jsx) | Photographer | Client feedback |
| Politician Testimonial | [politician-testimonial.jsx](src/components/testimonials/politician-testimonial.jsx) | Politician | Endorsements |
| Portfolio Testimonial | [portfolio-testimonial.jsx](src/components/testimonials/portfolio-testimonial.jsx) | Portfolio | Client reviews |
| Startup Testimonial | [start-up-testimonial.jsx](src/components/testimonials/start-up-testimonial.jsx) | Startup | Customer testimonials |
| Pricing Testimonial | [pricing-testimonial.jsx](src/components/testimonials/pricing-testimonial.jsx) | Pricing | Pricing page testimonials |
| Service 3 Testimonial | [service-3-testimonial.jsx](src/components/testimonials/service-3-testimonial.jsx) | Services 3 | Service testimonials |
| About Me Testimonial | [about-me-testimonial.jsx](src/components/testimonials/about-me-testimonial.jsx) | About Me | Personal testimonials |

---

### 5. Team Sections (11 variations)

**Directory:** `src/components/teams/`

| Component | File | Used In |
|-----------|------|---------|
| Home Teams | [home-teams.jsx](src/components/teams/home-teams.jsx) | Main Home |
| Creative Team | [creative-team.jsx](src/components/teams/creative-team.jsx) | Creative |
| Architecture Teams | [architecture-teams.jsx](src/components/teams/architecture-teams.jsx) | Architecture |
| Lawyer Teams | [lawyer-teams.jsx](src/components/teams/lawyer-teams.jsx) | Lawyer |
| Politician Teams | [politician-teams.jsx](src/components/teams/politician-teams.jsx) | Politician |
| Teams Area | [teams-area.jsx](src/components/teams/teams-area.jsx) | Generic container |

**Single Team Card Components:**
- [home-single-team.jsx](src/components/teams/single-team/home-single-team.jsx)
- [creative-single-team.jsx](src/components/teams/single-team/creative-single-team.jsx)
- [lawyer-single-team.jsx](src/components/teams/single-team/lawyer-single-team.jsx)
- [single-team-arch.jsx](src/components/teams/single-team/single-team-arch.jsx)
- [polity-single-team.jsx](src/components/teams/single-team/polity-single-team.jsx)

---

### 6. Portfolio/Project Sections (15+ variations)

**Directory:** `src/components/portfolios/`

| Component | File | Used In | Layout |
|-----------|------|---------|--------|
| Home Portfolio | [home-portfolio.jsx](src/components/portfolios/home-portfolio.jsx) | Main Home | Grid |
| Agency Portfolio | [home-agency-portfolio.jsx](src/components/portfolios/home-agency-portfolio.jsx) | Agency | Work showcase |
| Freelancer Portfolio | [home-freelancer-portfolio.jsx](src/components/portfolios/home-freelancer-portfolio.jsx) | Freelancer | Projects |
| Personal Portfolio | [home-personal-portfolio.jsx](src/components/portfolios/home-personal-portfolio.jsx) | Portfolio | Personal work |
| Lawyer Case | [home-lowyer-case.jsx](src/components/portfolios/home-lowyer-case.jsx) | Lawyer | Case studies |
| Creative Portfolio | [creative-portfolio.jsx](src/components/portfolios/creative-portfolio.jsx) | Creative | Creative showcase |
| Architecture Portfolio | [architecture-portfolio.jsx](src/components/portfolios/architecture-portfolio.jsx) | Architecture | Architecture work |
| Photographer Portfolio | [photographer-portfolio.jsx](src/components/portfolios/photographer-portfolio.jsx) | Photographer | Photo gallery |
| Services Portfolio | [services-portfolio.jsx](src/components/portfolios/services-portfolio.jsx) | Services | Service portfolio |

**Portfolio Page Layouts:**
- [portfolio-classic/](src/components/portfolios/portfolio-page-com/portfolio-classic/) - Classic layout
- [portfolio-grid-col/](src/components/portfolios/portfolio-page-com/portfolio-grid-col/) - Grid columns
- [portfolio-masonry/](src/components/portfolios/portfolio-page-com/portfolio-masonry/) - Masonry layout
- [portfolio-metro/](src/components/portfolios/portfolio-page-com/portfolio-metro/) - Metro style
- [portfolio-slider/](src/components/portfolios/portfolio-page-com/portfolio-slider/) - Slider layout

---

### 7. Blog/News Sections (14+ variations)

**Directory:** `src/components/blogs/`

| Component | File | Used In | Layout |
|-----------|------|---------|--------|
| Home Blogs | [home-blogs.jsx](src/components/blogs/home-blogs.jsx) | Main Home | Featured posts |
| Agency Blogs | [agency-blogs.jsx](src/components/blogs/agency-blogs.jsx) | Agency | News/blog |
| Creative Blogs | [creative-blogs.jsx](src/components/blogs/creative-blogs.jsx) | Creative | Studio blog |
| Freelancer Blogs | [freelancer-blogs.jsx](src/components/blogs/freelancer-blogs.jsx) | Freelancer | Articles |
| Architecture Blogs | [arch-blogs.jsx](src/components/blogs/arch-blogs.jsx) | Architecture | News |
| Lawyer Blogs | [lawyer-blogs.jsx](src/components/blogs/lawyer-blogs.jsx) | Lawyer | Legal insights |
| Politician Blogs | [politician-blogs.jsx](src/components/blogs/politician-blogs.jsx) | Politician | Political blog |
| Portfolio Blogs | [portfolio-blogs.jsx](src/components/blogs/portfolio-blogs.jsx) | Portfolio | Portfolio blog |
| Startup Blogs | [start-up-blogs.jsx](src/components/blogs/start-up-blogs.jsx) | Startup | Company blog |
| Blog Grid Area | [blog-grid-area.jsx](src/components/blogs/blog-grid-area.jsx) | Blog Grid | Grid container |
| Blog Grid Area 2 | [blog-grid-area-2.jsx](src/components/blogs/blog-grid-area-2.jsx) | Blog Grid 2 | Alternative grid |
| Blog List Area | [blog-list-area.jsx](src/components/blogs/blog-list-area.jsx) | Blog List | List layout |
| Blog Masonry Area | [blog-masonry-area.jsx](src/components/blogs/blog-masonry-area.jsx) | Blog Masonry | Masonry layout |
| Blog Postbox Area | [blog-postbox-area.jsx](src/components/blogs/blog-postbox-area.jsx) | Blog Details | Post box container |

**Blog Detail Components:**
- [blog-details-area.jsx](src/components/blogs/blog-details/blog-details-area.jsx)
- [comment-area.jsx](src/components/blogs/blog-details/comment-area.jsx)
- [post-author.jsx](src/components/blogs/blog-details/post-author.jsx)
- [post-navigation.jsx](src/components/blogs/blog-details/post-navigation.jsx)
- [post-share-wrapper.jsx](src/components/blogs/blog-details/post-share-wrapper.jsx)

---

### 8. CTA Sections (10 variations)

**Directory:** `src/components/cta/`

| Component | File | Used In | Purpose |
|-----------|------|---------|---------|
| Agency CTA | [agency-cta.jsx](src/components/cta/agency-cta.jsx) | Agency | Business CTA |
| Freelancer CTA | [freelancer-cta.jsx](src/components/cta/freelancer-cta.jsx) | Freelancer | Hire CTA |
| Creative CTA | [creative-cta.jsx](src/components/cta/creative-cta.jsx) | Creative | Service CTA |
| Creative CTA 2 | [creative-cta-2.jsx](src/components/cta/creative-cta-2.jsx) | Creative | Alternative CTA |
| About CTA | [about-cta.jsx](src/components/cta/about-cta.jsx) | About | About CTA |
| Portfolio 2 CTA | [portfolio-2-cta.jsx](src/components/cta/portfolio-2-cta.jsx) | Portfolio 2 | Showcase CTA |
| Service 3 CTA | [service-3-cta.jsx](src/components/cta/service-3-cta.jsx) | Services 3 | Service CTA |
| Shop CTA | [shop-cta.jsx](src/components/cta/shop-cta.jsx) | Shop | E-commerce CTA |
| Politician CTA | [politician-cta.jsx](src/components/cta/politician-cta.jsx) | Politician | Campaign CTA |
| Startup CTA | [start-up-cta.jsx](src/components/cta/start-up-cta.jsx) | Startup | Product CTA |

---

### 9. Counter Sections (7 variations)

**Directory:** `src/components/counters/`

| Component | File | Used In |
|-----------|------|---------|
| Home Counter | [home-counter.jsx](src/components/counters/home-counter.jsx) | Main Home |
| Agency Counter | [agency-counter.jsx](src/components/counters/agency-counter.jsx) | Agency |
| Architecture Counter | [architecture-counter.jsx](src/components/counters/architecture-counter.jsx) | Architecture |
| Freelancer Counter | [freelancer-counter.jsx](src/components/counters/freelancer-counter.jsx) | Freelancer |
| Lawyer Counter | [lawyer-counter.jsx](src/components/counters/lawyer-counter.jsx) | Lawyer |
| Politician Counter | [politician-counter.jsx](src/components/counters/politician-counter.jsx) | Politician |
| Startup Counter | [startup-counter.jsx](src/components/counters/startup-counter.jsx) | Startup |

---

### 10. Features Sections (7 variations)

**Directory:** `src/components/features/`

| Component | File | Used In |
|-----------|------|---------|
| Startup Features | [startup-features.jsx](src/components/features/startup-features.jsx) | Startup |
| Creative Feature | [creative-feature.jsx](src/components/features/creative-feature.jsx) | Creative |
| Politician Feature | [politician-feature.jsx](src/components/features/politician-feature.jsx) | Politician |
| Portfolio Feature | [portfolio-feature.jsx](src/components/features/portfolio-feature.jsx) | Portfolio |
| Product Feature | [product-feature.jsx](src/components/features/product-feature.jsx) | Shop |
| Service 3 Feature | [service-3-feature.jsx](src/components/features/service-3-feature.jsx) | Services 3 |

---

### 11. Awards/Recognition Sections (6 variations)

**Directory:** `src/components/awards/`

| Component | File | Used In |
|-----------|------|---------|
| Home Award | [home-award.jsx](src/components/awards/home-award.jsx) | Main Home |
| Agency Award | [agency-award.jsx](src/components/awards/agency-award.jsx) | Agency |
| Architecture Awards | [architecture-awards.jsx](src/components/awards/architecture-awards.jsx) | Architecture |
| Freelancer Award | [freelancer-award.jsx](src/components/awards/freelancer-award.jsx) | Freelancer |
| Portfolio Awards | [portfolio-awards.jsx](src/components/awards/portfolio-awards.jsx) | Portfolio |

---

### 12. Pricing Sections (3 variations)

**Directory:** `src/components/pricings/`

| Component | File | Used In |
|-----------|------|---------|
| Agency Pricing | [agency-pricing.jsx](src/components/pricings/agency-pricing.jsx) | Agency |
| Startup Pricing | [start-up-pricing.jsx](src/components/pricings/start-up-pricing.jsx) | Startup |
| Photography Price | [photography-price.jsx](src/components/pricings/photography-price.jsx) | Photographer |

---

### 13. FAQ Sections (6+ variations)

**Directory:** `src/components/faqs/`

| Component | File | Used In |
|-----------|------|---------|
| Home FAQ | [home-faq.jsx](src/components/faqs/home-faq.jsx) | Main Home |
| Common FAQ | [common-faq.jsx](src/components/faqs/common-faq.jsx) | Various |
| Single FAQ | [single-faq.jsx](src/components/faqs/single-faq.jsx) | FAQ component |
| Startup FAQs | [start-up-faqs.jsx](src/components/faqs/start-up-faqs.jsx) | Startup |

---

### 14. Brand/Logo Sections (6 variations)

**Directory:** `src/components/brands/`

| Component | File | Used In |
|-----------|------|---------|
| Agency Brands | [agency-brands.jsx](src/components/brands/agency-brands.jsx) | Agency |
| Architecture Brands | [architecture-brands.jsx](src/components/brands/architecture-brands.jsx) | Architecture |
| Creative Brands | [creative-brands.jsx](src/components/brands/creative-brands.jsx) | Creative |
| Freelancer Brands | [freelancer-brands.jsx](src/components/brands/freelancer-brands.jsx) | Freelancer |
| Photography Brands | [photography-brands.jsx](src/components/brands/photography-brands.jsx) | Photographer |

---

### 15. Event Sections (2 variations)

**Directory:** `src/components/events/`

| Component | File | Used In |
|-----------|------|---------|
| Home Events | [home-events.jsx](src/components/events/home-events.jsx) | Main Home |
| Event Details | [event-details/](src/components/event-details/) | Event Details Page |

---

### 16. Other Section Components

**Skills:**
- [src/components/skills/](src/components/skills/)

**Subscribe/Newsletter:**
- [src/components/subscribe/](src/components/subscribe/)

**Video Areas:**
- [src/components/video-area/](src/components/video-area/)

**Histories/Timeline:**
- [src/components/histories/](src/components/histories/)

**Fun Facts:**
- [src/components/fun-facts/](src/components/fun-facts/)

**Feature Lists:**
- [src/components/feature-lists/](src/components/feature-lists/)

**Supports:**
- [src/components/supports/](src/components/supports/)

**Contact:**
- [src/components/contacts/](src/components/contacts/)

**Biography:**
- [src/components/biography/](src/components/biography/)

---

## Common/Utility Components

### Breadcrumbs (13 variations)

**Directory:** `src/components/common/breadcrumb/`

| Component | File | Used In |
|-----------|------|---------|
| Breadcrumb 1-9 | [breadcrumb-1.jsx](src/components/common/breadcrumb/breadcrumb-1.jsx) ... breadcrumb-9.jsx | Various pages |
| Breadcrumb List | [breadcrumb-list.jsx](src/components/common/breadcrumb/breadcrumb-list.jsx) | List pages |
| Cart Breadcrumb | [cart-breadcrumb.jsx](src/components/common/breadcrumb/cart-breadcrumb.jsx) | Cart page |
| Element Breadcrumb | [element-breadcrumb.jsx](src/components/common/breadcrumb/element-breadcrumb.jsx) | Element pages |
| FAQ Breadcrumb | [faq-breadcrumb.jsx](src/components/common/breadcrumb/faq-breadcrumb.jsx) | FAQ page |
| Product Details Breadcrumb | [product-details-breadcrumb.jsx](src/components/common/breadcrumb/product-details-breadcrumb.jsx) | Product details |
| Shop Breadcrumb | [shop-breadcrumb.jsx](src/components/common/breadcrumb/shop-breadcrumb.jsx) | Shop pages |
| Team Breadcrumb | [team-breadcrumb.jsx](src/components/common/breadcrumb/team-breadcrumb.jsx) | Team page |

---

### Modals

**Directory:** `src/components/common/modals/`

- [product-modal.jsx](src/components/common/modals/product-modal.jsx) - Product quick-view

---

### Off-Canvas/Mobile Navigation (6 variations)

**Directory:** `src/components/common/off-canvas/`

| Component | File |
|-----------|------|
| Main Off-Canvas | [index.jsx](src/components/common/off-canvas/index.jsx) |
| Mobile Menus | [mobile-menus.jsx](src/components/common/off-canvas/mobile-menus.jsx) |
| Off-Canvas 2-6 | [off-canvas-2.jsx](src/components/common/off-canvas/off-canvas-2.jsx) ... off-canvas-6.jsx |

---

### Shop Filtering

**Directory:** `src/components/common/shop-filtering/`

- [shop-category.jsx](src/components/common/shop-filtering/shop-category.jsx)
- [shop-color.jsx](src/components/common/shop-filtering/shop-color.jsx)
- [shop-model.jsx](src/components/common/shop-filtering/shop-model.jsx)
- [shop-price.jsx](src/components/common/shop-filtering/shop-price.jsx)

---

### Other Common Components

**Counter:**
- [src/components/common/counter/](src/components/common/counter/) - Animated counter component

**Scroll to Top:**
- [src/components/common/scroll-to-top/](src/components/common/scroll-to-top/) - Back-to-top button

**Sidebar:**
- [src/components/common/sidebar/cart-sidebar/](src/components/common/sidebar/cart-sidebar/) - Shopping cart sidebar

---

## Component Composition Patterns

### Page Structure

All pages follow this basic structure:

```javascript
import { Wrapper, Header, Footer } from '@layout/index';
import SEO from '@components/seo';
import SectionComponent1 from '@components/.../section-1';
import SectionComponent2 from '@components/.../section-2';
// ... more sections

export default function PageName() {
  return (
    <Wrapper>
      <SEO pageTitle={'Page Title'} />
      <Header />
      <SectionComponent1 />
      <SectionComponent2 />
      {/* ... more sections */}
      <Footer />
    </Wrapper>
  );
}
```

### Layout Components

**Wrappers:**
- `Wrapper` - Main page wrapper

**Headers (Multiple Variants):**
- `Header` - Default header
- `HeaderTwo`, `HeaderThree`, `HeaderFour`, `HeaderFive`, `HeaderSix`

**Footers (Multiple Variants):**
- `Footer` - Default footer
- `FooterTwo`, `FooterThree`, `FooterFour`, `FooterFive`

**Location:** `src/layout/`

---

### Niche-Specific Component Variations

Each major component has variations for different business types:

**Pattern:**
- `ComponentName` - Default/general version
- `ComponentNameAgency` - Agency version
- `ComponentNameFreelancer` - Freelancer version
- `ComponentNameLawyer` - Lawyer version
- etc.

**Example:**
- `HomeAbout` - General about section
- `HomeAgencyAbout` - Agency about section
- `HomeFreelancerAbout` - Freelancer about section

---

### Data-Driven Components

Components pull data from data files using filter flags:

```javascript
import { blog_data } from '@data/index';

// Filter for specific homepage
const blogs = blog_data.filter(b => b.home_agency === true);

// Map to components
blogs.map((blog, i) => (
  <BlogCard key={i} data={blog} />
))
```

---

### Component Reusability

**High-Level Sections** (Page-specific):
- Portfolio sections, Blog sections, Service sections
- Named by homepage (e.g., `AgencyPortfolio`, `FreelancerBlogs`)

**Mid-Level Components** (Reusable cards):
- Single blog item, Single portfolio item, Single team card
- Used across multiple sections

**Low-Level Components** (Utilities):
- Buttons, Forms, Icons, Counters
- Used everywhere

---

## Quick Reference Tables

### Content Type Summary

| Content Type | File | Items | Key Fields | Template Flags |
|--------------|------|-------|------------|----------------|
| Blog Posts | blog-data.js | 63 | img, tag, title, date, author | home, home_agency, home_freelancer, etc. |
| Products | products.js | 36 | title, price, discount, image, SKU | topRated, bestSelling, latestProduct |
| Portfolio | portfolio-data.js | 26 | img, tag, title, delay | home, home_agency, home_freelancer, etc. |
| Services | service-data.js | 23 | icon, title, subtitle | home, home_agency, home_lawyer, etc. |
| Team | team-data.js | 23 | name, title, img, social_links | home, home_lawyer, home_creative, etc. |
| Events | event-data.js | 8 | title, date, speakers/img | home, home_politician |
| Menu | menu-data.js | 6 main | title, link, submenus | N/A |

---

### Homepage → Sections Mapping

| Homepage | Primary Sections Used | Data Types |
|----------|----------------------|------------|
| Main Home | Banner, About, Counter, Services, Events, Teams, FAQ, Portfolio, Testimonial, Blogs | All |
| Agency | Banner, Services, About, Counter, Portfolio, Award, Pricing, Testimonial, Brands, Blogs, CTA | Blog, Portfolio, Service |
| Freelancer | Banner, Brands, About, Portfolio, Skills, Award, Testimonial, Blogs, CTA | Blog, Portfolio |
| Lawyer | Banner, Award, Case, About, Facts, History, Video, Services, Blogs, Testimonial, Teams, Counter, Contact | Blog, Portfolio (cases), Service, Team |
| Startup | Banner, Features, About, Counter, Services, Feature Lists, Support, Testimonial, Pricing, FAQ, Blogs, CTA | Blog, Service |
| Architecture | Banner, Services, About, Counter, Portfolio, Awards, Testimonial, Brands, Blogs | Blog, Portfolio, Service, Team |
| Photographer | Banner, About (Self, Education, Skill), Portfolio, Services, Pricing, Testimonial, Brands, Blogs | Portfolio |
| Politician | Banner, Biography, Feature, Events, Teams, Testimonial, Counter, Blogs, Subscribe, CTA | Blog, Event, Team |
| Portfolio | Banner, About, Counter, Service, Portfolio, Testimonial, Blogs | Blog, Portfolio |
| Creative | Banner, Services, About, Counter, Portfolio, Testimonial, Brands, Blogs, CTA | Blog, Service |
| Shop | Banner, Features, About, Counter, Services, Testimonial, Pricing, Blogs, CTA | Product |

---

### Component Directory Structure

| Directory | Purpose | Count |
|-----------|---------|-------|
| abouts/ | About section variations | 10+ |
| awards/ | Achievement displays | 6 |
| blogs/ | Blog/news sections | 14+ |
| brands/ | Client/partner logos | 6 |
| common/ | Shared utilities | 20+ |
| contacts/ | Contact forms | 3+ |
| counters/ | Stat displays | 7 |
| cta/ | Call-to-action sections | 10 |
| events/ | Event listings | 2 |
| faqs/ | FAQ accordions | 6+ |
| features/ | Feature showcases | 7 |
| hero-banners/ | Hero sections | 11 |
| portfolios/ | Portfolio grids | 15+ |
| pricings/ | Pricing tables | 3 |
| services/ | Service sections | 14+ |
| teams/ | Team displays | 11 |
| testimonials/ | Client testimonials | 14 |

---

### Data Type Field Counts

| Data Type | Total Fields (Max) | Required Fields | Optional Fields |
|-----------|-------------------|-----------------|-----------------|
| Blog | 15+ | id, img, title, date | video_id, sm_text, slider_images, etc. |
| Product | 18 | id, title, price, image | badge, reviews, relatedImages |
| Portfolio | 12+ | id, img/bg, title | shapes, tags, camera, city, price |
| Service | 7 | id, title, subtitle | icon, img, bg, color, delay |
| Team | 8 | id, name, title, img | sm_desc, phone, social_links |
| Event | 8 | id, title, date | speakers, img, location, tag |
| Menu | 5 | id, title, link | submenus, mega_menus, hasDropdown |

---

## Notes

### Framework Details

- **Router:** Next.js Pages Router (NOT App Router despite documentation)
- **File-based routing:** Each file in `src/pages/` becomes a route
- **Dynamic routes:** Square bracket syntax `[param]` for dynamic segments
- **Data fetching:** Components import data directly from `src/data/`

### Fresh Installation

This is a clean theme installation with:
- Sample/dummy content in all data files
- No custom modifications
- All 14 homepage variations ready to use
- All components functional out of the box

### Customization Points

To customize this theme:

1. **Content:** Edit data files in `src/data/`
2. **Styling:** Edit SCSS files in `public/assets/scss/`
3. **Colors:** Edit `public/assets/scss/utils/colors.scss`
4. **Typography:** Edit `public/assets/scss/utils/typography.scss`
5. **Logo:** Replace in header components
6. **Favicon:** Update in page metadata
7. **Menus:** Edit `src/data/menu-data.js`

### Key Directories

```
ciprianciceu-react/
├── src/
│   ├── pages/           # All routes (89 files)
│   ├── components/      # All components (150+)
│   ├── data/           # All content data (8 files)
│   ├── layout/         # Headers, footers, wrappers
│   └── svg/            # SVG icon components
├── public/
│   └── assets/         # Images, SCSS, fonts
└── documentation/      # Theme documentation
```

---

**End of Template Map**

*Generated: 2025-12-18*
*Template Version: 2.0.0*
*React Version: 16.0.6*
*Next.js: Pages Router*
