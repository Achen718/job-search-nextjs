'use client';
import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from '@material-tailwind/react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navLinks } from '../constants/index';

function NavList() {
  return (
    // todo: Map nav links
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {navLinks.map(({ name, route }, index) => (
        <Typography
          key={index}
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-medium text-base hover:text-blue-500 transition-colors'
        >
          <Link href={route} className='flex items-center'>
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='sticky top-0 w-full z-[999]'>
      <div>
        <Navbar className='mx-auto px-6 py-3 max-w-full rounded-none'>
          <div className='mx-auto container'>
            <div className='flex items-center justify-between text-blue-gray-900'>
              <Typography
                as='a'
                href='#'
                variant='h6'
                className='mr-4 cursor-pointer py-1.5'
              >
                JobSearch NextJs
              </Typography>
              <div className='hidden lg:block'>
                <NavList />
              </div>
              <div className='flex items-center gap-x-1'>
                <Link href='/add'>
                  <Button
                    variant='gradient'
                    size='sm'
                    // color='blue-gray'
                    className='hidden lg:inline-block'
                  >
                    Create Job Post
                  </Button>
                </Link>

                <Button
                  variant='gradient'
                  size='sm'
                  color='cyan'
                  className='hidden lg:inline-block to-sky-800 hover:shadow-sky-700'
                >
                  <span>Sign in</span>
                </Button>
              </div>
              <IconButton
                variant='text'
                className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className='h-6 w-6' strokeWidth={2} />
                ) : (
                  <Bars3Icon className='h-6 w-6' strokeWidth={2} />
                )}
              </IconButton>
            </div>
          </div>
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}
