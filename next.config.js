/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "github.com",
      "seeklogo.com",
      "ksalpernaiimagegenccfc0d.blob.core.windows.net"
    ],
  },
};
