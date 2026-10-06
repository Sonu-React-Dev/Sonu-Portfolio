import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.replace(/^.*?\//, "") || "";
  if (!repoName.toLowerCase().endsWith(".github.io")) {
    repo = repoName;
  }
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: repo ? `/${repo}` : "",
  assetPrefix: repo ? `/${repo}/` : "",
  reactStrictMode: true,
  poweredByHeader: false
};

export default nextConfig;
