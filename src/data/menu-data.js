const menu_data = [
  {
    id: 1,
    titleKey: 'home', // Translation key for nav.home
    link: '/',
    hasDropdown: false
  },
  {
    id: 2,
    titleKey: 'about', // Translation key for nav.about
    link: '/about',
    hasDropdown: false
  },
  {
    id: 3,
    titleKey: 'projects', // Translation key for nav.projects
    link: '/portfolio',
    hasDropdown: false
  },
  {
    id: 4,
    titleKey: 'media', // Translation key for nav.media
    link: '/media',
    hasDropdown: false
  },
  {
    id: 5,
    titleKey: 'press', // Translation key for nav.press
    link: '/press',
    hasDropdown: false
  },
  {
    id: 6,
    titleKey: 'blog', // Translation key for nav.blog
    link: '/blog',
    hasDropdown: false
  }
  // Note: Contact is handled as a button in the header, not in menu
]

export default menu_data;
