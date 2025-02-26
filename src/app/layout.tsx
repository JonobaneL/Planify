import type { Metadata } from 'next';
import { Figtree, Poppins } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  style: 'normal',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Planify',
  description: 'Plan your day',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${poppins.variable} flex h-full min-h-dvh flex-col font-figtree antialiased`}
      >
        <div className="flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
