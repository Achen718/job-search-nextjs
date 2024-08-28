'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/lib/store';
import { formatPostedDate } from '@/utils/formatDate';

const JobComponent = () => {
  const filteredJobs = useSelector((state: RootState) => state.filteredJobs);
  filteredJobs.map((job) => {
    console.log(formatPostedDate(job.createdAt));
  });

  return (
    <div>
      <ul>
        {filteredJobs.map((job, index) => (
          <li key={index}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobComponent;
