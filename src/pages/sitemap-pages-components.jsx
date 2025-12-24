import React, { useState } from 'react';
import Link from 'next/link';
import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import sitemap_data from '@data/sitemap-data';

export default function SitemapPagesComponents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get all unique categories
  const categories = ['all', ...sitemap_data.map(item => item.category)];

  // Filter pages based on search and category
  const filteredData = sitemap_data.filter(section => {
    if (selectedCategory !== 'all' && section.category !== selectedCategory) {
      return false;
    }
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return section.pages.some(page =>
        page.name.toLowerCase().includes(searchLower) ||
        page.path.toLowerCase().includes(searchLower) ||
        page.description?.toLowerCase().includes(searchLower) ||
        page.components?.some(comp => comp.toLowerCase().includes(searchLower))
      );
    }
    return true;
  }).map(section => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return {
        ...section,
        pages: section.pages.filter(page =>
          page.name.toLowerCase().includes(searchLower) ||
          page.path.toLowerCase().includes(searchLower) ||
          page.description?.toLowerCase().includes(searchLower) ||
          page.components?.some(comp => comp.toLowerCase().includes(searchLower))
        )
      };
    }
    return section;
  }).filter(section => section.pages.length > 0);

  // Count total pages
  const totalPages = sitemap_data.reduce((acc, section) => acc + section.pages.length, 0);
  const filteredPages = filteredData.reduce((acc, section) => acc + section.pages.length, 0);

  return (
    <Wrapper>
      <SEO pageTitle={'Sitemap - Pages & Components'} />
      <HeaderEight />

      <main>
        <div className="sitemap-area pt-120 pb-120">
          <div className="container">
            {/* Header Section */}
            <div className="row mb-60">
              <div className="col-12">
                <div className="text-center">
                  <h1 className="mb-20" style={{ fontSize: '48px', fontWeight: '700' }}>
                    Sitemap - Pages & Components
                  </h1>
                  <p className="mb-30" style={{ fontSize: '18px', color: '#666' }}>
                    Complete overview of all pages and their components
                  </p>
                  <div className="sitemap-stats mb-40">
                    <span style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      background: '#f5f5f5',
                      borderRadius: '5px',
                      marginRight: '10px'
                    }}>
                      <strong>{totalPages}</strong> Total Pages
                    </span>
                    <span style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      background: '#f5f5f5',
                      borderRadius: '5px'
                    }}>
                      <strong>{sitemap_data.length}</strong> Categories
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="row mb-50">
              <div className="col-lg-6 mb-20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search pages, paths, or components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    padding: '15px 20px',
                    fontSize: '16px',
                    border: '2px solid #e5e5e5',
                    borderRadius: '8px',
                    width: '100%'
                  }}
                />
              </div>
              <div className="col-lg-6 mb-20">
                <select
                  className="form-control"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    padding: '15px 20px',
                    fontSize: '16px',
                    border: '2px solid #e5e5e5',
                    borderRadius: '8px',
                    width: '100%'
                  }}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            {searchTerm && (
              <div className="row mb-30">
                <div className="col-12">
                  <p style={{ color: '#666', fontSize: '16px' }}>
                    Showing {filteredPages} of {totalPages} pages
                  </p>
                </div>
              </div>
            )}

            {/* Sitemap Content */}
            {filteredData.map((section) => (
              <div key={section.id} className="sitemap-section mb-60">
                <div className="row">
                  <div className="col-12">
                    <div style={{
                      background: '#f8f9fa',
                      padding: '20px 30px',
                      borderRadius: '8px',
                      marginBottom: '30px'
                    }}>
                      <h2 style={{
                        fontSize: '32px',
                        fontWeight: '600',
                        marginBottom: '5px',
                        color: '#333'
                      }}>
                        {section.category}
                      </h2>
                      <p style={{ color: '#666', marginBottom: '0' }}>
                        {section.pages.length} {section.pages.length === 1 ? 'page' : 'pages'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {section.pages.map((page, index) => (
                    <div key={index} className="col-lg-6 col-md-12 mb-30">
                      <div style={{
                        border: '2px solid #e5e5e5',
                        borderRadius: '10px',
                        padding: '25px',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        background: '#fff'
                      }}
                      className="sitemap-card"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#333';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#e5e5e5';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>
                        <div className="d-flex justify-content-between align-items-start mb-15">
                          <h3 style={{
                            fontSize: '22px',
                            fontWeight: '600',
                            marginBottom: '10px',
                            color: '#333'
                          }}>
                            {page.name}
                          </h3>
                          <Link
                            href={page.path}
                            style={{
                              display: 'inline-block',
                              padding: '8px 16px',
                              background: '#333',
                              color: '#fff',
                              borderRadius: '5px',
                              fontSize: '14px',
                              textDecoration: 'none',
                              transition: 'background 0.3s ease',
                              whiteSpace: 'nowrap'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#555'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#333'}
                          >
                            Visit Page
                          </Link>
                        </div>

                        <p style={{
                          color: '#0066cc',
                          fontSize: '14px',
                          marginBottom: '15px',
                          fontFamily: 'monospace',
                          background: '#f0f7ff',
                          padding: '8px 12px',
                          borderRadius: '5px',
                          display: 'inline-block'
                        }}>
                          {page.path}
                        </p>

                        {page.description && (
                          <p style={{
                            color: '#666',
                            fontSize: '15px',
                            marginBottom: '15px',
                            lineHeight: '1.6'
                          }}>
                            {page.description}
                          </p>
                        )}

                        {page.components && page.components.length > 0 && (
                          <div style={{ marginTop: '20px' }}>
                            <h4 style={{
                              fontSize: '16px',
                              fontWeight: '600',
                              marginBottom: '12px',
                              color: '#333'
                            }}>
                              Components Used:
                            </h4>
                            <ul style={{
                              marginBottom: '0',
                              paddingLeft: '20px'
                            }}>
                              {page.components.map((component, idx) => (
                                <li key={idx} style={{
                                  fontSize: '14px',
                                  color: '#555',
                                  marginBottom: '8px',
                                  lineHeight: '1.6'
                                }}>
                                  {component}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* No Results Message */}
            {filteredData.length === 0 && (
              <div className="row">
                <div className="col-12">
                  <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    background: '#f8f9fa',
                    borderRadius: '10px'
                  }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>
                      No pages found
                    </h3>
                    <p style={{ color: '#666', fontSize: '16px' }}>
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <FooterSeven />
    </Wrapper>
  );
}
