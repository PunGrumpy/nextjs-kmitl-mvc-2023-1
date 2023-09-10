/** @type {import('next').NextConfig} */
const nextConfig = {
    serverlessTarget: {
        target: 'experimental-serverless-trace'
    },
    webpack: (config) => {
        config.resolve.alias['@prisma/client'] = PrismaClient
        return config
    }
}

module.exports = nextConfig
