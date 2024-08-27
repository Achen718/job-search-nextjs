'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import clsx from 'clsx';
import { addJob, type FormData } from './actions/addJob';

const CreateJobForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      author: '',
      description: '',
      location: '',
      img: '',
      employmentType: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await addJob(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-3xl text-center font-semibold mb-6'>Add Property</h2>
      <div className='mb-4'>
        <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
          Job Title
        </label>
        <input
          type='text'
          id='title'
          className='border rounded w-full py-2 px-3 mb-2'
          placeholder='eg. Software Engineer, Product Manager, etc.'
          {...register('title', { required: true })}
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='employmentType'
          className='block text-gray-700 font-bold mb-2'
        >
          Employment Type
        </label>
        <select
          id='employmentType'
          className='border rounded w-full py-2 px-3'
          {...register('employmentType', {
            required: true,
          })}
        >
          <option value='Part Time'>Part-Time</option>
          <option value='Full Time'>Full-Time</option>
          <option value='Temporary'>Temp</option>
        </select>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='description'
          className='block text-gray-700 font-bold mb-2'
        >
          job Description
        </label>
        <textarea
          id='description'
          {...register('description')}
          className='border rounded w-full py-2 px-3'
          rows={4}
          placeholder='Add Job Description. eg. requirements, responsibiles'
        ></textarea>
      </div>

      <div className='mb-4 bg-blue-50 p-4'>
        <label className='block text-gray-700 font-bold mb-2'>Location</label>
        <input
          type='text'
          id='location'
          {...register('location')}
          className='border rounded w-full py-2 px-3 mb-2'
          placeholder='location'
        />
      </div>

      <div className='mb-4 flex flex-wrap'>
        <div className='w-full sm:w-1/3 pr-2'>
          <label htmlFor='beds' className='block text-gray-700 font-bold mb-2'>
            Company Name
          </label>
          <input
            type='text'
            id='author'
            {...register('author', { required: true })}
            className='border rounded w-full py-2 px-3'
          />
        </div>
        <div className='w-full sm:w-1/3 px-2'>
          <label
            htmlFor='salaryMin'
            className='block text-gray-700 font-bold mb-2'
          >
            Minimum Salary
          </label>
          <input
            type='number'
            id='salaryMin'
            className='border rounded w-full py-2 px-3'
            {...register('salaryMin', { required: true, min: 0 })}
          />
        </div>
        <div className='w-full sm:w-1/3 pl-2'>
          <label
            htmlFor='salaryMax'
            className='block text-gray-700 font-bold mb-2'
          >
            Maximum Salary
          </label>
          <input
            type='number'
            id='salaryMax'
            className='border rounded w-full py-2 px-3'
            {...register('salaryMax', { required: true, min: 0 })}
          />
        </div>
      </div>
      <div className='mb-4'>
        <label htmlFor='img' className='block text-gray-700 font-bold mb-2'>
          Company Logo (img)
        </label>
        <input
          type='file'
          id='img'
          className='border rounded w-full py-2 px-3'
          accept='image/*'
          {...register('img')}
        />
      </div>

      <div>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Add Job
        </button>
      </div>
    </form>
  );
};

export default CreateJobForm;
