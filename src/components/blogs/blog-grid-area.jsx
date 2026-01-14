import React, { useState, useMemo } from "react";
// internal
import blog_data from "@data/blog-data";
import SingleGridItem from "./single-blog/single-grid-item";
import { ShapeLine } from "@svg/index";
import Link from "next/link";
import { useTranslations } from '@context/IntlContext';

// blog items
const blog_items = blog_data.filter((blog) => blog.blog_grid);

const BlogGridArea = ({ limit, url }) => {
  const t = useTranslations('blog');
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  // Get all unique tags from blog items
  const allTags = useMemo(() => {
    const tagsSet = new Set();
    blog_items.forEach((item) => {
      if (Array.isArray(item.tag)) {
        item.tag.forEach((t) => tagsSet.add(t));
      } else if (item.tag) {
        tagsSet.add(item.tag);
      }
    });
    return ["All", ...Array.from(tagsSet).sort()];
  }, []);

  // Filter and sort items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = blog_items;

    // Filter by tag
    if (selectedTag !== "All") {
      filtered = blog_items.filter((item) => {
        if (Array.isArray(item.tag)) {
          return item.tag.includes(selectedTag);
        }
        return item.tag === selectedTag;
      });
    }

    // Sort by featured status first, then by date
    const sorted = [...filtered].sort((a, b) => {
      // Prioritize featured articles
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      // If both featured or both not featured, sort by date
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return limit ? sorted.slice(0, limit) : sorted;
  }, [selectedTag, sortOrder, limit]);

  return (
    <>
      <section className="blog__grid grey-bg-4 pt-90 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper section-title-sm mb-20">
                <h2 className="section__title">
                  {t('title')}
                  <span className="section__title-highlight">
                    {" "}{t('titleHighlight')}
                    <ShapeLine />
                  </span>
                  {" "}{t('titleEnd')}
                </h2>
                <p className="section__subtitle mt-3" style={{ maxWidth: "800px", fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
                  {t('subtitle')}
                </p>
              </div>
            </div>
          </div>

          {!limit && (
            <>
              {/* Tag Filter Row */}
              <div className="row mb-20">
                <div className="col-xxl-12">
                  <div className="blog__filter-tags d-flex align-items-center gap-2 flex-wrap">
                    <span className="filter-label fw-bold" style={{ whiteSpace: 'nowrap' }}>{t('filterBy')}</span>
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`blog__filter-tag ${selectedTag === tag ? "active" : ""
                          }`}
                        style={{
                          padding: "8px 16px",
                          border: "1px solid #ddd",
                          borderRadius: "20px",
                          background: selectedTag === tag ? "#0EA5E9" : "#fff",
                          color: selectedTag === tag ? "#fff" : "#333",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          fontSize: "14px",
                          fontWeight: selectedTag === tag ? "600" : "400",
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sort Dropdown Row */}
              <div className="row mb-40">
                <div className="col-xxl-12">
                  <div className="blog__filter-sort d-flex align-items-center gap-2" style={{ flexWrap: 'nowrap' }}>
                    <span className="filter-label fw-bold" style={{ whiteSpace: 'nowrap' }}>{t('sortBy')}</span>
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="form-select"
                      style={{
                        padding: "8px 16px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        cursor: "pointer",
                        minWidth: "150px",
                        maxWidth: "200px",
                      }}
                    >
                      <option value="newest">{t('sortNewest')}</option>
                      <option value="oldest">{t('sortOldest')}</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="row">
            {filteredAndSortedItems.length > 0 ? (
              filteredAndSortedItems.map((item) => (
                <div
                  key={item.id}
                  className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                >
                  <SingleGridItem {...item} baseUrl={url ? `/${url}` : '/blog'} />
                </div>
              ))
            ) : (
              <div className="col-xxl-12">
                <div className="text-center py-5">
                  <p className="text-muted">{t('noArticles')}</p>
                </div>
              </div>
            )}
          </div>

          {limit && (
            <div className="row">
              <div className="col-xxl-12">
                <div className="tp-pagination mt-20">
                  <div className="text-center">
                    <Link href="/blog" className="tp-btn-5 tp-link-btn-3">
                      {t('viewAll')}
                      <span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogGridArea;
