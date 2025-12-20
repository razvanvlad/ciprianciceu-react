import React, { useState, useEffect } from 'react';

const Languages = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageSelect = (lang) => {
    setSelectedLang(lang);
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
          English
        </span>
        <ul className="header__lang-list tp-lang-list">
          <li>English</li>
          <li>Română</li>
        </ul>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <span
        onClick={() => setToggle(!toggle)}
        className="header__lang-selected-lang tp-lang-toggle"
        id="tp-header-lang-toggle"
        suppressHydrationWarning
      >
        {selectedLang}
      </span>
      <ul className={`header__lang-list tp-lang-list ${toggle ? 'tp-lang-list-open' : ''}`}>
        <li onClick={() => handleLanguageSelect('English')}>English</li>
        <li onClick={() => handleLanguageSelect('Română')}>Română</li>
      </ul>
    </React.Fragment>
  );
};

export default Languages;