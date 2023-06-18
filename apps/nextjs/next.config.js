/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  // config
};
