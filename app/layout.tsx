import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StickyNavbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EdgeStoreProvider } from '@/lib/edgestore';
import '@/assets/styles/globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Job Search',
  keywords:
    'job search, jobs, search engine for jobs, job search engine, job listings, search jobs, career, employment, work, find jobs',
  description: 'Job Board',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>
        <EdgeStoreProvider>
          <StickyNavbar />
          <main>{children}</main>
          <Footer />
        </EdgeStoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
