'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@material-tailwind/react';
import {
  setJobTitle,
  setJobLocation,
  addSearch,
} from '../lib/features/recentSearches/recentSearchSlice';
import { useAppDispatch } from '@/lib/hooks';

interface SearchInput {
  jobTitle: string;
  jobLocation: string;
}

const SearchForm = () => {
  const [jobTitle, setJobTitleLocal] = useState<string>('');
  const [jobLocation, setJobLocationLocal] = useState<string>('');

  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchInput>({
    defaultValues: {
      jobTitle: '',
      jobLocation: '',
    },
  });

  const handleSearch = handleSubmit(() => {
    const query = `?jobTitle=${jobTitle}&jobLocation=${jobLocation}`;
    router.push(`/jobs${query}`);

    dispatch(setJobTitle(jobTitle));
    dispatch(setJobLocation(jobLocation));
    dispatch(addSearch({ jobTitle, jobLocation }));
  });

  return (
    <form
      onSubmit={handleSearch}
      className='my-3 mx-auto max-w-7xl px-6 w-full flex flex-col justify-center md:flex-row items-center container'
    >
      <div className='w-full md:w-2/5 md:pr-2 mb-4 md:mb-0'>
        <label htmlFor='jobTitle' className='sr-only'>
          Job Title
        </label>
        <input
          type='text'
          id='jobTitle'
          placeholder='Enter Keywords or Location'
          className={
            (errors.jobTitle && 'ring-red-700') +
            ' w-full px-4 py-3 rounded-lg text-gray-800 border-0 focus:outline-none focus:outline-blue-600 ring-1 ring-inset ring-slate-600 placeholder:text-gray-400 focus:ring-2'
          }
          {...register('jobTitle', {
            required: true,
          })}
          value={jobTitle}
          onChange={(e) => setJobTitleLocal(e.target.value)}
        />
      </div>
      <div className='w-full md:w-2/5 md:pl-2'>
        <label htmlFor='jobLocation' className='sr-only'>
          Location
        </label>
        <input
          type='text'
          id='jobLocation'
          placeholder='Enter Keywords or Location'
          className={
            (errors.jobLocation && 'ring-red-700') +
            ' w-full px-4 py-3 rounded-lg text-gray-800 border-0 focus:outline-none focus:outline-blue-600 ring-1 ring-inset ring-slate-600 placeholder:text-gray-400 focus:ring-2'
          }
          {...register('jobLocation', {
            required: true,
          })}
          value={jobLocation}
          onChange={(e) => setJobLocationLocal(e.target.value)}
        />
      </div>
      <Button
        type='submit'
        size='lg'
        className='md:ml-4 mt-4 md:mt-0 w-full md:w-1/5 md:max-w-28 px-6 rounded-lg bg-sky-900 text-white hover:bg-sky-700 focus:outline-none focus:ring focus:ring-blue-500'
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
