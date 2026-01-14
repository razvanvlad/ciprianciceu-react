import React, { useEffect } from 'react';
import BackToTopCom from '../components/common/scroll-to-top';
import ScrollToTop from '../components/common/scroll-to-top';
import CookieConsent from '../components/common/cookie-consent';
import FloatingLanguageButton from '../components/common/floating-language-button';
import { animationCreate } from '../utils/utils';

const Wrapper = ({children}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 200);
  },[])
  return (
    <>
      {children}
      <BackToTopCom/>
      <CookieConsent/>
      <FloatingLanguageButton/>
    </>
  );
};

export default Wrapper;