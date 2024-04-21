import { Inter } from 'next/font/google';
import './globals.css';
import NextAuthProvider from '@/providers/NextAuth';
import { SideBar } from '@/components/layout/SideBar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <NextAuthProvider>
        <body className={inter.className}>
          <div className='h-dvh flex'>
            <SideBar />
            {children}
          </div>
        </body>
      </NextAuthProvider>
    </html>
  );
}
