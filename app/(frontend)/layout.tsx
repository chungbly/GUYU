import Root from '@/containers/layouts/Root';
import '@fontsource/inter';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Guyu',
  description: 'Guyu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'antialiased'}>
        <GoogleAnalytics gaId="G-J0SGLVPYLS" />
        <Root>{children}</Root>
      </body>
    </html>
  );
}
