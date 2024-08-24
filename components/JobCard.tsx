'use client';
import { JobProps } from '@/types/jobTypes';
import Link from 'next/link';
const JobCard = ({ job }: JobProps) => {
  return (
    <div className='bg-white rounded-xl shadow-md relative hover:bg-gray-300'>
      <div className='p-4 text-left'>
        <div className='mb-6'>
          <h3 className='text-lg font-bold'>{job.title}</h3>
          <div className='text-gray-600 my-2'>{job.company.name}</div>
        </div>
        <div className='flex flex-row flex-wrap text-indigo-500 mb-2'>
          <div className='text-sm pr-2 pt-2'>
            ${job.salary.min}k - ${job.salary.max}k
          </div>
          <div className='text-sm pr-2 pt-2'>{job.type}</div>
          <div className='text-sm pr-2 pt-2'>{job.location}</div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>{job.location}</div>
          <Link
            href={`/jobs/${job.id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
