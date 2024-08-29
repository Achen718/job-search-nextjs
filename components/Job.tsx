'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { setFilteredJobs } from '../lib/features/filteredJobs/filteredJobsSlice';
import { JobType } from '@/types/jobTypes';

interface testProp {
  jobs: JobType[];
}
const JobComponent = ({ jobs }: testProp) => {
  return (
    <div>
      <ul>
        filter jobs based on search
        {jobs.map((job, index) => (
          <li key={index}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobComponent;
