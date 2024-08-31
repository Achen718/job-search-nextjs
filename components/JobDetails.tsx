'use client';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { JobProps } from '@/types/jobTypes';
import Link from 'next/link';
import { IconButton, Button } from '@material-tailwind/react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { formatPostedDate } from '@/utils/formatDate';
import Image from 'next/image';

const JobDetails = ({ job }: JobProps) => {
  const postedDate = formatPostedDate(job.createdAt);
  console.log(job);

  return (
    <Card className='text-left border border-slate-500'>
      <CardBody className='p-4'>
        {/* set header */}
        {/* icon */}
        <div className='justify-between items-end flex flex-row flex-wrap mb-2'>
          <div className='flex flex-col flex-wrap'>
            <Image
              src={job.img ?? ''}
              width={60}
              height={60}
              alt='Company Logo'
            />
            <Typography>{job.author}</Typography>
          </div>
          <div className='mx-4'>
            <Typography variant='h6' color='blue-gray' className='mb-2'>
              {job.title}
            </Typography>
            <Typography color='blue-gray' className='mb-2'>
              Posted {postedDate}
            </Typography>
          </div>
          <div>
            <Typography variant='h6' color='blue-gray' className='mb-2'>
              {job.employmentType}
            </Typography>
            <Typography variant='h6' color='blue-gray' className='mb-2'>
              {job.location}
            </Typography>
          </div>
        </div>

        <Typography variant='h6' color='blue-gray' className='mb-2'>
          ${job.salaryMin}k - ${job.salaryMax}k {job.employmentType}
        </Typography>
        <div className='flex'>
          <Link href='/'>
            <Button className='my-2 md:mt-0 w-full rounded-lg bg-sky-900 text-white hover:bg-sky-700 focus:outline-none focus:ring focus:ring-blue-500'>
              Apply
            </Button>
          </Link>
          <Link href='/'>
            {/* todo: Add bookmarks */}
            <IconButton
              className=' hover:bg-sky-700 ml-2 focus:outline-none focus:ring focus:ring-sky-700 hover:text-white'
              variant='outlined'
            >
              <FaRegBookmark className='text-xl' />
            </IconButton>
          </Link>
        </div>

        <div className='border border-gray-100 mb-5 mt-2'></div>
        <Typography>{job.description}</Typography>
        {/* set conditional for details */}
      </CardBody>
    </Card>
  );
};

export default JobDetails;
