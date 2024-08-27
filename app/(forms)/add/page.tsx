'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { addJob, type FormData } from './actions/addJob';

const CreateJobForm = () => {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();

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

  const uploadImage = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
      });
      // you can run some server action or api here
      // to add the necessary data to your database
      setValue('img', res.url);
    }
  };

  useEffect(() => {
    if (file) {
      uploadImage();
    }
  }, [file]);

  const onSubmit = handleSubmit(async (data) => {
    await addJob(data);
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-3xl text-center font-semibold mb-6'>
        Add Your Job Post
      </h2>
      <div className='mb-4'>
        <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
          Job Title
        </label>
        <input
          type='text'
          id='title'
          className={
            (errors.title && 'ring-red-700') +
            ' border-0 rounded w-full py-2 px-3 focus:outline-blue-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2'
          }
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
          className={
            (errors.employmentType && 'ring-red-700') +
            ' border-0 rounded w-full py-2 px-3 focus:outline-blue-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2'
          }
          {...register('employmentType', {
            required: true,
          })}
        >
          <option value='Part Time'>Part-Time</option>
          <option value='Full Time'>Full-Time</option>
          <option value='Temporary'>Contract/Temp</option>
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
          className='border-0 rounded w-full py-2 px-3 focus:outline-blue-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2'
          rows={4}
          placeholder='Add Job Description. eg. requirements, responsibiles'
        ></textarea>
      </div>

      <div className='mb-4 bg-blue-50 p-4'>
        <label className='block text-gray-700 font-bold mb-2'>Location</label>
        <input
          type='text'
          id='location'
          {...register('location', { required: true })}
          className={
            (errors.location && 'ring-red-700') +
            ' border-0 rounded w-full py-2 px-3 focus:outline-blue-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2'
          }
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
            className={
              (errors.author && 'ring-red-700') +
              ' border-0 rounded w-full py-2 px-3 focus:outline-blue-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2'
            }
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
            className={
              (errors.salaryMin && 'ring-red-700') +
              ' border-0 rounded w-full py-2 px-3 focus:outline-blue-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2'
            }
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
            className={
              (errors.salaryMax && 'ring-red-700') +
              ' border-0 rounded w-full py-2 px-3 focus:outline-blue-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2'
            }
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
          id='file'
          className='border-0 rounded w-full py-2 px-3'
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
        />
        <input type='hidden' id='img' {...register('img')} />
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
