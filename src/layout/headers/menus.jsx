import Link from 'next/link';
import React from 'react';
import { useTranslations, useLocale } from '@context/IntlContext';
// internal
import menu_data from '@data/menu-data';

const Menus = () => {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li key={i} className={`has-dropdown ${menu.megaMenu ? 'has-mega-menu' : ''}`}>
          <Link href={`/${locale}${menu.link}`}>
            {t(menu.titleKey)}
          </Link>
          {menu.hasDropdown && <ul className="submenu">
            {menu.submenus.map((sub, i) => (
              <li key={i}>
                <Link href={`/${locale}${sub.link}`}>
                  {sub.title}
                </Link>
              </li>
            ))}
          </ul>}
          {menu.mega_menus && <ul className="mega-menu">
            {menu.mega_menus.map((mega, i) => (
              <li key={i}>
                <Link href={`/${locale}${mega.link}`} className="mega-menu-title">
                  {mega.title}
                </Link>
                <ul>
                  {mega.submenus.map((sub_mega, i) => (
                    <li key={i}>
                      <Link href={`/${locale}${sub_mega.link}`}>
                        {sub_mega.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>}
        </li>
      ))}

    </ul>
  );
};

export default Menus;
