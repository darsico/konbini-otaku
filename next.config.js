/** @type {import('next').NextConfig} */
const allowedImageWPDomain = new URL(process.env.NEXT_PUBLIC_WORDPRESS_URL).hostname;

const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: [allowedImageWPDomain, "estacion-otaku.azurewebsites.net"],
  },
};



module.exports = nextConfig
