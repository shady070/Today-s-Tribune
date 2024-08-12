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
      ],
    },
  };
  
  export default nextConfig;