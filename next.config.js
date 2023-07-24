/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["cdn.myanimelist.net"], // Adicione o domínio aqui
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.myanimelist.net",
          port: "",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  