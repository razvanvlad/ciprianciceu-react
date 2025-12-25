import React from "react";
// internal
import blog_data from "@data/blog-data";
import SingleGridItem from "./single-blog/single-grid-item";
import Pagination from "@ui/Pagination";
import { ShapeLine } from "@svg/index";
import Link from "next/link";

// blog items
const blog_items = blog_data.filter((blog) => blog.blog_grid);

const BlogGridArea = ({ limit, url }) => {
  const items = limit ? blog_items.slice(0, limit) : blog_items;
  return (
    <>
      <section className="blog__grid grey-bg-4 pt-90 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper section-title-sm mb-60">
                <h3 className="section__title">
                  Our latest
                  <span className="section__title-highlight">
                    articles
                    <ShapeLine />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {items.map((item) => (
              <div
                key={item.id}
                className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
              >
                <SingleGridItem {...item} />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="tp-pagination mt-20">
                {limit ? (
                  <div className="text-center">
                    <Link href="/blog" className="tp-btn-5 tp-link-btn-3">
                      View All Articles
                      <span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                ) : (
                  <Pagination url={url} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridArea;
