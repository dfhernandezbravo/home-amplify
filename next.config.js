/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
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
          './legals-layout': './src/pages/legals/[content]',
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
