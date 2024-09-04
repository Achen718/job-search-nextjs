'use server';

import { prisma } from '@/lib/prisma';

async function getJobCount(title: string, location: string) {
  const getJobsbyRecent = await prisma.jobPosting.count({
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

  return getJobsbyRecent;
}

export default getJobCount;
