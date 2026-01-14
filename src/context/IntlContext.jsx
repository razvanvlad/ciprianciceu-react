import React, { createContext, useContext } from 'react';

const IntlContext = createContext();

export function IntlProvider({ locale, messages, children }) {
  return (
    <IntlContext.Provider value={{ locale, messages }}>
      {children}
    </IntlContext.Provider>
  );
}

// Custom hook to replace next-intl's useTranslations
export function useTranslations(namespace) {
  const { messages } = useContext(IntlContext);

  return function t(key) {
    if (!messages) return key;

    // Split the key by dots to handle nested objects
    const keys = `${namespace}.${key}`.split('.');
    let value = messages;

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if path doesn't exist
      }
    }

    return value || key;
  };
}

// Hook to get current locale
export function useLocale() {
  const { locale } = useContext(IntlContext);
  return locale || 'en';
}
