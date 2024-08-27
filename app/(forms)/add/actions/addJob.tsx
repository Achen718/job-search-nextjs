'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

export type FormData = {
  title: string;
  description: string;
  location: string;
  author: string;
  salaryMin: string;
  salaryMax: string;
  img: string;
  employmentType: string;
};

export async function addJob(formData: FormData) {
  await prisma.jobPosting.create({
    data: {
      title: formData.title,
      description: formData.description,
      location: formData.location,
      author: formData.author,
      salaryMin: parseFloat(formData.salaryMin),
      salaryMax: parseFloat(formData.salaryMax),
      img: formData.img,
      employmentType: formData.employmentType,
    },
  });

  revalidatePath('/create');
}
