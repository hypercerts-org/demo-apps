var path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["@hypercerts-org/sdk/"] = path.resolve("./node_modules/@hypercerts-org/sdk/dist/cjs/index.js");
    return config;
  },};

module.exports = nextConfig;
