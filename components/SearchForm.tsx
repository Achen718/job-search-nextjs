const SearchForm = () => {
  return (
    <div>
      <form className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-2/4 md:pr-2 mb-4 md:mb-0'>
          <label htmlFor='location' className='sr-only'>
            Job Title
          </label>
          <input
            type='text'
            id='job-title'
            placeholder='Enter job title, keywords, or company'
            className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
          />
        </div>
        <div className='w-full md:w-2/4 md:pl-2'>
          <label htmlFor='location' className='sr-only'>
            Location
          </label>
          <input
            type='text'
            id='job-location'
            placeholder='City, State eg. Raleigh, NC'
            className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
          />
        </div>
        <button
          type='submit'
          className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
