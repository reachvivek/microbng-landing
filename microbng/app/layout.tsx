import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://microbng.com'),
  title: {
    default: "MicroBNG - Virtual Broadband Network Gateway",
    template: "%s | MicroBNG"
  },
  description: "Deploy broadband at scale without the hardware costs. MicroBNG is a cloud-native, software-defined broadband network gateway (BNG) solution for modern ISPs.",
  keywords: [
    "BNG",
    "Broadband Network Gateway",
    "Virtual BNG",
    "vBNG",
    "ISP",
    "Internet Service Provider",
    "Cloud Native",
    "Software Defined Networking",
    "Telecom",
    "Network Infrastructure",
    "PPPoE",
    "IPoE",
    "CGNAT",
    "Carrier Grade NAT"
  ],
  authors: [{ name: "MicroBNG Team" }],
  creator: "MicroBNG",
  publisher: "MicroBNG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://microbng.com',
    title: 'MicroBNG - Virtual Broadband Network Gateway',
    description: 'Deploy broadband at scale without the hardware costs. Cloud-native BNG solution for modern ISPs.',
    siteName: 'MicroBNG',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MicroBNG - Virtual Broadband Network Gateway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MicroBNG - Virtual Broadband Network Gateway',
    description: 'Deploy broadband at scale without the hardware costs. Cloud-native BNG solution for modern ISPs.',
    images: ['/twitter-image.jpg'],
    creator: '@microbng',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://microbng.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
