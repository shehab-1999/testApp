import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "مستشفى المجد",
  description:
    "نسعى لتحقيق أعلى معايير الجودة في الرعاية الصحية، من خلال: توفير خدمات طبية متكاملة وشاملة. استخدام أحدث التقنيات والمعدات الطبية. تعزيز التعليم والتدريب المستمر لفريق العمل. تحقيق رضا ا",
    openGraph: {
      title: "مستشفى المجد",
      description:
        "نسعى لتحقيق أعلى معايير الجودة في الرعاية الصحية، من خلال: توفير خدمات طبية متكاملة وشاملة. استخدام أحدث التقنيات والمعدات الطبية. تعزيز التعليم والتدريب المستمر لفريق العمل. تحقيق رضا ا",
       
      type: "website",
     
      url: "http://192.168.0.149:3000/ar/opengraph-image.jpg",
      siteName: "مستشفى المجد",
      images:[{
        url:"http://192.168.0.149:3000/opengraph-image.jpg",
        width: 1200,
          height: 630,}
      ]
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
           <Footer/>
      </body>
    </html>
  );
}
