export interface JobType {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: {
    min: number;
    max: number;
  };
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}

export interface JobProps {
  job: JobType;
}
