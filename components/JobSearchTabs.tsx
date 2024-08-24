'use client';
import { useState } from 'react';
import SuggestedJobCard from './SuggestedTab';
import RecentSearchTab from './RecentTab';
import { tabItems } from '../constants/index';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';

interface ITabItems {
  label: string;
  value: string;
}

const JobSearchTabs = () => {
  const [activeTab, setActiveTab] = useState<string>('Suggested');

  const TabContent = ({ value }: ITabItems) => {
    return value === 'Recent' ? <RecentSearchTab /> : <SuggestedJobCard />;
  };

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className='rounded-none border-b border-blue-gray-50 bg-transparent p-0 justify-center'
        indicatorProps={{
          id: 'tabs-header-indicator',
          className:
            'bg-transparent border-b-4 border-blue-500 shadow-none rounded-none',
        }}
      >
        {tabItems.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              (activeTab === value ? 'text-gray-900 font-bold' : '') +
              ' max-w-72 [&_#tabs-header-indicator]:!translate-x-0'
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        className='mx-auto max-w-7xl sm:px-4 lg:px-6 text-center'
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
        {tabItems.map(({ value }) => (
          <TabPanel key={value} value={value}>
            <TabContent value={value} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default JobSearchTabs;
