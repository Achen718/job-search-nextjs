'use client';
import { DefaultSkeleton } from '@/components/Skeleton';

const LoadingPage = () => {
  return (
    <div className='grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible'>
      <DefaultSkeleton />
    </div>
  );
};

export default LoadingPage;
