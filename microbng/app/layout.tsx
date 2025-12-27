import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MicroBNG - Virtual Broadband Network Gateway",
  description: "Deploy broadband at scale without the hardware costs",
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
