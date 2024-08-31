import SearchForm from './SearchForm';
const Hero = () => {
  return (
    <section className='py-20 mb-4 bg-[url("/hero-bg-blue.jpg")] bg-cover flex flex-item bg-fixed'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1
            role='heading'
            aria-level={1}
            className='text-4xl font-extrabold text-sky-900 sm:text-5xl md:text-6xl'
          >
            Find Your Dream Career
          </h1>
          <p className='my-4 text-xl text-sky-950 font-extralight'>
            Search for the perfect job
          </p>
        </div>
        <SearchForm />
      </div>
    </section>
  );
};

export default Hero;
