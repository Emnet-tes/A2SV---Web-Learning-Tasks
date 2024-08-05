

/** @type {import('next').NextConfig} */
const nextConfig = {
    
};

// next.config.mjs
export default {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dtt1wnvfb/**',
            },
        ],
    },
};
