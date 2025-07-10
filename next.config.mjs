/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login', // Assuming your login page is at /login
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;
  