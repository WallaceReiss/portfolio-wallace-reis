import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Analytics from '@/components/analytics';
import MusicPlayer from '@/components/music-player';
import FloatingWhatsApp from '@/components/floating-whatsapp';
import { I18nProvider } from '@/i18n';

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontJetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Wallace Reis Oliveira | Software Engineer',
  description: 'Engineering-driven portfolio of Wallace Reis Oliveira, focusing on modern web architecture, performance, and product vision.',
  openGraph: {
    title: 'Wallace Reis Oliveira | Software Engineer',
    description: 'Engineering-driven portfolio of Wallace Reis Oliveira.',
    type: 'website',
    url: 'https://your-domain.com',
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A14',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontInter.variable, fontJetBrainsMono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <I18nProvider>
            {children}
            <MusicPlayer />
            <FloatingWhatsApp />
            <Analytics />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
