/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['placedog.net', 'unsplash.com', 'localhost:3000', 'picnic-api-app.andrewgosselin.com', 'picnic.app'],
},
}

module.exports = nextConfig
