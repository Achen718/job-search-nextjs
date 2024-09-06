'use client';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import JobCard from './JobCard';
import JobDetails from './JobDetails';
import { JobType } from '@/types/jobTypes';
import {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  Suspense,
} from 'react';
import { DefaultPagination } from './Pagination';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { setCurrentPage } from '@/lib/features/pagination/paginationSlice';

interface paramProps {
  jobTitle: string;
  jobLocation: string;
  totalItems: number;
}

const SearchResults = ({ jobTitle, jobLocation, totalItems }: paramProps) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [defaultCard, setDefaultCard] = useState<string | null>(null);
  const ref = useRef<(HTMLElement | null)[]>([]);

  const fetchJobs = async () => {
    await fetch(
      `/api/jobs?jobTitle=${jobTitle}&jobLocation=${jobLocation}&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        const totalList = Math.ceil(totalItems / 4);
        setTotalPages(totalList);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, [currentPage, jobTitle, jobLocation]);

  const pagehandler = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  useEffect(() => {
    if (jobs.length > 0) {
      setDefaultCard(jobs[0].id);
    } else {
      setDefaultCard(null);
    }
  }, [jobs]);

  useEffect(() => {
    console.log(ref.current);
    if (ref.current.length > 0 && jobs.length > 0) {
      ref.current[0].click();
    }
  }, [defaultCard]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.title.includes(jobTitle) && job.location.includes(jobLocation)
    );
  }, [jobs, jobTitle, jobLocation]);

  const tabHeaderId = [
    '[&_#tab-header-suggested]:!translate-x-0',
    '[&_#tab-header-suggested]:bg-transparent',
    '[&_#tab-header-suggested]:ring-2',
    '[&_#tab-header-suggested]:ring-blue-500',
    '[&_#tab-header-suggested]:rounded-xl',
  ];

  return (
    <section
      id='search-results'
      className='container mx-auto max-w-7xl sm:px-4 lg:px-6 text-center h-screen overflow-scroll'
    >
      {defaultCard ? (
        <Tabs
          value={defaultCard}
          orientation='vertical'
          className='justify-center'
        >
          <TabsHeader
            indicatorProps={{ id: 'tab-header-suggested' }}
            className='p-2'
          >
            {filteredJobs.map((job, index) => (
              <Tab
                key={job.id}
                value={job.id}
                ref={(el) => (ref.current[index] = el)}
                className={
                  tabHeaderId.join(' ') +
                  ' block p-0 mb-2 last:mb-0 max-w-full md:w-96'
                }
              >
                <JobCard key={job.id} job={job} />
              </Tab>
            ))}
            <DefaultPagination
              pagehandler={pagehandler}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </TabsHeader>
          <TabsBody
            className='w-w70 hidden md:block'
            animate={{
              mount: {
                transition: {
                  duration: 0,
                },
              },
              unmount: {
                transition: {
                  duration: 0,
                },
              },
            }}
          >
            {filteredJobs.map((job) => (
              <TabPanel key={job.id} value={job.id} className='tab-panel pt-2'>
                <JobDetails key={job.id} job={job} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      ) : (
        <div className='text-center text-blue-500 m-2 p-8'>
          <p>No jobs found.</p>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
