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
  // get last search result
  const recentlySearched = searched.at(-1);
  const defaultCard =
    (jobPostings && jobPostings.length) > 0 ? jobPostings[0].id : null;
  // tab header classnames
  const tabHeaderId = [
    '[&_#tab-header-suggested]:!translate-x-0',
    '[&_#tab-header-suggested]:bg-transparent',
    '[&_#tab-header-suggested]:border-2',
    '[&_#tab-header-suggested]:border-blue-500',
  ];

  useEffect(() => {
    const fetchRecentSearch = async () => {
      const jobs = await setSearchSuggestions(
        recentlySearched.jobTitle,
        recentlySearched.jobLocation
      );
      setSuggestions(recentlySearched);
      setJobPostings(jobs);
    };
    fetchRecentSearch();
  }, []);

  return (
    <section>
      {defaultCard ? (
        <Tabs value={defaultCard} orientation='vertical'>
          <TabsHeader
            indicatorProps={{ id: 'tab-header-suggested' }}
            className='p-2'
          >
            {jobPostings.map((job) => (
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
            {jobPostings.map((job) => (
              <TabPanel key={job.id} value={job.id} className='tab-panel'>
                {/* update job card details */}
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
