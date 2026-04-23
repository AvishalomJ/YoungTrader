import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['he', 'en'],
    defaultLocale: 'he',
  },
}

export default nextConfig
