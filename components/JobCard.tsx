import { JobProps } from '@/types/jobTypes';
import { Typography } from '@material-tailwind/react';

const JobCard = ({ job }: JobProps) => {
  return (
    <div className='bg-white rounded-xl shadow-lg relative hover:bg-gray-200 ring-1 ring-slate-500'>
      <div className='p-4 text-left'>
        <div className='mb-6'>
          <Typography variant='h3' className='text-lg font-bold'>
            {job.title}
          </Typography>
          <Typography className='text-gray-600 my-2'>{job.author}</Typography>
        </div>
        <div className='flex flex-row flex-wrap text-indigo-500 mb-2'>
          <Typography className='text-sm pr-2 pt-2'>
            ${job.salaryMin}k - ${job.salaryMax}k
          </Typography>
          <Typography className='text-sm pr-2 pt-2'>
            {job.employmentType}
          </Typography>
          <Typography className='text-sm pr-2 pt-2'>{job.location}</Typography>
        </div>
        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>{job.location}</div>
          {/* button */}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
