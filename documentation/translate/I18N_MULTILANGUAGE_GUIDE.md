# 🌍 Multi-Language Implementation Guide
## English + Romanian + Future French Support

**Created:** December 19, 2025  
**Status:** Production-Ready  
**Scope:** Next.js i18n with Flag Selector

---

## 📋 Overview

This guide provides the **best solution** for implementing dual-language support (EN/RO) with easy expansion to French (FR) later.

### Why This Approach?

✅ **next-i18next** (industry standard for Next.js)  
✅ **Namespace-based** (scales from 2 to 50 languages)  
✅ **Flag selector in header** (clean UX)  
✅ **URL-based routing** (`/en/`, `/ro/`, `/fr/`)  
✅ **SEO-friendly** (Google understands language switches)  
✅ **Easy to manage** (JSON files per language)  
✅ **Future-proof** (add French in 30 minutes)

---

## 🎯 Solution Architecture

### File Structure
```
project/
├── public/
│   ├── locales/
│   │   ├── en/
│   │   │   ├── common.json         (shared translations)
│   │   │   ├── home.json           (homepage)
│   │   │   ├── about.json          (about page)
│   │   │   ├── projects.json       (projects page)
│   │   │   ├── contact.json        (contact form)
│   │   │   └── footer.json         (footer)
│   │   ├── ro/
│   │   │   ├── common.json
│   │   │   ├── home.json
│   │   │   ├── about.json
│   │   │   ├── projects.json
│   │   │   ├── contact.json
│   │   │   └── footer.json
│   │   └── fr/
│   │       └── (add later - same structure)
│
├── next-i18next.config.js          (configuration)
├── pages/
│   ├── [[...i18n]].js              (dynamic routes)
│   ├── _app.js                     (i18n setup)
│   └── (existing pages)
│
└── components/
    ├── LanguageSwitcher.jsx        (flag selector)
    └── (existing components)
```

---

## 🚀 PROMPT 1: Complete i18n Setup

Use this prompt with Claude Code to set up everything:

```
I need to add multi-language support (English/Romanian/future French) to my Harry React Next.js theme.

REQUIREMENTS:
1. Use next-i18next for language management
2. Support URL-based routing (/en/, /ro/, /fr/)
3. Add flag selector in header (near menu)
4. Translation files in public/locales/ (JSON format)
5. Easy to add French later (just copy folder + translate)
6. Persist language selection (localStorage)
7. SEO-friendly (hreflang tags)
8. No breaking changes to existing code

DELIVERABLES:
1. next-i18next.config.js (configuration file)
2. pages/[[...i18n]].js (dynamic routing)
3. Updated pages/_app.js (i18n wrapper)
4. components/LanguageSwitcher.jsx (flag selector)
5. public/locales/en/common.json (English translations)
6. public/locales/ro/common.json (Romanian translations)
7. .env.local (configuration variables)
8. Integration instructions

TRANSLATIONS NEEDED (English + Romanian):
- Navigation items
- Button labels
- Form labels
- Common UI text
- Meta descriptions
- Page titles

CONTENT TO TRANSLATE (from my markdown):
- Homepage headline
- About biography
- Projects descriptions
- Contact form
- Footer text

OUTPUT FORMAT:
Return each file separately with clear file paths and installation instructions.

QUALITY CRITERIA:
✅ Works with existing pages
✅ No console errors
✅ Responsive flag selector
✅ Smooth language switching
✅ Translations complete for all UI elements
✅ localStorage preserves language choice
```

---

## 🏗️ PROMPT 2: Add Content Translations

After PROMPT 1 works, use this for your specific content:

```
I've set up i18n with next-i18next. Now I need to translate my content.

MY CONTENT (English versions):
- Homepage headline: [FROM YOUR homepage.md]
- About biography: [FROM YOUR about.md]
- Projects: [FROM YOUR projects.md]
- Contact info: [FROM YOUR contact.md]
- CV/Experience: [FROM YOUR cv.md]

TASK:
Create translation files with ALL content translated to Romanian (and structure for French):

DELIVER:
1. public/locales/en/home.json (homepage content)
2. public/locales/en/about.json (about page content)
3. public/locales/en/projects.json (projects + descriptions)
4. public/locales/en/contact.json (contact form + info)
5. public/locales/en/experience.json (CV/skills)
6. public/locales/ro/home.json (same structure, Romanian)
7. public/locales/ro/about.json (same structure, Romanian)
8. public/locales/ro/projects.json (same structure, Romanian)
9. public/locales/ro/contact.json (same structure, Romanian)
10. public/locales/ro/experience.json (same structure, Romanian)

STRUCTURE REQUIREMENT:
Each file must use this format:
{
  "title": "...",
  "description": "...",
  "hero": { ... },
  "sections": { ... }
}

LANGUAGE NOTES:
- English: Natural, professional tech tone
- Romanian: Natural, professional tone (formal "dumneavoastră" for contact)
- Structure: Identical keys in both languages (only values change)
- Keep HTML/markdown-like formatting if needed
```

