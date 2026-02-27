import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://127.0.0.1", "http://localhost"],
}

// Note: ビルド時は --no-turbopack フラグを使用（日本語パス対応）;

export default nextConfig;
