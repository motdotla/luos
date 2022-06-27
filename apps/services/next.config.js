// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['ui']);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  webpack5: true,
});
