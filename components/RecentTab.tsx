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
import { useAppSelector } from '@/lib/hooks';

const RecentSearchTab = () => {
  const searched = useAppSelector((state) => state.recentSearch.recentSearches);

  interface RecentSearch {
    jobTitle: string;
    jobLocation: string;
  }

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
                    <ListItem ripple={false} className='py-1 pr-1 pl-4'>
                      {jobTitle} {jobLocation}
                      <ListItemSuffix>
                        <IconButton variant='text' color='blue-gray'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='h-5 w-5'
                          >
                            <path
                              fillRule='evenodd'
                              d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
                              clipRule='evenodd'
                            />
                          </svg>
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
