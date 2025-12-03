import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [new URL('https://deisishop.pythonanywhere.com/media/produto_imagens/**')],
  },
};

export default nextConfig;
