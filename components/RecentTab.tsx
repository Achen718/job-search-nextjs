'use client';
import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  CardBody,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { removeSearch } from '../lib/features/recentSearches/recentSearchSlice';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const RecentSearchTab = () => {
  const searched = useAppSelector((state) => state.recentSearch.recentSearches);
  const dispatch = useAppDispatch();

  const router = useRouter();
  interface RecentSearch {
    jobTitle: string;
    jobLocation: string;
  }
  const handleRemoveSearch = (index: number) => {
    dispatch(removeSearch(index));
  };

  const searchRecents = (jobTitle: string, jobLocation: string) => {
    const query = `?jobTitle=${jobTitle}&jobLocation=${jobLocation}`;
    router.push(`/jobs${query}`);
  };

  return (
    <Card className='max-w-2xl mx-auto'>
      <CardBody>
        <div className='mb-4 flex items-center justify-between'>
          <Typography variant='h5' color='blue-gray'>
            {searched && searched.length !== 0
              ? 'Recently Searched Jobs'
              : 'No Recent Searches'}
          </Typography>
        </div>
        {searched && searched.length !== 0 && (
          <div className='divide-y divide-gray-200'>
            {searched.map(
              ({ jobTitle, jobLocation }: RecentSearch, index: number) => (
                <div
                  key={index}
                  className='flex items-center justify-between pb-3 pt-3 last:pb-0'
                >
                  <List className='w-full'>
                    <ListItem
                      ripple={false}
                      className='py-1 pr-1 pl-4 text-slate-600'
                    >
                      <button
                        className='w-full text-left'
                        onClick={() => searchRecents(jobTitle, jobLocation)}
                      >
                        {jobTitle} in {jobLocation}
                      </button>
                      <ListItemSuffix>
                        <IconButton
                          variant='text'
                          color='blue-gray'
                          onClick={() => handleRemoveSearch(index)}
                        >
                          <FaTrash className='h-5 w-5  text-slate-600' />
                        </IconButton>
                      </ListItemSuffix>
                    </ListItem>
                  </List>
                </div>
              )
            )}
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default RecentSearchTab;
