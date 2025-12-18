import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import { Android, Ios } from "@svg/index";
import qrcode from "@assets/img/icon/qrcode.png";
import { PhotoView } from "react-photo-view";
import PhotoProviderWrapper from "src/provider/PhotoProviderWrapper";

const FooterWidget = ({ item }) => {
  const { col, title, lists, app_content, widget_num } = item || {};
  return (
    <>
      <div className={`footer__widget ${widget_num} mb-50 footer-col-${col}`}>
        <h3 className="footer__widget-title">{title}</h3>
        {!app_content && (
          <div className="footer__widget-content">
            <ul>
              {lists.map((l, i) => (
                <li key={i}>
                  <Link href={l.link}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {app_content && (
          <PhotoProviderWrapper>
          <div className="footer__widget-content">
            <div className="footer__app mb-30">
              <div className="footer__app-item">
                <a href="#" className="tp-btn-app">
                  <Android />
                  Android
                </a>
              </div>
              <div className="footer__app-item">
                <a href="#" className="tp-btn-app">
                  <Ios />
                  Mac iOS
                </a>
              </div>
            </div>
            <div
              className="footer__qrcode d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <div className="footer__qrcode-thumb mr-10">
                <PhotoView src={qrcode.src}>
                <a className="popup-image">
                  <Image src={qrcode} alt="qrcode" />
                </a>
                </PhotoView>
              </div>
              <div className="footer__qrcode-content">
                <p>
                  <a className="popup-image">Scan to Download The Themes</a>
                </p>
              </div>
            </div>
          </div>
          </PhotoProviderWrapper>
        )}
      </div>
    </>
  );
};

export default FooterWidget;
