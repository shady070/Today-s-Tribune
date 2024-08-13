/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk',
        port: '',
        pathname: '/news/1024/branded_news/**',
      },
      {
        protocol: 'https',
        hostname: 'image.cnbcfm.com',
        port: '',
        pathname: '/api/v1/image/**',
      },
      {
        protocol: 'https',
        hostname: 'i.dailymail.co.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mediaproxy.salon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ambcrypto.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kubrick.htvapps.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media-cldnry.s-nbcnews.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.guim.co.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.standard.co.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.vox-cdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;