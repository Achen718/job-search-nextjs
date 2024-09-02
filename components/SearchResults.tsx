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
import { useEffect, useState } from 'react';

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
  const [localPage, setPage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);
  console.log(totalPages);

  const fetchJobs = () => {
    fetch(
      `/api/jobs?jobTitle=${jobTitle}&jobLocation=${jobLocation}&page=${localPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        const jobsPerPage = jobs.length;
        const totalList = Math.ceil(totalItems / jobsPerPage);
        setTotalPages(totalList);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, [localPage, totalPages]);

  const pagehandler = (page: number) => {
    setPage(page);
    fetchJobs();
  };

  // Todo: Set default card on pagination updates
  const defaultCard = jobs && jobs.length > 0 ? jobs[0].id : null;
  // tab header classnames
  const tabHeaderId = [
    '[&_#tab-header-suggested]:!translate-x-0',
    '[&_#tab-header-suggested]:bg-transparent',
    '[&_#tab-header-suggested]:border-2',
    '[&_#tab-header-suggested]:border-blue-500',
  ];

  return (
    <section>
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
                className={tabHeaderId.join(' ') + ' block p-0 mb-2 last:mb-0'}
              >
                <JobCard key={job.id} job={job} />
              </Tab>
            ))}
            <div>
              <div className='flex justify-center mt-4'>
                {localPage > 1 && (
                  <button
                    className='px-4 py-2 text-white bg-blue-500 rounded-md'
                    onClick={() => pagehandler(localPage - 1)}
                  >
                    Prev Page
                  </button>
                )}

                {localPage < totalPages && (
                  <button
                    className='px-4 py-2 text-white bg-blue-500 rounded-md'
                    onClick={() => pagehandler(localPage + 1)}
                  >
                    Next Page
                  </button>
                )}
              </div>
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
        <div className='text-center text-blue-500'>
          <p>No jobs found</p>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
