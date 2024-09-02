'use client';
import Hero from '@/components/Hero';
import HomeTabs from '@/components/HomeTabs';
import JobStoreProvider from './StoreProvider';

const HomePage = () => {
  return (
    <JobStoreProvider>
      <Hero />
      <HomeTabs />
    </JobStoreProvider>
  );
};

export default HomePage;
