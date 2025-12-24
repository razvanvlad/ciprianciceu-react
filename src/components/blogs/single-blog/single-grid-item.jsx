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
}) => {
  return (
    <React.Fragment>
      {!blog_quote && (
        <div
          className={`blog__grid-item ${masonry ? "blog__masonary" : ""} ${
            !img ? "no-img" : ""
          }`}
        >
          <div className="blog__item-10 white-bg transition-3 mb-30 fix">
            <div className="blog__thumb-10 w-img fix">
              {img && (
                <Link href={`/blog-details/${id}`}>
                  <Image
                    src={img}
                    alt="blog img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Link>
              )}
              <div className="blog__tag-10">
                <Link href={`/blog-details/${id}`}>Read More</Link>
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
                  <Link href={`/blog-details/${id}`}>{title}</Link>
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
                        <Image src={outlet_logo} alt={author_name} style={{objectFit: 'contain', maxWidth: '140px', maxHeight: '40px', width: 'auto', height: 'auto'}} />
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
