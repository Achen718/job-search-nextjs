'use client';
import Link from 'next/link';
import { Typography } from '@material-tailwind/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = ['Company', 'About Us', 'Team', 'Products', 'Blog', 'Pricing'];

  return (
    <footer className='px-8 py-28'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='flex flex-wrap items-center justify-center gap-8 pb-8'>
          {links.map((link, index) => (
            <ul key={index}>
              <li>
                <Typography className='font-medium !text-gray-500 transition-colors hover:!text-gray-900'>
                  <Link href={link}>{link}</Link>
                </Typography>
              </li>
            </ul>
          ))}
        </div>
        <Typography
          color='blue-gray'
          className='mt-6 !text-sm !font-normal text-gray-500'
        >
          Copyright &copy; {currentYear} Material Tailwind
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
