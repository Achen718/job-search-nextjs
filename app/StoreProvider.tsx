'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import { setFilteredJobs } from '../lib/features/filteredJobs/filteredJobsSlice';
import { JobType } from '@/types/jobTypes';
import { recentSearchSlice } from '@/lib/features/recentSearches/recentSearchSlice';

export default function JobStoreProvider({
  children,
}: // jobs,
{
  // jobs: JobType[];
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // const serializedJobs = jobs.map((job) => ({
    //   ...job,
    //   createdAt: new Date(job.createdAt).toISOString(),
    // }));
  }
  console.log(storeRef.current.__persistor);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={storeRef.current.__persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
