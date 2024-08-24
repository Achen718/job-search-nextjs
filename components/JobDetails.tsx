'use client';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { JobProps } from '@/types/jobTypes';

const JobDetails = ({ job }: JobProps) => {
  return (
    <Card className='mt-4'>
      <CardBody className='p-2'>
        {/* set header */}
        <Typography>{job.company.name}</Typography>
        <Typography variant='h6' color='blue-gray' className='mb-2'>
          {job.title}
        </Typography>
        <Typography variant='h6' color='blue-gray' className='mb-2'>
          {job.location}
        </Typography>
        <Typography variant='h6' color='blue-gray' className='mb-2'>
          ${job.salary.min}k - ${job.salary.max}k {job.type}
        </Typography>
        <Typography>{job.description}</Typography>
        <Typography>{job.company.description}</Typography>
        {/* set conditional for details */}
      </CardBody>
    </Card>
  );
};

export default JobDetails;
