import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import { DateTwo, UserTwo } from "@svg/index";
import { useTranslations, useLocale } from '@context/IntlContext';

const SingleArticlePostbox = ({
  id,
  img,
  imgAlt,
  title,
  subtitle,
  sm_desc,
  date,
  author_name,
  tag,
  link,
  translationNamespace = 'press',
}) => {
  const t = useTranslations(translationNamespace + '.ui');
  const locale = useLocale();
  // Handle both single tag (string) and multiple tags (array)
  const tags = Array.isArray(tag) ? tag.slice(0, 3) : tag ? [tag] : [];

  // Create URL slug from title or use provided link (must match blog/[slug].jsx)
  const createSlug = (str) => {
    if (!str || typeof str !== 'string') return '';

    // Replace Romanian diacritics with ASCII equivalents
    const normalized = str
      .replace(/ă/g, 'a')
      .replace(/â/g, 'a')
      .replace(/î/g, 'i')
      .replace(/ș/g, 's')
      .replace(/ț/g, 't')
      .replace(/Ă/g, 'A')
      .replace(/Â/g, 'A')
      .replace(/Î/g, 'I')
      .replace(/Ș/g, 'S')
      .replace(/Ț/g, 'T');

    return normalized
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[?!#$%^&*()+=[\]{}<>|\\;:'",`~]/g, '') // Remove URL-unsafe characters
      .replace(/--+/g, '-');
  };

  // Use the translation namespace to determine the URL path
  const urlPath = translationNamespace === 'blog' ? 'blog' : 'press';
  const blogUrl = link || `/${locale}/${urlPath}/${createSlug(title)}`;

  return (
    <article className="postbox__item format-standard mb-50 transition-3">
      {/* Article Thumbnail */}
      {img && (
        <div className="postbox__thumb" style={{
          position: 'relative',
          width: '100%',
          height: '280px',
          overflow: 'hidden',
          borderRadius: '8px 8px 0 0',
        }}>
          <Link href={blogUrl}>
            <Image
              src={img}
              alt={imgAlt || title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
              style={{ objectFit: 'cover' }}
              quality={80}
            />
          </Link>
        </div>
      )}
      <div className="postbox__content">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="postbox__meta mb-20" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {tags.map((t, index) => (
              <span
                key={index}
                style={{
                  display: 'inline-block',
                  padding: '6px 16px',
                  background: '#f0f0f0',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#555',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="postbox__title mb-20">
          <Link href={blogUrl} style={{ fontSize: '28px', lineHeight: '1.3' }}>
            {title}
          </Link>
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <h4 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#666',
            marginBottom: '20px',
            lineHeight: '1.5'
          }}>
            {subtitle}
          </h4>
        )}

        {/* Meta Info */}
        <div className="postbox__meta mb-20">
          {author_name && (
            <span style={{ marginRight: '20px' }}>
              <UserTwo />
              {author_name}
            </span>
          )}
          {date && (
            <span>
              <DateTwo />
              {date}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="postbox__text mb-30">
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#555' }}>
            {sm_desc}
          </p>
        </div>

        {/* Read More Button */}
        <div className="postbox__read-more">
          <Link href={blogUrl} className="tp-btn">
            {t('readMore')}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleArticlePostbox;
