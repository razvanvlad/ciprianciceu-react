import React from "react";
import Link from "next/link";
import { useLocale } from '@context/IntlContext';
// internal
import { NextArrowTwo, PrevArrowTwo } from "@svg/index";

const Pagination = ({ url = "blog" }) => {
  const locale = useLocale();

  return (
    <nav>
      <ul>
        <li>
          <Link href={`/${locale}/${url}`} className="tp-pagination-prev prev page-numbers">
            <PrevArrowTwo />
            Prev
          </Link>
        </li>
        <li>
          <span className="current">1</span>
        </li>
        <li>
          <Link href={`/${locale}/${url}`}>2</Link>
        </li>
        <li>
          <Link href={`/${locale}/${url}`}>3</Link>
        </li>
        <li>
          <Link href={`/${locale}/${url}`} className="next page-numbers">
            Next
            <NextArrowTwo />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
