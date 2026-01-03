import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import Link from 'next/link';
// internal
import blog_data from '@data/blog-data';
import { CommentThree, DateTwo, EyeTwo } from '@svg/index';

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

// slider item
function SingleSliderItem({ img, tag, title, date, author_name, slug }) {
  // Get the image source - handle both imported images and strings
  const imgSrc = img?.src || img;

  // Get first tag if it's an array
  const displayTag = Array.isArray(tag) ? tag[0] : tag;

  return (
    <div className="blog__breadcrumb-item blog__breadcrumb-height blog__breadcrumb-overlay include-bg d-flex align-items-end" style={{backgroundImage:`url(${imgSrc})`}}>
      <div className="container">
        <div className="col-xxl-8 col-xl-8 col-lg-10">
          <div className="blog__breadcrumb-thumb"></div>
          <div className="blog__breadcrumb-content">
            <div className="blog__breadcrumb-tag">
              <span>{displayTag}</span>
            </div>
            <h1 className="blog__breadcrumb-title">
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h1>
            <div className="blog__breadcrumb-meta">
              <span>
                <DateTwo />{date}
              </span>
              {author_name && (
                <span>
                  <CommentThree />{author_name}
                </span>
              )}
            </div>
            <div className="blog__breadcrumb-btn">
              <Link href={`/blog/${slug}`} className="tp-btn-border-2">Continue Reading</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const SliderBreadcrumb = () => {
  // Get featured articles and prepare them for the slider
  const featuredArticles = useMemo(() => {
    const featured = blog_data
      .filter((blog) => blog.featured === true)
      .map((blog) => ({
        ...blog,
        slug: createSlug(blog.title)
      }));

    return featured.length > 0 ? featured : blog_data.slice(0, 3).map((blog) => ({
      ...blog,
      slug: createSlug(blog.title)
    }));
  }, []);

  return (
    <section className="blog__breadcrumb">
      <div className="blog__breadcrumb-slider p-relative">

        <Swiper
          className="blog__breadcrumb-slider-active swiper-container"
          loop={true}
          slidesPerView={1}
          effect='fade'
          modules={[Pagination,EffectFade]}
          spaceBetween={0}
          pagination={{
            el: ".blog-slider-dot-breadcrumb",
            clickable: true,
          }}
        >
          {featuredArticles.map((item) => (
            <SwiperSlide key={item.id}>
              <SingleSliderItem {...item} />
            </SwiperSlide>
          ))}
        <div className="blog-slider-dot-breadcrumb tp-swiper-dot"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderBreadcrumb;