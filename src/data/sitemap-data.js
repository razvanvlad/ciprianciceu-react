const sitemap_data = [
  {
    id: 1,
    category: "Main Pages",
    pages: [
      {
        name: "Home (Index)",
        path: "/",
        description: "Main landing page with full portfolio showcase",
        components: [
          "PortfolioBanner - Hero banner with main introduction",
          "PortfolioAbout - About section",
          "PortfolioFeature - Key features/highlights",
          "PortfolioService - Services offered",
          "HomePersonalPortfolioArea - Portfolio showcase",
          "PortfolioSkills - Skills display",
          "PortfolioAwards - Awards and achievements",
          "PortfolioTestimonial - Client testimonials",
          "PortfolioBlogs - Blog posts preview",
          "PortfolioContact - Contact section"
        ]
      },
      {
        name: "About",
        path: "/about",
        description: "About page with personal information",
        components: [
          "AboutArea - Main about content"
        ]
      },
      {
        name: "Portfolio/Projects",
        path: "/portfolio",
        description: "Portfolio/Projects listing page",
        components: [
          "PortfolioClassic - Classic portfolio grid layout"
        ]
      },
      {
        name: "Media",
        path: "/media",
        description: "Media gallery and content",
        components: [
          "Media components (specific components TBD)"
        ]
      },
      {
        name: "Contact",
        path: "/contact",
        description: "Contact page with form",
        components: [
          "Contact form and information"
        ]
      }
    ]
  },
  {
    id: 2,
    category: "Alternative Home Pages",
    pages: [
      {
        name: "Home - Portfolio",
        path: "/home-portfolio",
        description: "Portfolio-focused homepage variant"
      },
      {
        name: "Home - Agency",
        path: "/home-agency",
        description: "Agency-style homepage"
      },
      {
        name: "Home - Architecture",
        path: "/home-architecture",
        description: "Architecture-themed homepage"
      },
      {
        name: "Home - Creative",
        path: "/home-creative",
        description: "Creative portfolio homepage"
      },
      {
        name: "Home - Freelancer",
        path: "/home-freelancer",
        description: "Freelancer-focused homepage"
      },
      {
        name: "Home - Lawyer",
        path: "/home-lawyer",
        description: "Lawyer/legal professional homepage"
      },
      {
        name: "Home - Photographer",
        path: "/home-photographer",
        description: "Photography portfolio homepage"
      },
      {
        name: "Home - Politician",
        path: "/home-politician",
        description: "Political figure homepage"
      },
      {
        name: "Home - Shop",
        path: "/home-shop",
        description: "E-commerce focused homepage"
      },
      {
        name: "Home - Startup",
        path: "/home-startup",
        description: "Startup/business homepage"
      },
      {
        name: "Home - Swiper",
        path: "/home-swiper",
        description: "Swiper slider homepage"
      },
      {
        name: "Home - Vertical",
        path: "/home-vertical",
        description: "Vertical scroll homepage"
      }
    ]
  },
  {
    id: 3,
    category: "Portfolio Pages",
    pages: [
      {
        name: "Portfolio - Classic",
        path: "/portfolio",
        description: "Classic grid portfolio layout"
      },
      {
        name: "Portfolio - 2",
        path: "/portfolio-2",
        description: "Alternative portfolio layout"
      },
      {
        name: "Portfolio - Gallery",
        path: "/portfolio-gallery",
        description: "Gallery-style portfolio"
      },
      {
        name: "Portfolio - Masonry",
        path: "/portfolio-masonry",
        description: "Masonry grid portfolio"
      },
      {
        name: "Portfolio - Metro",
        path: "/portfolio-metro",
        description: "Metro-style portfolio grid"
      },
      {
        name: "Portfolio - Slider",
        path: "/portfolio-slider",
        description: "Slider-based portfolio"
      },
      {
        name: "Portfolio Details",
        path: "/portfolio-details",
        description: "Single portfolio item details"
      },
      {
        name: "Portfolio Details - List",
        path: "/portfolio-details-list",
        description: "List-style portfolio details"
      },
      {
        name: "Portfolio Details - Slider",
        path: "/portfolio-details-slider",
        description: "Slider-style portfolio details"
      },
      {
        name: "Portfolio Details - Video",
        path: "/portfolio-details-video",
        description: "Video portfolio details"
      }
    ]
  },
  {
    id: 4,
    category: "Blog Pages",
    pages: [
      {
        name: "Blog",
        path: "/blog",
        description: "Main blog listing"
      },
      {
        name: "Blog Grid",
        path: "/blog-grid",
        description: "Grid layout blog"
      },
      {
        name: "Blog Grid 2",
        path: "/blog-grid-2",
        description: "Alternative grid blog layout"
      },
      {
        name: "Blog Grid Sidebar",
        path: "/blog-grid-sidebar",
        description: "Grid blog with sidebar"
      },
      {
        name: "Blog List Sidebar",
        path: "/blog-list-sidebar",
        description: "List blog with sidebar"
      },
      {
        name: "Blog Masonry",
        path: "/blog-masonry",
        description: "Masonry blog layout"
      },
      {
        name: "Blog Details",
        path: "/blog-details",
        description: "Single blog post details"
      },
      {
        name: "Blog Details 2",
        path: "/blog-details-2",
        description: "Alternative blog post layout"
      }
    ]
  },
  {
    id: 5,
    category: "Service Pages",
    pages: [
      {
        name: "Services",
        path: "/services",
        description: "Main services listing"
      },
      {
        name: "Services 2",
        path: "/services-2",
        description: "Alternative services layout"
      },
      {
        name: "Services 3",
        path: "/services-3",
        description: "Third services layout variant"
      },
      {
        name: "Service Details",
        path: "/service-details",
        description: "Single service details page"
      }
    ]
  },
  {
    id: 6,
    category: "Shop/E-commerce Pages",
    pages: [
      {
        name: "Shop",
        path: "/shop",
        description: "Product listing page"
      },
      {
        name: "Shop - Right Sidebar",
        path: "/shop-right-sidebar",
        description: "Shop with right sidebar"
      },
      {
        name: "Product Details",
        path: "/product-details",
        description: "Single product page"
      },
      {
        name: "Cart",
        path: "/cart",
        description: "Shopping cart page"
      },
      {
        name: "Checkout",
        path: "/checkout",
        description: "Checkout page"
      },
      {
        name: "Wishlist",
        path: "/wishlist",
        description: "Wishlist page"
      }
    ]
  },
  {
    id: 7,
    category: "Team & Job Pages",
    pages: [
      {
        name: "Team",
        path: "/team",
        description: "Team members listing"
      },
      {
        name: "Team Details",
        path: "/team-details",
        description: "Single team member details"
      },
      {
        name: "Jobs",
        path: "/job",
        description: "Job listings page"
      },
      {
        name: "Job Details",
        path: "/job-details",
        description: "Single job details"
      }
    ]
  },
  {
    id: 8,
    category: "Utility Pages",
    pages: [
      {
        name: "About Me",
        path: "/about-me",
        description: "Personal about page variant"
      },
      {
        name: "Contact 2",
        path: "/contact-2",
        description: "Alternative contact page"
      },
      {
        name: "FAQ",
        path: "/faq",
        description: "Frequently asked questions"
      },
      {
        name: "Pricing",
        path: "/pricing",
        description: "Pricing plans page"
      },
      {
        name: "Event Details",
        path: "/event-details",
        description: "Event information page"
      },
      {
        name: "Coming Soon",
        path: "/coming-soon",
        description: "Coming soon/maintenance page"
      },
      {
        name: "404",
        path: "/404",
        description: "Error 404 page"
      },
      {
        name: "Search",
        path: "/search",
        description: "Search results page"
      },
      {
        name: "Help",
        path: "/help",
        description: "Help center page"
      },
      {
        name: "Terms",
        path: "/terms",
        description: "Terms and conditions"
      },
      {
        name: "Policy",
        path: "/policy",
        description: "Privacy policy"
      }
    ]
  },
  {
    id: 9,
    category: "Authentication Pages",
    pages: [
      {
        name: "Login",
        path: "/login",
        description: "User login page"
      },
      {
        name: "Register",
        path: "/register",
        description: "User registration page"
      },
      {
        name: "Forgot Password",
        path: "/forgot",
        description: "Password recovery page"
      }
    ]
  },
  {
    id: 10,
    category: "Element/Component Pages",
    pages: [
      {
        name: "Accordion",
        path: "/elements-accordion",
        description: "Accordion component examples"
      },
      {
        name: "Blog Post",
        path: "/elements-blog-post",
        description: "Blog post component examples"
      },
      {
        name: "Brand",
        path: "/elements-brand",
        description: "Brand/logo component examples"
      },
      {
        name: "Button",
        path: "/elements-button",
        description: "Button component examples"
      },
      {
        name: "Carousel",
        path: "/elements-carousel",
        description: "Carousel component examples"
      },
      {
        name: "CTA",
        path: "/elements-cta",
        description: "Call-to-action component examples"
      },
      {
        name: "Form",
        path: "/elements-form",
        description: "Form component examples"
      },
      {
        name: "Gallery",
        path: "/elements-gallery",
        description: "Gallery component examples"
      },
      {
        name: "Heading",
        path: "/elements-heading",
        description: "Heading/typography examples"
      },
      {
        name: "Icon Box",
        path: "/elements-iconbox",
        description: "Icon box component examples"
      },
      {
        name: "Instagram",
        path: "/elements-instagram",
        description: "Instagram feed component"
      },
      {
        name: "Map",
        path: "/elements-map",
        description: "Map component examples"
      },
      {
        name: "Parallax",
        path: "/elements-parallax",
        description: "Parallax effect examples"
      },
      {
        name: "Pricing",
        path: "/elements-pricing",
        description: "Pricing table component examples"
      },
      {
        name: "Process",
        path: "/elements-process",
        description: "Process/steps component examples"
      },
      {
        name: "Shop",
        path: "/elements-shop",
        description: "Shop component examples"
      },
      {
        name: "Skill",
        path: "/elements-skill",
        description: "Skills/progress bar examples"
      },
      {
        name: "Social",
        path: "/elements-social",
        description: "Social media component examples"
      },
      {
        name: "Subscribe",
        path: "/elements-subscribe",
        description: "Newsletter subscribe component"
      },
      {
        name: "Tab",
        path: "/elements-tab",
        description: "Tab component examples"
      },
      {
        name: "Team",
        path: "/elements-team",
        description: "Team member component examples"
      },
      {
        name: "Testimonial",
        path: "/elements-testimonial",
        description: "Testimonial component examples"
      },
      {
        name: "Video",
        path: "/elements-video",
        description: "Video component examples"
      }
    ]
  }
];

export default sitemap_data;
