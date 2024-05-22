/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    removeConsole: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000',
          },
        ],
      },
    ];
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './home': './src/pages/index.tsx',
          './landingN0': './src/pages/[department]',
          './privatelanding':
            './src/presentation/components/layouts/PrivateLanding',
          './legals': './src/pages/legals/[viewName].tsx',
          './workspace': './src/pages/workspace/[viewName].tsx',
          './stores': './src/pages/stores',
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
        shared: {
          'next/link': {
            requiredVersion: false,
            singleton: true,
          },
        },
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
