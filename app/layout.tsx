import './globals.css';

import type {
  Metadata,
  Viewport,
} from 'next';
import { Open_Sans } from 'next/font/google';

import {
  colors,
  metadata_infos,
} from '@/utils/config';

import StoreProvider from './StoreProvider';

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: metadata_infos.APP_NAME,
  title: {
    default: metadata_infos.APP_DEFAULT_TITLE,
    template: metadata_infos.APP_TITLE_TEMPLATE,
  },
  description: metadata_infos.APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: metadata_infos.APP_DEFAULT_TITLE,
    startupImage: [
      {
        url: "/icons/splashscreens/iphone5_splash.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/splashscreens/iphone6_splash.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/splashscreens/iphoneplus_splash.png",
        media:
          "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/icons/splashscreens/iphonex_splash.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/icons/splashscreens/iphonexr_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/splashscreens/iphonexsmax_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/icons/splashscreens/ipad_splash.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/splashscreens/ipadpro1_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/splashscreens/ipadpro3_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/splashscreens/ipadpro2_splash.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: colors.BG_COLOR,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="ko">
        <body className={`body-bg body-text ${sans.className}`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
