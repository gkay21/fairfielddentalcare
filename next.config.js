/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  handleImages: ["jpeg", "png", "svg"],
});
