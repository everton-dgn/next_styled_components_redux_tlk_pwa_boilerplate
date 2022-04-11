const withPWA = require('next-pwa')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = withPWA({
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  pwa: {
    disable: isDevelopment,
    dest: 'public'
  },
  optimizeFonts: false,
  images: {
    domains: ['localhost'],
    path: '/_next/image',
    loader: 'default',
    formats: ['image/avif', 'image/webp']
  },
  eslint: {
    dirs: [
      'components',
      'hooks',
      'layouts',
      'pages',
      'store',
      'styles',
      'theme',
      'types',
      'utils'
    ]
  },
  reactStrictMode: true,
  pageExtensions: ['page.tsx']
})
