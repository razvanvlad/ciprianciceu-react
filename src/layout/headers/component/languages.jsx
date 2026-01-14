import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocale } from '@context/IntlContext';
import { FlagEN, FlagFR, FlagRO, FlagAR } from '@svg/index';

const Languages = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const contextLocale = useLocale();
  const [currentLocale, setCurrentLocale] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Extract locale from URL path after mount
    const pathSegments = router.asPath.split('/').filter(Boolean);
    const locales = ['en', 'fr', 'ro', 'ar'];
    const detectedLocale = locales.includes(pathSegments[0]) ? pathSegments[0] : contextLocale;
    setCurrentLocale(detectedLocale);
  }, [router.asPath, contextLocale]);

  const languages = [
    { code: 'en', name: 'English', FlagComponent: FlagEN },
    { code: 'fr', name: 'Français', FlagComponent: FlagFR },
    { code: 'ro', name: 'Română', FlagComponent: FlagRO },
    { code: 'ar', name: 'العربية', FlagComponent: FlagAR }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (newLocale) => {
    const { asPath } = router;
    // Remove current locale from path to get base path
    const basePath = asPath.replace(/^\/(en|fr|ro|ar)/, '') || '/';
    // Build new path with new locale
    const newPath = `/${newLocale}${basePath}`;
    router.push(newPath);
    setToggle(false);
  };

  // Prevent hydration mismatch by rendering consistent content on server
  if (!mounted) {
    return (
      <React.Fragment>
        <span
          className="header__lang-selected-lang tp-lang-toggle"
          id="tp-header-lang-toggle"
        >
          <FlagEN /> English
        </span>
        <ul className="header__lang-list tp-lang-list">
          <li><FlagEN /> English</li>
          <li><FlagFR /> Français</li>
          <li><FlagRO /> Română</li>
          <li><FlagAR /> العربية</li>
        </ul>
      </React.Fragment>
    );
  }

  const CurrentFlag = currentLanguage?.FlagComponent;

  return (
    <div className="header__lang-wrapper">
      <span
        onClick={() => setToggle(!toggle)}
        className="header__lang-selected-lang tp-lang-toggle"
        id="tp-header-lang-toggle"
        suppressHydrationWarning
      >
        {CurrentFlag && <CurrentFlag />}
        <span className="header__lang-name">{currentLanguage?.name}</span>
      </span>
      <ul className={`header__lang-list tp-lang-list ${toggle ? 'tp-lang-list-open' : ''}`}>
        {languages.map((lang) => {
          const Flag = lang.FlagComponent;
          return (
            <li
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={currentLocale === lang.code ? 'active' : ''}
            >
              <Flag /> {lang.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Languages;