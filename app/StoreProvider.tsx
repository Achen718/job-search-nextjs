'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';
import { setFilteredJobs } from '../lib/features/filteredJobs/filteredJobsSlice';
import { JobType } from '@/types/jobTypes';

export default function JobStoreProvider({
  children,
  jobs,
}: {
  jobs: JobType[];
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(setFilteredJobs(jobs));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
