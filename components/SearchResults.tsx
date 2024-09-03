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
import { useEffect, useState, useRef } from 'react';
import { DefaultPagination } from './Pagination';

interface paramProps {
  jobTitle: string;
  jobLocation: string;
  page: number;
  totalItems: number;
}

const SearchResults = ({
  jobTitle,
  jobLocation,
  page,
  totalItems,
}: paramProps) => {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);
  const [defaultCard, setDefaultCard] = useState<string | null>(null);
  const ref = useRef([]);

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

  const pagehandler = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (jobs.length > 0) {
      setDefaultCard(jobs[0].id);
    }
    if (jobs.length === 0) {
      setDefaultCard(null);
    }
  }, [jobs]);

  useEffect(() => {
    if (ref.current.length > 0 && jobs.length > 0) {
      ref.current[0].click();
    }
  }, [defaultCard]);

  // Todo: Set default card on pagination updates
  // const defaultCard = jobs && jobs.length > 0 ? jobs[0].id : null;
  // tab header classnames
  const tabHeaderId = [
    '[&_#tab-header-suggested]:!translate-x-0',
    '[&_#tab-header-suggested]:bg-transparent',
    '[&_#tab-header-suggested]:ring-2',
    '[&_#tab-header-suggested]:ring-blue-500',
    '[&_#tab-header-suggested]:rounded-xl',
  ];

  return (
    <section className='mx-auto max-w-7xl sm:px-4 lg:px-6 text-center h-screen'>
      {defaultCard ? (
        <Tabs value={defaultCard} orientation='vertical'>
          <TabsHeader
            indicatorProps={{ id: 'tab-header-suggested' }}
            className='p-2'
          >
            {jobs.map((job, index) => (
              <Tab
                key={job.id}
                value={job.id}
                ref={(el) => (ref.current[index] = el)}
                className={
                  tabHeaderId.join(' ') +
                  ' block p-0 mb-2 last:mb-0 max-w-full w-96'
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
            className='w-w70'
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
            {jobs.map((job) => (
              <TabPanel key={job.id} value={job.id} className='tab-panel pt-2'>
                {/* update job card details */}
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
