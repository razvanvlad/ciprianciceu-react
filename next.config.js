const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache (performance optimization)
    // Note: quality parameter is set per-component (default is 75)
  },

  // Empty turbopack config to silence warning (we're using webpack for PurgeCSS)
  turbopack: {},

  // Webpack configuration for PurgeCSS
  webpack: (config, { dev, isServer }) => {
    // Only run PurgeCSS in production builds
    if (!dev && !isServer) {
      try {
        const PurgecssPlugin = require('purgecss-webpack-plugin');
        const glob = require('glob-all');
        const path = require('path');

        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, 'src/**/*.{js,jsx}'),
              path.join(__dirname, 'public/**/*.html'),
            ]),
            safelist: {
              standard: [/^swiper/, /^slick/, /^wow/, /^tp-/, /^section__/, /^blog__/, /^slider__/, /^about__/, /^portfolio__/, /^header__/, /^footer__/],
              deep: [/modal/, /dropdown/, /tooltip/, /popover/],
            },
          })
        );
      } catch (e) {
        console.log('PurgeCSS not installed yet. Run: npm install --save-dev purgecss-webpack-plugin glob-all');
      }
    }
    return config;
  },
}

module.exports = withBundleAnalyzer(nextConfig)
