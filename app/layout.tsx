import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FriendsWithTools - Share your tools',
  description: 'Rent tools from your neighbors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
