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
import { useAppSelector } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import setSearchSuggestions from '@/app/actions/setSearchSuggestions';

const SearchSuggestions = () => {
  const [jobPostings, setJobPostings] = useState<JobType[]>([]);
  const [suggestions, setSuggestions] = useState([]);
  const searched = useAppSelector((state) => state.recentSearch.recentSearches);
  // get latest search result
  const recentlySearched = searched.at(-1);
  const defaultCard =
    (jobPostings && jobPostings.length) > 0 ? jobPostings[0].id : null;
  // tab header classnames
  const tabHeaderId = [
    '[&_#tab-header-suggested]:!translate-x-0',
    '[&_#tab-header-suggested]:bg-transparent',
    '[&_#tab-header-suggested]:ring-2',
    '[&_#tab-header-suggested]:ring-blue-500',
    '[&_#tab-header-suggested]:rounded-xl',
  ];
  // todo: Optional, add server action to fetch suggested jobs from prisma
  useEffect(() => {
    const fetchRecentSearch = async () => {
      if (recentlySearched) {
        const jobs = await setSearchSuggestions(
          recentlySearched.jobTitle,
          recentlySearched.jobLocation
        );
        setSuggestions(recentlySearched);
        setJobPostings(jobs);
      }
    };
    fetchRecentSearch();
  }, []);

  return (
    <section>
      {defaultCard ? (
        <Tabs
          value={defaultCard}
          orientation='vertical'
          className='justify-center'
        >
          <TabsHeader
            indicatorProps={{ id: 'tab-header-suggested' }}
            className='p-2 bg-inherit w-[calc(100vw-3.5rem)] md:w-full h-[calc(100vh-6.5rem)] overflow-scroll'
          >
            {jobPostings.slice(0, 4).map((job) => (
              <Tab
                key={job.id}
                value={job.id}
                className={
                  tabHeaderId.join(' ') + ' block p-0 mb-2 last:mb-0 h-auto'
                }
              >
                <JobCard key={job.id} job={job} />
              </Tab>
            ))}
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
            {jobPostings.slice(0, 4).map((job) => (
              <TabPanel key={job.id} value={job.id} className='tab-panel pt-2'>
                <JobDetails key={job.id} job={job} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      ) : (
        <div className='text-center text-blue-500'>
          <p>Search for jobs to get suggested Posts</p>
        </div>
      )}
    </section>
  );
};

export default SearchSuggestions;
