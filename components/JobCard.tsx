'use client';
import { JobProps } from '@/types/jobTypes';
import { Typography } from '@material-tailwind/react';

const JobCard = ({ job }: JobProps) => {
  return (
    <div className='bg-white rounded-xl shadow-md relative hover:bg-gray-300'>
      <div className='p-4 text-left'>
        <div className='mb-6'>
          <Typography variant='h3' className='text-lg font-bold'>
            {job.title}
          </Typography>
          <Typography className='text-gray-600 my-2'>
            {job.company.name}
          </Typography>
        </div>
        <div className='flex flex-row flex-wrap text-indigo-500 mb-2'>
          <Typography className='text-sm pr-2 pt-2'>
            ${job.salary.min}k - ${job.salary.max}k
          </Typography>
          <Typography className='text-sm pr-2 pt-2'>{job.type}</Typography>
          <Typography className='text-sm pr-2 pt-2'>{job.location}</Typography>
        </div>
        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>{job.location}</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
