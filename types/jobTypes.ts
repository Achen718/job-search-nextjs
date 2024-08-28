export interface JobType {
  id: string;
  title: string;
  img: string | null;
  author: string;
  salaryMin: number | null;
  salaryMax: number | null;
  location: string;
  description: string;
  employmentType: string | null;
  createdAt: Date;
}

export interface JobProps {
  job: JobType;
}
