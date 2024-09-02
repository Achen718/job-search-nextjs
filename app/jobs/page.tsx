import SearchResults from '../../components/SearchResults';
import { prisma } from '@/lib/prisma';
import JobStoreProvider from '../StoreProvider';
import SearchForm from '@/components/SearchForm';

const JobsPage = async ({
  searchParams: { jobTitle, jobLocation, page = 1 },
}: {
  searchParams: { jobTitle: string; jobLocation: string; page: number };
}) => {
  // todo: Add jobs via api route
  const totalItems = await prisma.jobPosting.count({
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
          <SearchForm />
          <SearchResults
            jobTitle={jobTitle}
            jobLocation={jobLocation}
            page={page}
            totalItems={totalItems}
          />
        </JobStoreProvider>
      </div>
    </section>
  );
};

export default JobsPage;
