import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from '@context/IntlContext';

const CookieConsent = () => {
  const locale = useLocale();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-content">
        <div className="cookie-consent-text">
          <p>
            We use cookies to enhance your browsing experience, analyze site traffic,
            and personalize content. By clicking "Accept All", you consent to our use
            of cookies.{" "}
            <Link href={`/${locale}/cookie-policy`} className="cookie-policy-link">
              Learn more
            </Link>
          </p>
        </div>
        <div className="cookie-consent-buttons">
          <button
            onClick={handleDecline}
            className="cookie-btn cookie-btn-decline"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="cookie-btn cookie-btn-accept"
          >
            Accept All
          </button>
        </div>
      </div>

      <style jsx>{`
        .cookie-consent-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #1a1a1a;
          color: #ffffff;
          padding: 20px;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
          z-index: 9999;
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .cookie-consent-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cookie-consent-text {
          flex: 1;
          min-width: 280px;
        }

        .cookie-consent-text p {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: #e0e0e0;
        }

        .cookie-policy-link {
          color: #ffffff;
          text-decoration: underline;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .cookie-policy-link:hover {
          color: #4a90e2;
        }

        .cookie-consent-buttons {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .cookie-btn {
          padding: 10px 24px;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .cookie-btn-decline {
          background: transparent;
          color: #ffffff;
          border: 1px solid #666;
        }

        .cookie-btn-decline:hover {
          background: #333;
          border-color: #888;
        }

        .cookie-btn-accept {
          background: #4a90e2;
          color: #ffffff;
        }

        .cookie-btn-accept:hover {
          background: #357abd;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(74, 144, 226, 0.4);
        }

        @media (max-width: 768px) {
          .cookie-consent-banner {
            padding: 16px;
          }

          .cookie-consent-content {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }

          .cookie-consent-buttons {
            width: 100%;
            justify-content: stretch;
          }

          .cookie-btn {
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieConsent;
