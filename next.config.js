/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'digimon.shadowsmith.com',
                port: '',
                pathname:'/img/**'
            }
        ]
    },
    publicRuntimeConfig: {
        apiUrl: process.env.API_URL
    },
    experimental:{
        images: {
            allowFutureImages: true
        },
        externalDir: true | {
            enable: true,
            silent: true
        }
    }
}

module.exports = nextConfig
