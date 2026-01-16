import blog_articles_data from './blog-articles-data';

// Import translation files dynamically based on locale
const translations = {
  en: () => import('./translations/blog-articles-en').then(m => m.default),
  ro: () => import('./translations/blog-articles-ro').then(m => m.default),
  fr: () => import('./translations/blog-articles-fr').then(m => m.default),
  ar: () => import('./translations/blog-articles-ar').then(m => m.default),
};

/**
 * Get localized blog articles by merging base blog data with translations
 * @param {string} locale - The locale code (en, ro, fr, ar)
 * @returns {Promise<Array>} - Array of localized article objects
 */
export async function getLocalizedBlogArticles(locale = 'en') {
  // Default to English if translations don't exist yet or invalid locale
  if (!translations[locale]) {
    return blog_articles_data;
  }

  try {
    const articleTranslations = await translations[locale]();

    // Merge translations with base data
    return blog_articles_data.map(article => {
      const translation = articleTranslations[article.id];

      if (!translation) {
        // No translation available, return original
        return article;
      }

      // Merge translation with base article data
      return {
        ...article,
        title: translation.title || article.title,
        subtitle: translation.subtitle || article.subtitle,
        sm_desc: translation.sm_desc || article.sm_desc,
        content: translation.content || article.content,
      };
    });
  } catch (error) {
    console.warn(`Failed to load blog translations for locale: ${locale}`, error);
    // Fallback to original data if translation loading fails
    return blog_articles_data;
  }
}

/**
 * Find blog article ID by searching slug across all locales
 * This is useful when a user switches language and the URL slug doesn't match
 * the current locale's slug - we can find the article and redirect to the correct slug
 * @param {string} slug - The URL slug to search for
 * @param {function} createSlug - Function to create slug from title
 * @returns {Promise<number|null>} - Article ID if found, null otherwise
 */
export async function findBlogArticleIdBySlugAcrossLocales(slug, createSlug) {
  const locales = ['en', 'ro', 'fr', 'ar'];

  for (const locale of locales) {
    const articles = await getLocalizedBlogArticles(locale);
    const found = articles.find(a => a.title && createSlug(a.title) === slug);
    if (found) {
      return found.id;
    }
  }

  return null;
}

export default getLocalizedBlogArticles;
