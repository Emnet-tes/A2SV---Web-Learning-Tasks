import Link from "next/link";

import JobListCard from "@/app/pages/components/jobListCard";
import { getJobPostings } from "@/app/types";
import Nav from "./nav";

async function JobPostings() {
  const jobPostings = await getJobPostings();

  return (
    <div className="mx-20 max-w-[66rem] pt-10 mt-5 ">
      <Nav resultNo={jobPostings.length} />
      {jobPostings.map((job) => (
        <Link
          href={{
            pathname: `/description/${job.id}`,
            query: {
              id: job.id,
            },
          }}
          key={job.id}
        >
          <div className="flex w-full flex-col gap-0.5  ">
            <JobListCard
              title={job.title}
              orgName={job.orgName}
              description={job.description}
              logoUrl={job.logoUrl ? job.logoUrl : "/job1.png"}
              location={job.location}
              opType={job.opType}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
export default JobPostings;
