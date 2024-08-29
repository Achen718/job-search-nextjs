import SearchResults from '../../components/SearchResults';
import { prisma } from '@/lib/prisma';
import Job from '@/components/Job';
import JobStoreProvider from '../StoreProvider';

const JobsPage = async ({
  searchParams: { jobTitle, jobLocation },
}: {
  searchParams: { jobTitle: string; jobLocation: string };
}) => {
  // todo: add search for multi word job titles
  const jobs = await prisma.jobPosting.findMany({
    where: {
      title: {
        contains: jobTitle,
      },
      location: {
        contains: jobLocation,
      },
    },
  });

  console.log(jobs);

  return (
    <section>
      <div>
        <JobStoreProvider>
          <SearchResults jobs={jobs} />
        </JobStoreProvider>
      </div>
    </section>
  );
};

export default JobsPage;
