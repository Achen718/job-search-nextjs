import jobs from '@/jobs.json';
import JobCard from '@/components/JobCard';

const JobsPage = () => {
  return (
    <section>
      <div>
        {/* all job listings, limit */}
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobsPage;
