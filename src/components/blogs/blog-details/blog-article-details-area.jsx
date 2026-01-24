import React from "react";
import { DateTwo, UserTwo } from "@svg/index";

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
            <article className="postbox__item format-standard white-bg transition-3 p-5 mb-50">
              <div className="postbox__content">
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
