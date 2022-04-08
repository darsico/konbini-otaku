/** @type {import('next').NextConfig} */
const allowedImageWPDomain = new URL(process.env.NEXT_PUBLIC_WORDPRESS_URL).hostname;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [allowedImageWPDomain, "estacion-otaku.azurewebsites.net"],
  },
};

module.exports = nextConfig
