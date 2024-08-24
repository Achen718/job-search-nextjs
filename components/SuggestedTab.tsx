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
import jobs from '@/jobs.json';

const SuggestedJobCard = () => {
  // create a recent list of jobs viewed local storage or redux persist?
  const recentJobs = jobs.slice(0, 3);
  const defaultDescription = recentJobs[0].id;
  // tab header classnames
  const tabHeaderId = [
    '[&_#tab-header-suggested]:!translate-x-0',
    '[&_#tab-header-suggested]:bg-transparent',
    '[&_#tab-header-suggested]:border-2',
    '[&_#tab-header-suggested]:border-blue-500',
  ];

  return (
    <section>
      <Tabs
        value={defaultDescription}
        orientation='vertical'
        className='bg-none'
      >
        <TabsHeader indicatorProps={{ id: 'tab-header-suggested' }}>
          {recentJobs.map((job) => (
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
          {recentJobs.map((job) => (
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

export default SuggestedJobCard;
