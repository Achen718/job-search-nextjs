import SearchResults from '../../components/SearchResults';
import JobStoreProvider from '../StoreProvider';

const JobsPage = async ({
  searchParams: { jobTitle, jobLocation, page = 1 },
}: {
  searchParams: { jobTitle: string; jobLocation: string; page: number };
}) => {
  return (
    <section>
      <div>
        <JobStoreProvider>
          <SearchResults
            jobTitle={jobTitle}
            jobLocation={jobLocation}
            page={page}
          />
        </JobStoreProvider>
      </div>
    </section>
  );
};

export default JobsPage;
