import SearchResults from '../../components/SearchResults';
import { prisma } from '@/lib/prisma';
import Job from '@/components/Job';
import JobStoreProvider from '../StoreProvider';

const JobsPage = async () => {
  const jobs = await prisma.jobPosting.findMany({});
  return (
    <section>
      <div>
        <JobStoreProvider jobs={jobs}>
          {/* add job filters */}
          {/* <SearchResults jobs={jobs} /> */}
          <Job />
        </JobStoreProvider>
      </div>
    </section>
  );
};

export default JobsPage;
