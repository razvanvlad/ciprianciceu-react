import React from "react";
import Link from "next/link";
// internal
import { NextArrow, PrevArrow } from "@svg/index";
import blog_data from "@data/blog-data";

const PostNavigation = ({ currentBlog }) => {
  // Helper function to create slug from title
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
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
  };

  // Helper function to truncate title
  const truncateTitle = (title, maxLength = 40) => {
    if (!title || title.length <= maxLength) return title;
    return title.substring(0, maxLength) + '...';
  };

  // Find current blog index
  const currentIndex = blog_data.findIndex(item => item.id === currentBlog?.id);

  // Get previous and next blogs
  const prevBlog = currentIndex > 0 ? blog_data[currentIndex - 1] : null;
  const nextBlog = currentIndex < blog_data.length - 1 ? blog_data[currentIndex + 1] : null;

  return (
    <div className="postbox__more-navigation white-bg d-none d-md-flex justify-content-between flex-wrap mb-40 ">
      {prevBlog && (
        <div className="postbox__more-left d-flex align-items-center">
          <div className="postbox__more-icon">
            <Link href={`/blog/${createSlug(prevBlog.title)}`}>
              <PrevArrow />
            </Link>
          </div>
          <div className="postbox__more-content">
            <p>Previous Article</p>
            <h4>
              <Link href={`/blog/${createSlug(prevBlog.title)}`}>{truncateTitle(prevBlog.title)}</Link>
            </h4>
          </div>
        </div>
      )}
      {nextBlog && (
        <div className="postbox__more-right d-flex align-items-center">
          <div className="postbox__more-content">
            <p>Next Article</p>
            <h4>
              <Link href={`/blog/${createSlug(nextBlog.title)}`}>{truncateTitle(nextBlog.title)}</Link>
            </h4>
          </div>
          <div className="postbox__more-icon">
            <Link href={`/blog/${createSlug(nextBlog.title)}`}>
              <NextArrow />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostNavigation;
