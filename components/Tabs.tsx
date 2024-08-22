'use client';
import { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';

export function UnderlineTabs() {
  const [activeTab, setActiveTab] = useState('html');
  const data = [
    {
      label: 'HTML',
      value: 'html',
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: 'React',
      value: 'react',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className='rounded-none border-b border-blue-gray-50 bg-transparent p-0 justify-center'
        indicatorProps={{
          className:
            'bg-transparent border-b-4 border-blue-500 shadow-none rounded-none',
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              (activeTab === value ? 'text-gray-900' : '') + ' max-w-72'
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
