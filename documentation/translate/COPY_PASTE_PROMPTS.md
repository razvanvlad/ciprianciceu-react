# 🎯 READY-TO-COPY: i18n Prompts for Claude Code

## ⚡ PROMPT 1: Complete Setup (Copy & Paste This)

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
9. Mobile-responsive flag selector

DELIVERABLES:
1. next-i18next.config.js (configuration file)
2. pages/[[...i18n]].js (dynamic routing)
3. Updated pages/_app.js (i18n wrapper)
4. components/LanguageSwitcher.jsx (flag selector)
5. public/locales/en/common.json (English translations)
6. public/locales/ro/common.json (Romanian translations)
7. Installation instructions

TRANSLATIONS NEEDED (English + Romanian):
- Header navigation (Home, About, Projects, Contact)
- Button labels (Submit, Cancel, More, etc.)
- Form labels & placeholders
- Common UI text
- Meta descriptions
- Page titles
- Footer text

OUTPUT FORMAT:
Return each file separately with clear file paths. Use this exact structure:

--- FILE: next-i18next.config.js ---
[file content]

--- FILE: pages/[[...i18n]].js ---
[file content]

... etc

QUALITY CRITERIA:
✅ Works with existing Harry React pages
✅ No console errors
✅ Responsive flag selector
✅ Smooth language switching
✅ All UI elements translated
✅ localStorage persists language
✅ URL shows language code (/en, /ro)
```

---

## 🌐 PROMPT 2: Content Translations (Copy & Paste This)

**Use AFTER PROMPT 1 works**

```
I've set up i18n with next-i18next and it's working. Now I need to translate my actual content.

MY CONTENT (in English):

HOMEPAGE HERO:
Title: "Ciprian Ciceu | Entrepreneur & FinTech Innovator"
Subtitle: "Building AI-powered financial ecosystems & educating the next generation"
CTA Button: "View My Work"

ABOUT:
Bio: "I'm an entrepreneur and fintech specialist with 10+ years in building financial systems. Founded Mainet X, BeTrader Academy, and multiple educational initiatives. Focus on blockchain technology, trading automation, and entrepreneurship education."

PROJECTS:
1. Mainet X
   Description: "AI-powered trading platform with automated strategies"
   
2. BeTrader Academy
   Description: "Educational platform teaching blockchain and trading"
   
3. Blockchain Projects
   Description: "International initiatives in Dubai, India, Europe"

CONTACT:
Form Title: "Get In Touch"
Button: "Send Message"
Email: contact@ciprianciceu.com

TASK:
Create translation files with this content translated to Romanian.

DELIVER:
1. public/locales/en/common.json (UI translations)
2. public/locales/en/home.json (homepage content)
3. public/locales/en/about.json (about content)
4. public/locales/en/projects.json (projects content)
5. public/locales/en/contact.json (contact content)
6. public/locales/ro/common.json (same structure, Romanian)
7. public/locales/ro/home.json (same structure, Romanian)
8. public/locales/ro/about.json (same structure, Romanian)
9. public/locales/ro/projects.json (same structure, Romanian)
10. public/locales/ro/contact.json (same structure, Romanian)

REQUIREMENTS:
- JSON files with identical key structure (only values differ)
- All values fully translated
- Professional tone in both languages
- Keep any HTML/formatting
- Ready to use immediately (no placeholders)

OUTPUT FORMAT:
--- FILE: public/locales/en/common.json ---
{
  "nav": {
    "home": "Home",
    "about": "About",
    ...
  }
}

--- FILE: public/locales/ro/common.json ---
{
  "nav": {
    "home": "Acasă",
    "about": "Despre",
    ...
  }
}

... continue for all files
```

---

## 🎨 PROMPT 3: Flag Selector Component (Copy & Paste This)

**Use if you want advanced flag selector**

```
I have i18n working with next-i18next. Now I need an advanced flag selector component.

