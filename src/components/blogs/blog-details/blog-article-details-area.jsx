import React from "react";
import Image from "next/image";
import { DateTwo, UserTwo } from "@svg/index";

const SITE_URL = "https://ciprianciceu.com";

function SocialShareButtons({ url, title }) {
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shares = [
    {
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
      color: "#0A66C2",
    },
    {
      label: "X / Twitter",
      icon: "fa-brands fa-x-twitter",
      href: `https://x.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
      color: "#000",
    },
    {
      label: "Facebook",
      icon: "fa-brands fa-facebook-f",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      color: "#1877F2",
    },
    {
      label: "Medium",
      icon: "fa-brands fa-medium",
      href: `https://medium.com/new-story?url=${encoded}`,
      color: "#000",
    },
    {
      label: "Instagram Story",
      icon: "fa-brands fa-instagram",
      href: `https://www.instagram.com/`,
      color: "#E1306C",
      note: "Copy link",
    },
  ];

  return (
    <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #e5e5e5' }}>
      <p style={{ fontWeight: '600', fontSize: '15px', marginBottom: '16px', color: '#333' }}>Share this article:</p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        {shares.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label + (s.note ? ` (${s.note})` : '')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '8px',
              background: s.color,
              color: '#fff',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            <i className={s.icon} style={{ fontSize: '16px' }}></i>
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

const BlogArticleDetailsArea = ({ blog, locale = 'en', backToBlogText = 'Back to Blog' }) => {
  if (!blog) {
    return (
      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-10">
              <div className="text-center">
                <h2>Article not found</h2>
                <p>The article you're looking for doesn't exist.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Handle both single tag (string) and multiple tags (array)
  const tags = Array.isArray(blog.tag) ? blog.tag : blog.tag ? [blog.tag] : [];

  return (
    <section className="postbox__area grey-bg-4 pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-10 col-xl-10 col-lg-10">
            <article className="postbox__item format-standard white-bg transition-3 mb-50" style={{ overflow: 'hidden' }}>
              {/* Hero Image */}
              {blog.img && (
                <div style={{
                  width: '100%',
                  overflow: 'hidden',
                }}>
                  <Image
                    src={blog.img}
                    alt={blog.imgAlt || blog.title}
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    quality={85}
                    priority
                  />
                </div>
              )}
              <div className="postbox__content p-5">
                {/* Tags */}
                {tags.length > 0 && (
                  <div className="postbox__meta mb-30" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {tags.map((t, index) => (
                      <span
                        key={index}
                        style={{
                          display: 'inline-block',
                          padding: '8px 18px',
                          background: '#f5f5f5',
                          borderRadius: '25px',
                          fontSize: '14px',
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
                <h1 className="postbox__title mb-20" style={{ fontSize: '42px', lineHeight: '1.2', fontWeight: '700' }}>
                  {blog.title}
                </h1>

                {/* Subtitle */}
                {blog.subtitle && (
                  <h2 style={{
                    fontSize: '22px',
                    fontWeight: '400',
                    color: '#666',
                    marginBottom: '30px',
                    lineHeight: '1.5'
                  }}>
                    {blog.subtitle}
                  </h2>
                )}

                {/* Meta Info */}
                <div className="postbox__meta mb-40" style={{ paddingBottom: '30px', borderBottom: '1px solid #e5e5e5' }}>
                  {blog.author_name && (
                    <span style={{ marginRight: '30px', fontSize: '15px' }}>
                      <UserTwo />
                      <strong>By</strong> {blog.author_name}
                    </span>
                  )}
                  {blog.date && (
                    <span style={{ fontSize: '15px' }}>
                      <DateTwo />
                      {blog.date}
                    </span>
                  )}
                </div>

                {/* Article Content */}
                <div
                  className="postbox__text blog-article-content"
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.8',
                    color: '#333'
                  }}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Social Share */}
                <SocialShareButtons
                  url={`${SITE_URL}/${locale}/blog/${blog.slug || blog.title}`}
                  title={blog.seoTitle || blog.title}
                />

                {/* Back to Blog Link */}
                <div className="postbox__read-more mt-50 pt-40" style={{ borderTop: '1px solid #e5e5e5' }}>
                  <a href={`/${locale}/blog`} className="tp-btn">
                    ← {backToBlogText}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-article-content h3 {
          font-size: 28px;
          font-weight: 600;
          margin-top: 40px;
          margin-bottom: 20px;
          color: #222;
        }

        .blog-article-content h4 {
          font-size: 22px;
          font-weight: 600;
          margin-top: 30px;
          margin-bottom: 15px;
          color: #333;
        }

        .blog-article-content p {
          margin-bottom: 20px;
        }

        .blog-article-content ul {
          margin: 20px 0;
          padding-left: 25px;
        }

        .blog-article-content ul li {
          margin-bottom: 12px;
          line-height: 1.7;
        }

        .blog-article-content blockquote {
          font-size: 20px;
          font-style: italic;
          padding: 25px 30px;
          margin: 35px 0;
          background: #f9f9f9;
          border-left: 4px solid #0EA5E9;
          color: #555;
        }

        .blog-article-content strong {
          font-weight: 600;
          color: #222;
        }

        .blog-article-content a {
          color: #0EA5E9;
          text-decoration: underline;
        }

        .blog-article-content a:hover {
          color: #0284C7;
        }
      `}</style>
    </section>
  );
};

export default BlogArticleDetailsArea;
