'use client';
import Hero from '@/components/Hero';
import JobSearchTabs from '@/components/JobSearchTabs';
import JobStoreProvider from './StoreProvider';

const HomePage = () => {
  return (
    <JobStoreProvider>
      <Hero />
      <JobSearchTabs />
    </JobStoreProvider>
  );
};

export default HomePage;
