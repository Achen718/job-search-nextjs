'use client';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Button,
  TabPanel,
} from '@material-tailwind/react';
import JobCard from './JobCard';
import JobDetails from './JobDetails';
import { JobType } from '@/types/jobTypes';
import { useEffect, useState } from 'react';
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

  const fetchJobs = () => {
    fetch(
      `/api/jobs?jobTitle=${jobTitle}&jobLocation=${jobLocation}&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        const totalList = Math.ceil(totalItems / 4);
        setTotalPages(totalList);
      });
  };

  const pagehandler = (page: number) => {
    setCurrentPage(page);
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  useEffect(() => {
    if (jobs.length > 0) {
      setDefaultCard(jobs[0].id);
    }
  }, [jobs]);

  // Todo: Set default card on pagination updates
  // const defaultCard = jobs && jobs.length > 0 ? jobs[0].id : null;
  // console.log(defaultCard);
  // tab header classnames
  const tabHeaderId = [
    '[&_#tab-header-suggested]:!translate-x-0',
    '[&_#tab-header-suggested]:bg-transparent',
    '[&_#tab-header-suggested]:border-2',
    '[&_#tab-header-suggested]:border-blue-500',
  ];

  return (
    <section className='mx-auto max-w-7xl sm:px-4 lg:px-6 text-center h-screen'>
      {defaultCard ? (
        <Tabs value={defaultCard} orientation='vertical'>
          <TabsHeader
            indicatorProps={{ id: 'tab-header-suggested' }}
            className='p-2'
          >
            {jobs.map((job) => (
              <Tab
                key={job.id}
                value={job.id}
                className={
                  tabHeaderId.join(' ') +
                  ' block p-0 mb-2 last:mb-0 max-w-full w-96'
                }
              >
                <JobCard key={job.id} job={job} />
              </Tab>
            ))}
            <div className='flex justify-center mt-4'>
              <DefaultPagination
                pagehandler={pagehandler}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </div>
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
              <TabPanel key={job.id} value={job.id} className='tab-panel'>
                {/* update job card details */}
                <JobDetails key={job.id} job={job} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      ) : (
        <div className='text-center text-blue-500 m-2 p-8'>
          <p>No jobs found</p>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
