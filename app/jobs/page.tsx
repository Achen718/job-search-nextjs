import SearchResults from '../../components/SearchResults';
import { prisma } from '@/lib/prisma';
import JobStoreProvider from '../StoreProvider';

const JobsPage = async ({
  searchParams: { jobTitle, jobLocation },
}: {
  searchParams: { jobTitle: string; jobLocation: string };
}) => {
  console.log('test');
  // todo: add search for multi word job titles
  const jobs = await prisma.jobPosting.findMany({
    where: {
      title: {
        contains: jobTitle,
        mode: 'insensitive',
      },
      location: {
        contains: jobLocation,
        mode: 'insensitive',
      },
    },
  });

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
