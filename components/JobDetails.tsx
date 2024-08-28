'use client';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { JobProps } from '@/types/jobTypes';
import Link from 'next/link';

const JobDetails = ({ job }: JobProps) => {
  return (
    <Card className='text-left'>
      <CardBody className='p-2'>
        {/* set header */}
        {/* icon */}
        <Typography>{job.author}</Typography>
        <Typography variant='h6' color='blue-gray' className='mb-2'>
          {job.title}
        </Typography>
        <Typography variant='h6' color='blue-gray' className='mb-2'>
          {job.location}
        </Typography>
        {/* add icons */}
        <Typography variant='h6' color='blue-gray' className='mb-2'>
          ${job.salaryMin}k - ${job.salaryMax}k {job.employmentType}
        </Typography>
        <Link
          href={'/'}
          className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
        >
          Apply now
        </Link>
        <button
          // onClick={handleClick}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center'
        >
          {/* add/change to bookmark icon */}
          save job
        </button>
        <div className='border border-gray-100 mb-5 mt-2'></div>
        <Typography>{job.description}</Typography>
        {/* set conditional for details */}
      </CardBody>
    </Card>
  );
};

export default JobDetails;
