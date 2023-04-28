/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
  webpack(config, options){
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './home': './src/pages/index.tsx',
        },
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
