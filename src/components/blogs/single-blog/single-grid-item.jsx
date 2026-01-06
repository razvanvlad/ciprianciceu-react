import React from "react";
import Image from "next/image";
// internal
import { QuoteTwo, DateTwo } from "@svg/index";
import Link from "next/link";

const SingleGridItem = ({
  id,
  img,
  date,
  title,
  sm_desc,
  author_img,
  author_name,
  blog_quote,
  masonry = false,
  outlet_logo,
  link,
  tag,
  baseUrl = '/blog', // Default to /blog, but can be /press or other
}) => {
  // Handle both single tag (string) and multiple tags (array)
  const tags = Array.isArray(tag) ? tag.slice(0, 3) : tag ? [tag] : [];

  // Create URL slug from title (replace Romanian diacritics and spaces with dashes)
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
      .replace(/\s+/g, '-')  // Replace spaces with dashes
      .replace(/--+/g, '-'); // Replace multiple dashes with single dash
  };

  const blogUrl = `${baseUrl}/${createSlug(title)}`;

  return (
    <React.Fragment>
      {!blog_quote && (
        <div
          className={`blog__grid-item ${masonry ? "blog__masonary" : ""} ${
            !img ? "no-img" : ""
          }`}
        >
          <div className="blog__item-10 white-bg transition-3 mb-30 fix">
            <div className="blog__thumb-10 w-img fix" style={{ height: "280px", overflow: "hidden" }}>
              {img && (
                <Link href={blogUrl}>
                  <Image
                    src={img}
                    alt="blog img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                </Link>
              )}
              <div className="blog__tag-10" style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                {tags.map((t, index) => (
                  <Link key={index} href={blogUrl}>{t}</Link>
                ))}
              </div>
            </div>
            <div className="blog__content-10">
              <div className="blog__content-10-top">
                <div className="blog__meta-10-wrapper d-flex align-items-center">
                  <div className="blog__meta-10 has-date">
                    <span>
                      <DateTwo /> {date}
                    </span>
                  </div>
                </div>
                <h3 className="blog__title-10" style={{minHeight: '6em', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                  <Link href={blogUrl}>{title}</Link>
                </h3>

                <p style={{minHeight: '4.5em', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{sm_desc}...</p>
              </div>
              <div className="blog__content-10-bottom">
                <div className="blog__outlet-logo d-flex align-items-center gap-3">
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                      Original Article:
                    </a>
                  )}
                  <div className="blog__outlet-logo-img">
                    {outlet_logo ? (
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={outlet_logo}
                          alt={author_name || "Publication logo"}
                          style={{objectFit: 'contain', maxWidth: '140px', maxHeight: '40px', width: 'auto', height: 'auto'}}
                          unoptimized={typeof outlet_logo === 'object' && outlet_logo?.src?.endsWith('.svg')}
                        />
                      </a>
                    ) : author_img && (
                      <a href="#">
                        <Image src={author_img} alt="author" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {blog_quote && (
        <div className={`${masonry ? "blog__grid-item blog__masonary" : ""}`}>
          <div className="blog__grid-quote mb-30">
            <div className="blog__grid-quote-icon">
              <span>
                <QuoteTwo />
              </span>
            </div>
            <div className="blog__grid-quote-content">
              <span>{title}</span>
              <p>{sm_desc}...</p>
              <cite>{author_name}</cite>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SingleGridItem;
