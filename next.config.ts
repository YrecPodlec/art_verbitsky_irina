import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        domains: ['verbitsky-design-server.vercel.app'],
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
