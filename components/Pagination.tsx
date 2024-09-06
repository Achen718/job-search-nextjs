'use client';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export interface PaginationProps {
  pagehandler: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export function DefaultPagination({
  pagehandler,
  currentPage,
  totalPages,
}: PaginationProps) {
  const getItemProps = (index: number) =>
    ({
      variant: currentPage === index ? 'filled' : 'text',
      color: 'gray',
      onClick: () => pagehandler(index),
    } as any);

  const next = () => {
    if (currentPage < totalPages) {
      pagehandler(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      pagehandler(currentPage - 1);
    }
  };

  const totalPagination = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className='flex items-center gap-4 mt-4 justify-around'>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Prev
      </Button>
      <div className='flex items-center gap-2'>
        {totalPagination.map((page) => (
          <IconButton {...getItemProps(page)} key={page}>
            {page}
          </IconButton>
        ))}
      </div>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={next}
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
      </Button>
    </div>
  );
}
