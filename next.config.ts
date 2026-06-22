import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  ...(!isDev && { basePath: "/PORTFOLIO" }),
};

export default nextConfig;
