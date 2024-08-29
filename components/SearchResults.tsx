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
  // create a recent list of jobs viewed local storage or redux persist?

  // first job listing as default active tab
  const defaultJob = jobs[0].id;
  // tab header classnames
  const tabHeaderId = [
    '[&_#tab-header-suggested]:!translate-x-0',
    '[&_#tab-header-suggested]:bg-transparent',
    '[&_#tab-header-suggested]:border-2',
    '[&_#tab-header-suggested]:border-blue-500',
  ];

  return (
    <section>
      <Tabs value={defaultJob} orientation='vertical'>
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
    </section>
  );
};

export default SearchResults;
