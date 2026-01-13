import React from "react";
import Link from "next/link";

const DynamicBreadcrumb = ({ items }) => {
  // items should be an array of { label: "Text", href: "/path" }
  // Last item is automatically considered the current page (no link)

  if (!items || items.length === 0) return null;

  return (
    <section className="dynamic-breadcrumb py-3">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb mb-0">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li
                  key={index}
                  className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                  {...(isLast ? { 'aria-current': 'page' } : {})}
                >
                  {isLast ? (
                    <span>{item.label}</span>
                  ) : (
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default DynamicBreadcrumb;