---

## 🎨 PROMPT 3: Flag Selector Component

Use this if you want to customize the flag selector appearance:

```
I have i18n setup with next-i18next. Now I need an advanced flag selector component.

REQUIREMENTS:
1. Display in header (top-right, near menu)
2. Show both flag icon + language code (EN/RO)
3. Dropdown menu with all available languages
4. Current language highlighted
5. Smooth transition between languages
6. Mobile-responsive (stack vertically on small screens)
7. Accessibility (keyboard navigation, ARIA labels)

DESIGN:
- Flag emojis: 🇬🇧 English, 🇷🇴 Română, 🇫🇷 Français (for future)
- Styling: Match header design (navy + teal theme)
- Animation: Smooth fade between languages
- Position: absolute right, 20px from edge
- Z-index: Above other elements

DELIVER:
1. components/LanguageSwitcher.jsx (advanced version)
2. components/LanguageSwitcher.module.scss (styling)
3. Integration code for Header component
4. Mobile breakpoint adjustments

EXTRA:
- Add loading spinner during language switch
- Persist selection to localStorage
- Prefetch translations for next language
```

---

## 📝 Step-by-Step Implementation

### Step 1: Install Dependencies (5 minutes)

```bash
npm install next-i18next i18next i18next-fs-backend i18next-http-backend
```

### Step 2: Create Configuration (already in PROMPT 1 output)

**File:** `next-i18next.config.js`

This file tells Next.js how to handle languages.

### Step 3: Execute PROMPT 1 (30-45 minutes)

