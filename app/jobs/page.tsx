import SearchResults from '../../components/SearchResults';
import { prisma } from '@/lib/prisma';
import JobStoreProvider from '../StoreProvider';
import SearchForm from '@/components/SearchForm';
import getJobCount from '@/app/actions/getJobCount';

const JobsPage = async ({
  searchParams: { jobTitle, jobLocation, page = 1 },
}: {
  searchParams: { jobTitle: string; jobLocation: string; page: number };
}) => {
  const totalItems = await getJobCount(jobTitle, jobLocation);

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
