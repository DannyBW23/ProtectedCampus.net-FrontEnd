const nextConfig = {
    images: {
      domains: ['profilepic23.s3.amazonaws.com'],
    },
    reactStrictMode: true,
  };
  module.exports = {
  
      // async redirects() {
      //   return [
      //     {
      //       source: '/',
      //       destination: '/home',
      //       permanent: true,
      //     },
      //   ];
      // },
    
  images: {
    loader: 'akamai',
    path: '/',
  },
}
  module.exports = nextConfig;
  