1. Open Claude Code
2. Create new session
3. **Paste PROMPT 1** (from above)
4. Request: "Generate all files for multi-language setup"
5. Wait for output (you'll get 7-8 files)

### Step 4: Add Files to Your Project (15 minutes)

Copy each generated file to correct location:
- `next-i18next.config.js` → root folder
- `pages/[[...i18n]].js` → pages folder
- Updated `pages/_app.js` → pages folder
- `components/LanguageSwitcher.jsx` → components folder
- `public/locales/*/common.json` → public/locales folders
- `.env.local` → root folder

### Step 5: Update Header Component (10 minutes)

Add LanguageSwitcher to your header:

```jsx
// In your Header.jsx
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  return (
    <header className="header">
      <nav>
        {/* Your existing menu */}
      </nav>
      <LanguageSwitcher />  {/* Add this */}
    </header>
  );
}
```

### Step 6: Execute PROMPT 2 (30-45 minutes)

Translate your actual content:

1. New Claude Code session
2. **Paste PROMPT 2** (from above)
3. **Provide your content** (copy from homepage.md, about.md, etc.)
4. Request: "Generate translation files for my content"
5. Wait for output (you'll get 10 JSON files)

### Step 7: Add Translation Files (10 minutes)

Copy all JSON files from PROMPT 2 output to:
- `public/locales/en/*.json` (English)
- `public/locales/ro/*.json` (Romanian)

### Step 8: Test Locally (15 minutes)

```bash
npm run dev
# Visit: http://localhost:3000/en
# Click flag selector → language should switch to /ro
# Check translations appear
# Refresh → language persists (localStorage)
```

### Step 9: Add Hreflang Tags for SEO (10 minutes)

Execute PROMPT 3 for advanced features:

```
I've set up i18n successfully. Now I need:
1. SEO hreflang tags in <head>
2. Language detection (auto-detect from browser)
3. 404 page in both languages

DELIVER:
- Updated pages/_document.js (hreflang tags)
- Updated pages/_app.js (language detection)
- pages/404.jsx (multilingual 404 page)
```

---

## 🎯 Quick Reference: Adding French Later

When you want to add French (takes only 30 minutes):

### Step 1: Create French Folders
```bash
mkdir public/locales/fr
cp public/locales/en/* public/locales/fr/
```

### Step 2: Use This Prompt
```
I need to translate my content to French.

ENGLISH CONTENT:
[Copy from public/locales/en/*.json]

TASK:
Translate all values to French (keep keys identical).

DELIVER:
public/locales/fr/*.json files with French translations
```

### Step 3: Update Config
In `next-i18next.config.js`, add French to languages array:
```javascript
localePath: path.resolve('./public/locales'),
ns: ['common', 'home', 'about', 'projects', 'contact'],
defaultLanguage: 'en',
locales: ['en', 'ro', 'fr'],  // Add 'fr' here
```

### Step 4: Restart Dev Server
```bash
npm run dev
```

**Done!** French now works alongside English & Romanian.

---

## 🧪 Testing Checklist

After implementation, verify:

- [ ] `/en` route works
- [ ] `/ro` route works
- [ ] Flag selector visible in header
- [ ] Clicking flags switches language
- [ ] Language persists on refresh
- [ ] All text translates correctly
- [ ] Console has no errors
- [ ] Mobile view works
- [ ] Flag selector is accessible (keyboard)
- [ ] Page meta tags update per language
- [ ] Links maintain language context (no switching back to EN)

---

## 🚨 Common Issues & Fixes

### Issue 1: "next-i18next not found"
**Fix:**
```bash
npm install next-i18next i18next
npm run dev
```

### Issue 2: Translations not showing (all English)
**Fix:** Check file paths:
```bash
ls public/locales/en/common.json
ls public/locales/ro/common.json
# Files must exist
```

### Issue 3: Language switches back to EN
**Fix:** Check `next-i18next.config.js`:
```javascript
detection: {
  caches: ['localStorage', 'cookie'],  // Enable persistence
}
```

### Issue 4: Console error "i18n is undefined"
**Fix:** Make sure `_app.js` wraps App with i18n HOC:
```javascript
export default appWithTranslation(App);
```

---

## 📊 File Structure Summary

After full setup, you'll have:

```
✅ Configuration:
   - next-i18next.config.js (tells system how to work)
   - .env.local (API keys if needed)

✅ Code:
   - pages/_app.js (wrapped with i18n)
   - pages/[[...i18n]].js (dynamic routing)
   - components/LanguageSwitcher.jsx (flag selector)

✅ Translations (EN + RO):
   - public/locales/en/common.json
   - public/locales/en/home.json
   - public/locales/en/about.json
   - public/locales/en/projects.json
   - public/locales/en/contact.json
   - public/locales/en/experience.json
   - (same in ro/ folder)

✅ Ready for French:
   - Just add public/locales/fr/ folder with same files
   - Update next-i18next.config.js
   - Done!
```

---

## 🎯 Performance Considerations

- **Lazy loading:** Translations load only when needed
- **Caching:** Browser caches translation files
- **Bundle size:** +15KB gzipped (minimal overhead)
- **SEO:** Hreflang tags help Google understand languages
- **Speed:** No performance impact when properly configured

---

## 🔒 Security Notes

- ✅ All translations are static (no database needed)
- ✅ No user input in translations (safe)
- ✅ localStorage only stores language code (secure)
- ✅ No API calls needed (fully client-side after initial load)

---

## 📞 Next Steps

1. **Execute PROMPT 1** → Get i18n setup files
2. **Copy files** → Add to your project
3. **Execute PROMPT 2** → Get translation files
4. **Copy translation files** → Add to public/locales/
5. **Test locally** → Verify everything works
6. **Deploy** → Vercel handles multilingual routing automatically

---

## 🎁 Bonus: SEO Best Practices

With this setup, Google will:
- ✅ Index all language versions
- ✅ Show correct language in search results
- ✅ Not penalize you for duplicate content (hreflang handles it)
- ✅ Track engagement per language separately

---

## 📝 Translation Memory

Keep these translations in a document for future reference:

### Common UI Terms (EN → RO)
| English | Romanian |
|---------|----------|
| Home | Acasă |
| About | Despre |
| Projects | Proiecte |
| Contact | Contact |
| Language | Limba |
| English | Engleză |
| Romanian | Română |
| French | Franceză |

---

## 🚀 You're Ready!

This solution is:
- ✅ Production-ready
- ✅ Scalable (add unlimited languages)
- ✅ SEO-friendly
- ✅ Mobile-responsive
- ✅ Easy to maintain
- ✅ Industry-standard (used by major companies)

### Start Now:
1. Copy PROMPT 1
2. Paste to Claude Code
3. Attach your project files
4. Execute → Get setup files
5. Add to project → Test

**Estimated total time: 2-3 hours for complete EN/RO setup**

---

*This guide uses next-i18next, the industry standard for Next.js internationalization.*  
*Future expansion to French is just adding another language folder + 30 minutes of translation.*
