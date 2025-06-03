/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react", "@emotion/react"],
    },
};

export default nextConfig;
