import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  console.log(request.nextUrl);
  const jobTitle = searchParams.get('jobTitle') || '';
  console.log(jobTitle);
  const jobLocation = searchParams.get('jobLocation') || '';
  const page = searchParams.get('page') || '1';
  const pageNumber = parseInt(page, 10) || 1;
  const itemsPerPage = 4;
  const skip = (pageNumber - 1) * itemsPerPage;

  try {
    const jobs = await prisma.jobPosting.findMany({
      where: {
        title: {
          contains: jobTitle,
          mode: 'insensitive',
        },
        location: {
          contains: jobLocation,
          mode: 'insensitive',
        },
      },
      skip: skip,
      take: itemsPerPage,
    });
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}
