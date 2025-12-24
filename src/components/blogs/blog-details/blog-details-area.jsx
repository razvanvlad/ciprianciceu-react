import React from "react";
import Image from "next/image";
// internal
import blog_data from "@data/blog-data";
import SingleGridItem from "../single-blog/single-grid-item";
import blog_img from "@assets/img/blog/blog-big-1.jpg";
import PostNavigation from "./post-navigation";
import PostShareWrapper from "./post-share-wrapper";
import SingleMetaItem from "./single-meta-item";


// blog data
const blog_items = blog_data.filter((blog) => blog.blog_grid).slice(0, 2);

const BlogDetailsArea = ({ blog }) => {
  // Fallback to default image if blog.img is not available
  const featuredImage = blog?.img || blog_img;

  return (
    <section className="postbox__area grey-bg-4 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="postbox__wrapper">
              <div className="postbox__top">
                <div className="postbox__thumb m-img mb-55">
                  <Image src={featuredImage} alt={blog?.title || "blog img"} />
                </div>
              </div>
              <div className="postbox__main">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="postbox__main-wrapper">
                      <div className="postbox__meta-wrapper d-flex align-items-center flex-wrap">
                        <div className="postbox__meta-item mb-30">
                          <div className="postbox__meta-author d-flex align-items-center">
                            {blog?.outlet_logo && (
                              <div className="postbox__meta-author-thumb">
                                <Image src={blog.outlet_logo} alt={blog.author_name || "Publication"} style={{objectFit: 'contain', maxWidth: '80px', maxHeight: '30px'}} />
                              </div>
                            )}
                            <div className="postbox__meta-content">
                              <span className="postbox__meta-type">Published by</span>
                              <p className="postbox__meta-name">{blog?.author_name || "Unknown"}</p>
                            </div>
                          </div>
                        </div>
                        <SingleMetaItem
                          title="Published"
                          subtitle={blog?.date || "No date"}
                        />
                        {blog?.link && (
                          <div className="postbox__meta-item mb-30">
                            <div className="postbox__meta-content">
                              <span className="postbox__meta-type">Source</span>
                              <p className="postbox__meta-name">
                                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                                  View Original
                                </a>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="postbox__details-content-wrapper">
                        <h3 className="postbox__details-title">
                          {blog?.title || "Untitled Article"}
                        </h3>

                        {/* Dynamic article content */}
                        {blog?.content ? (
                          <div
                            className="article-content"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                          />
                        ) : (
                          <p>No content available for this article.</p>
                        )}
                      </div>
                      {/* navigation start */}
                      <PostNavigation />
                      {/* navigation end */}

                      {/* share wrapper start */}
                      <PostShareWrapper />
                      {/* share wrapper end */}

                      <div className="postbox__related mb-65">
                        <h3 className="postbox__related-title">
                          You may also like
                        </h3>

                        <div className="row">
                          {blog_items.map((blog) => (
                            <div
                              key={blog.id}
                              className="col-xl-6 col-lg-12 col-md-6"
                            >
                              <SingleGridItem {...blog} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
