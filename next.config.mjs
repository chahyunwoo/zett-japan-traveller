/** @type {import('next').NextConfig} */

import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: "public",
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {};

export default withPWA(nextConfig);
