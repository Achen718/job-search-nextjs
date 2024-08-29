'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  setJobTitle,
  setJobLocation,
  addSearch,
} from '../lib/features/recentSearches/recentSearchSlice';
import { useAppDispatch } from '@/lib/hooks';

const SearchForm = () => {
  const [jobTitle, setJobTitleLocal] = useState<string>('');
  const [jobLocation, setJobLocationLocal] = useState<string>('');

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (jobLocation === '' && jobTitle === '') {
      router.push('/jobs');
    } else {
      const query = `?jobTitle=${jobTitle}&location=${jobLocation}`;

      router.push(`/jobs${query}`);
    }
    dispatch(setJobTitle(jobTitle));
    dispatch(setJobLocation(jobLocation));
    dispatch(addSearch({ jobTitle, jobLocation }));
  };

  return (
    <form
      onSubmit={handleSearch}
      className='mt-3 mx-auto max-w-7xl w-full flex flex-col md:flex-row items-center'
    >
      <div className='w-full md:w-2/4 md:pr-2 mb-4 md:mb-0'>
        <label htmlFor='jobTitle' className='sr-only'>
          Job Title
        </label>
        <input
          type='text'
          id='jobTitle'
          placeholder='Enter Keywords or Location'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
          value={jobTitle}
          onChange={(e) => setJobTitleLocal(e.target.value)}
        />
      </div>
      <div className='w-full md:w-2/4 md:pl-2'>
        <label htmlFor='jobLocation' className='sr-only'>
          Location
        </label>
        <input
          type='text'
          id='jobLocation'
          placeholder='Enter Keywords or Location'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
          value={jobLocation}
          onChange={(e) => setJobLocationLocal(e.target.value)}
        />
      </div>
      <button
        type='submit'
        className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500'
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
