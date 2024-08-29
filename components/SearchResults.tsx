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

interface SuggestedProps {
  jobs: JobType[];
}

const SearchResults = ({ jobs }: SuggestedProps) => {
  // first job listing as default active tab
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
