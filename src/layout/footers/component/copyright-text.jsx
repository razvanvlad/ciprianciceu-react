import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from '@context/IntlContext';

const CopyrightText = () => {
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <p suppressHydrationWarning>
      {t('copyrightBy').replace('{year}', year)} <Link href={`/${locale}`}>Ciprian Ciceu</Link> {' '}
      {t('allRightsReserved')}
    </p>
  );
};

export default CopyrightText;
