"use client"

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from './nav';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col relative">
          <div className="z-50 flex w-screen flex-grow items-center justify-center bg-blue-500">
            {children}
          </div>
          {!pathname.includes("no-nav") && <Nav />}
        </div>
      </body>
    </html>
  );
}
