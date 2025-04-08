import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["files.stripe.com"], // 👈 allow Stripe's image domain
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
