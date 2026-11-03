/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () =>
    [
      ["martini", "commercial"],
      ["experience", "commercial"],
      ["apparel", "commercial"],
      ["luna", "personal"],
      ["brummie", "personal"],
    ].map(([project, type]) => ({
      source: `/projects/${project}`,
      destination: `/projects/${type}/${project}`,
      permanent: false,
    })),
};

module.exports = nextConfig;
