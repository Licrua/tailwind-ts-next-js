import poppins from '../../public/font/font';
// import Container from './components/Container';
import './globals.css';

// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'], weight: ['900'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}




      </body>
    </html>
  );
}
