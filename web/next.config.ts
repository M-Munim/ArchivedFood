import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "behold.pictures",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/cookie-policy",
        destination: "/cookies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
