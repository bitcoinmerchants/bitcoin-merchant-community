import { Providers } from "../providers/ThemeProvider";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bitcoinmerchants.org'),
  title: "Bitcoin Merchant Community",
  description: "The Bitcoin Merchant Community is a growing global community of small businesses helping one another defeat 3% credit card fees by accepting bitcoin",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Bitcoin Merchant Community",
    description: "The Bitcoin Merchant Community is a growing global community of small businesses helping one another defeat 3% credit card fees by accepting bitcoin",
    url: 'https://bitcoinmerchants.org',
    siteName: 'Bitcoin Merchant Community',
    images: [
      {
        url: 'https://www.bitcoinmerchantcommunity.org/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bitcoin Merchant Community',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bitcoin Merchant Community",
    description: "The Bitcoin Merchant Community is a growing global community of small businesses helping one another defeat 3% credit card fees by accepting bitcoin",
    images: {
      url: 'https://www.bitcoinmerchantcommunity.org/assets/og-image.png',
      alt: 'Bitcoin Merchant Community',
    },
  },
  viewport: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/gaq1ohg.css' />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

