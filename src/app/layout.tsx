import { type Metadata } from 'next';
import './globals.css';
import { inter } from '@/lib/fonts';
import { Background } from '@/components/Background';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Server Actions, Tables, DB, etc.',
  description: 'Practice with NextJs',
  icons: {
    icon: '/assets/favicon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Background />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
