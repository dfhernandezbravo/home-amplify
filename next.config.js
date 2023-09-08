/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  reactStrictMode: true,
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
          './landingN0': './src/presentation/components/layouts/Landings',
          './privateWorkspace':
            './src/presentation/components/layouts/PrivateWorkspace',
        },
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        },
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
