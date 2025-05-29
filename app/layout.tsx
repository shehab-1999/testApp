import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: 'Nidavi',
  description: 'Nidavi for Design',
  openGraph: {
 title: 'Nidavi',
    description: 'Nidavi for Design',
    url: 'https://shehab3.vercel.app/',
    siteName: 'shehab3',
    images: [
      {
        url: 'https://shehab3.vercel.app/images/logo1.png',
        width: 1200,
        height: 630,
        alt: 'وصف الصورة',
      },
    ],
    type: 'website',
  },};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >    <Navbar/>
        {children}
        
      </body>
    </html>
  );
}
