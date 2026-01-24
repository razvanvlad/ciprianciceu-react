import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocale } from '@context/IntlContext';
import { FlagEN, FlagFR, FlagRO, FlagAR } from '@svg/index';

// Helper function to create slug from title (must match the one used in blog/press pages)
const createSlug = (str) => {
  if (!str || typeof str !== 'string') return '';

  // Replace Romanian diacritics with ASCII equivalents
  const normalized = str
    .replace(/ă/g, 'a')
    .replace(/â/g, 'a')
    .replace(/î/g, 'i')
    .replace(/ș/g, 's')
    .replace(/ț/g, 't')
    .replace(/Ă/g, 'A')
    .replace(/Â/g, 'A')
    .replace(/Î/g, 'I')
    .replace(/Ș/g, 'S')
    .replace(/Ț/g, 'T');

  return normalized
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
};

const FloatingLanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('en');
  const [mounted, setMounted] = useState(false);
  const [articleData, setArticleData] = useState(null);
  const router = useRouter();
  const contextLocale = useLocale();

  useEffect(() => {
    setMounted(true);
    const pathSegments = router.asPath.split('/').filter(Boolean);
    const locales = ['en', 'fr', 'ro', 'ar'];
    const detectedLocale = locales.includes(pathSegments[0]) ? pathSegments[0] : contextLocale;
    setCurrentLocale(detectedLocale);

    // Check if we're on a blog or press article page and preload article data
    const isBlogArticle = pathSegments[1] === 'blog' && pathSegments[2];
    const isPressArticle = pathSegments[1] === 'press' && pathSegments[2];

    if (isBlogArticle || isPressArticle) {
      // Store info about current article page
      setArticleData({
        type: isBlogArticle ? 'blog' : 'press',
        slug: decodeURIComponent(pathSegments[2].split('?')[0])
      });
    } else {
      setArticleData(null);
    }
  }, [router.asPath, contextLocale]);

  const languages = [
    { code: 'en', name: 'English', FlagComponent: FlagEN },
    { code: 'fr', name: 'Français', FlagComponent: FlagFR },
    { code: 'ro', name: 'Română', FlagComponent: FlagRO },
    { code: 'ar', name: 'العربية', FlagComponent: FlagAR }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];
  const CurrentFlag = currentLanguage.FlagComponent;

  const handleLanguageChange = async (newLocale) => {
    const { asPath } = router;

    // If we're on a blog/press article page, we need to find the correct slug for the new locale
    if (articleData) {
      try {
        let articleId = null;
        let newLocaleArticles = null;

        if (articleData.type === 'press') {
          // For press articles, use get-localized-articles
          const { getLocalizedArticles, findArticleIdBySlugAcrossLocales } = await import('@data/get-localized-articles');
          articleId = await findArticleIdBySlugAcrossLocales(articleData.slug, createSlug);
          if (articleId) {
            newLocaleArticles = await getLocalizedArticles(newLocale);
          }
        } else {
          // For blog articles, use get-localized-blog-articles
          const { getLocalizedBlogArticles, findBlogArticleIdBySlugAcrossLocales } = await import('@data/get-localized-blog-articles');
          articleId = await findBlogArticleIdBySlugAcrossLocales(articleData.slug, createSlug);
          if (articleId) {
            newLocaleArticles = await getLocalizedBlogArticles(newLocale);
          }
        }

        if (articleId && newLocaleArticles) {
          const article = newLocaleArticles.find(a => a.id === articleId);

          if (article && article.title) {
            const newSlug = createSlug(article.title);
            const newPath = `/${newLocale}/${articleData.type}/${newSlug}`;
            router.push(newPath);
            setIsOpen(false);
            return;
          }
        }
      } catch (error) {
        console.warn('Error finding article translation:', error);
      }
    }

    // Default behavior for non-article pages or if article lookup fails
    const basePath = asPath.replace(/^\/(en|fr|ro|ar)/, '') || '/';
    const newPath = `/${newLocale}${basePath}`;
    router.push(newPath);
    setIsOpen(false);
  };

  // Don't render on server
  if (!mounted) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="floating-lang-button">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="floating-lang-btn"
          aria-label="Change language"
        >
          <CurrentFlag />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <>
            <div
              className="floating-lang-overlay"
              onClick={() => setIsOpen(false)}
            />
            <div className="floating-lang-dropdown">
              <div className="floating-lang-header">
                Select Language
              </div>
              <ul className="floating-lang-list">
                {languages.map((lang) => {
                  const Flag = lang.FlagComponent;
                  return (
                    <li
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={currentLocale === lang.code ? 'active' : ''}
                    >
                      <Flag />
                      <span>{lang.name}</span>
                      {currentLocale === lang.code && (
                        <i className="fa-solid fa-check"></i>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FloatingLanguageButton;
