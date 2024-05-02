import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/assets/components/utility/Header';
import { ContextWrapper } from '@/assets/contexts/ReportContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chocolate rain',
  description: 'Generated by monkey bats',
  authors: [{ name: 'Knatte' }, { name: 'Fnatte' }, { name: 'Fritz' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ContextWrapper>
          <Header />
          {children}
        </ContextWrapper>
      </body>
    </html>
  );
}
