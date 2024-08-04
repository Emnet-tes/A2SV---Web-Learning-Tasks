import Link from "next/link";

import { getJobPostings } from "@/app/types";
import JobListCard from "@/components/jobListCard";
import Nav from "./nav";

async function JobPostings() {
  const jobPostings = await getJobPostings();
  return (
    <div className="mx-20 max-w-[66rem] pt-10 mt-5 ">
      <Nav resultNo={jobPostings.length} />
      {jobPostings.map((job) => (
        <Link href={{
          pathname:`/description/${job.id}`,
          query:{
            id:job.id
          }}} key={job.id}>
          <div className="flex w-full flex-col gap-0.5  ">
            <JobListCard
              title={job.title}
              description={job.description}
              responsibilities={job.responsibilities}
              ideal_candidate={job.ideal_candidate}
              when_where={job.when_where}
              about={job.about}
              company={job.company}
              image={job.image}
              id={job.id}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
export default JobPostings;