REQUIREMENTS:
1. Display in header (top-right area, near menu)
2. Show flag emoji + language code (EN/RO)
3. Dropdown menu showing all available languages
4. Current language highlighted
5. Smooth transition when switching
6. Mobile-responsive (adapt for small screens)
7. Full accessibility (keyboard navigation, ARIA labels)
8. Uses your Harry React brand colors (Navy #1a1a2e, Teal #0099cc)

DESIGN SPECS:
- Flag emojis: 🇬🇧 EN, 🇷🇴 RO, 🇫🇷 FR (for future)
- Styling: Match Harry React design system
- Animation: Smooth fade on language switch
- Position: Sticky to header
- Z-index: Above content
- Font: Professional, sans-serif

DELIVER:
1. components/LanguageSwitcher.jsx (complete component)
2. components/LanguageSwitcher.module.scss (styling)
3. Integration code showing where to add in Header
4. Mobile breakpoint handling

EXTRA FEATURES:
- Loading spinner during switch
- localStorage persistence
- Prefetch next language
- Smooth scroll on language change
- No page flicker
```

---

## 📋 PROMPT 4: Add French Later (Copy & Paste This)

**Use when you want to add French (takes 30 minutes)**

```
I need to add French language support to my existing i18n setup.

CURRENT SETUP:
- Already have English and Romanian
- Using next-i18next
- Files in public/locales/en/ and public/locales/ro/

TASK:
Translate all content to French (professionally).

MY CONTENT (English versions from my current translation files):
[PASTE CONTENT FROM public/locales/en/*.json]

DELIVER:
1. public/locales/fr/common.json
2. public/locales/fr/home.json
3. public/locales/fr/about.json
4. public/locales/fr/projects.json
5. public/locales/fr/contact.json

REQUIREMENTS:
- Identical structure to English/Romanian files
- Professional French (appropriate for B2B/entrepreneur context)
- Ready to use immediately
- All keys exactly match English version

NOTES:
After I get these files, I'll:
1. Copy them to public/locales/fr/
2. Update next-i18next.config.js to add 'fr' to locales array
3. Restart dev server
4. French automatically works
```

---

## 🔧 Installation Steps (Summary)

### Step 1: Install Package
```bash
npm install next-i18next i18next i18next-fs-backend i18next-http-backend
npm run dev
```

### Step 2: Run PROMPT 1
- Open Claude Code
- New session
- Copy PROMPT 1 above
- Paste it
- Wait for files

### Step 3: Add Files to Project
```bash
# Create folders
mkdir -p public/locales/en public/locales/ro

# Copy all generated files to correct locations:
# - next-i18next.config.js → root/
# - pages/[[...i18n]].js → pages/
# - Updated pages/_app.js → pages/
# - components/LanguageSwitcher.jsx → components/
# - public/locales/*/common.json → correct location
```

### Step 4: Update Header
Find your Header component, add flag selector:
```jsx
import LanguageSwitcher from '@/components/LanguageSwitcher';

// Inside header JSX:
<LanguageSwitcher />
```

### Step 5: Run PROMPT 2
- Get content translations
- Copy JSON files
- Paste to public/locales/

### Step 6: Test
```bash
npm run dev
# Visit http://localhost:3000/en
# Click flag → switch to /ro
# Verify translations
# Test localStorage persistence
```

---

## ✅ Verification Checklist

After setup, verify:

```
ROUTING:
[ ] http://localhost:3000/en works
[ ] http://localhost:3000/ro works
[ ] http://localhost:3000/fr works (after adding French)

UI:
[ ] Flag selector visible in header
[ ] Clicking flags changes language
[ ] Current language is highlighted
[ ] Dropdown is accessible

FUNCTIONALITY:
[ ] Language persists on page refresh
[ ] All text translates correctly
[ ] No console errors
[ ] No 404 errors
[ ] Mobile view responsive

LINKS:
[ ] Internal links maintain language context
[ ] Switching languages on home stays on home
[ ] Switching languages on about stays on about

PERFORMANCE:
[ ] Page loads fast
[ ] No loading delays
[ ] No flashing/flickering
```

---

## 🎯 Copy-Paste Ready

All prompts above are **100% copy-paste ready**. Just:

1. Open Claude Code
2. New session
3. Copy one of the prompts above
4. Paste it
5. Click send
6. Wait for output

**That's it!**

---

## 📊 Timeline

- **PROMPT 1 Setup:** 30-45 minutes
- **File integration:** 15 minutes
- **PROMPT 2 Content:** 30-45 minutes
- **Testing:** 15 minutes
- **TOTAL:** ~2 hours for EN + RO

**Adding French later:** 30 minutes total

---

## 🚀 You're Ready

Everything is prepared. Just execute the prompts in order!

Questions? Check I18N_MULTILANGUAGE_GUIDE.md

**Start with PROMPT 1 → Copy & Paste to Claude Code → Execute**
