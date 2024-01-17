const nextConfig = {
    images: {
      domains: ['profilepic23.s3.amazonaws.com'],
    },
    reactStrictMode: true,
  };
  module.exports = {
  
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: '(www\\.)?protectedcampus\\.com',
            },
            {
              type: 'protocol',
              value: 'http',
            },
          ],
          permanent: true,
          destination: 'https://protectedcampus.com/:path*',
        },
      ];
    },
    
  images: {
    loader: 'akamai',
    path: '/',
  },
}
  module.exports = nextConfig;
  
