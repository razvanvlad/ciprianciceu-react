import React, { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from '@context/IntlContext';
// internal
import menu_data from "@data/menu-data";

const MobileMenus = () => {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [subMenu, setSubMenu] = useState("");
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  // openSubMobileMenu
  const openSubMobileMenu = (s_menu) => {
    if (subMenu === s_menu) {
      setSubMenu("");
    } else {
      setSubMenu(s_menu);
    }
  };
  return (
    <nav className="mean-nav">
      <ul>
        {menu_data.map((menu, i) => (
          <React.Fragment key={i}>
            {menu.hasDropdown && !menu.megaMenu && !menu.pages && (
              <li className="has-dropdown">
                <Link href={`/${locale}${menu.link}`}>{t(menu.titleKey)}</Link>
                <ul
                  className="submenu"
                  style={{
                    display: navTitle === menu.titleKey ? "block" : "none",
                  }}
                >
                  {menu.submenus.map((sub, i) => (
                    <li key={i}>
                      <Link href={`/${locale}${sub.link}`}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mean-expand ${
                    navTitle === menu.titleKey ? "mean-clicked" : ""
                  }`}
                  onClick={() => openMobileMenu(menu.titleKey)}
                  style={{ fontSize: "18px",cursor:'pointer' }}
                >
                  <i className="fal fa-plus"></i>
                </a>
              </li>
            )}

            {menu.megaMenu && !menu.pages && (
              <li className="has-dropdown has-mega-menu">
                <Link href={`/${locale}${menu.link}`}>{menu.title}</Link>
                <ul
                  className="mega-menu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.mega_menus.map((mega_m, i) => (
                    <li key={i}>
                      <Link href={`/${locale}${mega_m.link}`} className="mega-menu-title">
                        {mega_m.title}
                      </Link>
                      <ul
                        style={{
                          display: subMenu === mega_m.title ? "block" : "none",
                        }}
                      >
                        {mega_m.submenus.map((sub_m, i) => (
                          <li key={i}>
                            <Link href={`/${locale}${sub_m.link}`}>{sub_m.title}</Link>
                          </li>
                        ))}
                      </ul>
                      <a
                        className={`mean-expand ${
                          subMenu === mega_m.title ? "mean-clicked" : ""
                        }`}
                        onClick={() => openSubMobileMenu(mega_m.title)}
                        style={{ fontSize: "18px",cursor:'pointer' }}
                      >
                        <i className="fal fa-plus"></i>
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mean-expand ${
                    navTitle === menu.title ? "mean-clicked" : ""
                  }`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px",cursor:'pointer' }}
                >
                  <i className="fal fa-plus"></i>
                </a>
              </li>
            )}

            {menu.pages && (
              <li className="has-dropdown has-mega-menu">
                <Link href={`/${locale}${menu.link}`}>{menu.title}</Link>
                <ul
                  className="mega-menu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.mega_menus.map((mega_m, i) => (
                    <li key={i}>
                      <Link href={`/${locale}${mega_m.link}`} className="mega-menu-title">
                        {mega_m.title}
                      </Link>
                      <ul
                        style={{
                          display: subMenu === mega_m.title ? "block" : "none",
                        }}
                      >
                        {mega_m.submenus.map((sub_m, i) => (
                          <li key={i}>
                            <Link href={`/${locale}${sub_m.link}`}>{sub_m.title}</Link>
                          </li>
                        ))}
                      </ul>
                      <a
                        className={`mean-expand ${
                          subMenu === mega_m.title ? "mean-clicked" : ""
                        }`}
                        onClick={() => openSubMobileMenu(mega_m.title)}
                        style={{ fontSize: "18px",cursor:'pointer' }}
                      >
                        <i className="fal fa-plus"></i>
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mean-expand ${
                    navTitle === menu.title ? "mean-clicked" : ""
                  }`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px",cursor:'pointer' }}
                >
                  <i className="fal fa-plus"></i>
                </a>
              </li>
            )}

            {!menu.hasDropdown && !menu.megaMenu && !menu.pages && (
              <li>
                <Link href={`/${locale}${menu.link}`}>{t(menu.titleKey)}</Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
