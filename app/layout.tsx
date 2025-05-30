import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Nidavi | NIDAVI-Create. Impress.Stay.|DesignagenturinMiesbach',
  description: 'Spezialist für moderne Markengestaltung, Webdesign und strategisches Marketing für Handwerksunternehmen und kleine Firmen',
  openGraph: {
    title: 'Nidavi | NIDAVI-Create. Impress.Stay.|DesignagenturinMiesbach',
    description: 'Spezialist für moderne Markengestaltung, Webdesign und strategisches Marketing für Handwerksunternehmen und kleine Firmen',
    url: 'https://shehab3.vercel.app',
    siteName: 'Nidavi',
    images: [
      {
        url: 'https://shehab3.vercel.app/images/logo_black.jpg',
        width: 1200,
        height: 630,
        alt: 'Nidavi Design Agentur',
      },
    ],
    locale: 'de_DE', // غيرت إلى ألمانية لأن موقعك ألماني
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nidavi | NIDAVI-Create. Impress.Stay.|DesignagenturinMiesbach',
    description: 'Spezialist für moderne Markengestaltung, Webdesign und strategisches Marketing für Handwerksunternehmen und kleine Firmen',
    images: ['https://shehab3.vercel.app/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}