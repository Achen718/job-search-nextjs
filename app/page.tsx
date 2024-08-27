import Hero from '@/components/Hero';
import JobSearchTabs from '@/components/JobSearchTabs';
import { Prisma } from '@prisma/client';

const HomePage = () => {
  // const jobs = await prisma.jobPosting.findMany({});
  return (
    <>
      <Hero />
      <JobSearchTabs />
    </>
  );
};

export default HomePage;
