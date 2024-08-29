'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

async function setSearchSuggestions(title: string, location: string) {
  const getJobsbyRecent = await prisma.jobPosting.findMany({
    where: {
      title: {
        contains: title,
        mode: 'insensitive',
      },
      location: {
        contains: location,
        mode: 'insensitive',
      },
    },
  });
  console.log(getJobsbyRecent);

  return getJobsbyRecent;
}

export default setSearchSuggestions;
