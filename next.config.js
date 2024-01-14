/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withBundleAnalyzer, withOptimizedImages]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig, ...nextConfig })
}