import { Providers } from "../providers/ThemeProvider";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bitcoinmerchants.org'),
  title: "Bitcoin Merchant Community",
  description: "Bitcoin Merchant Community - Connect, Learn, and Grow with Bitcoin Payments",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Bitcoin Merchant Community",
    url: 'https://bitcoinmerchants.org',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/og-image.png'],
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

