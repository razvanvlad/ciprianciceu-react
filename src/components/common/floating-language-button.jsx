import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocale } from '@context/IntlContext';
import { FlagEN, FlagFR, FlagRO, FlagAR } from '@svg/index';

const FloatingLanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('en');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const contextLocale = useLocale();

  useEffect(() => {
    setMounted(true);
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
  const CurrentFlag = currentLanguage.FlagComponent;

  const handleLanguageChange = (newLocale) => {
    const { asPath } = router;
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
