import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Job Search for Me',
  keywords:
    'job search, jobs, search engine for jobs, job search engine, job listings, search jobs, career, employment, work, find jobs',
  description: 'Personal Job Finder',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
