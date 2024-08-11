"use client";

import JobListCard from "@/app/components/jobListCard";
import JobPostingsProps, { JobPost } from "@/app/types/Job";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Title from "../components/Title";
import BookmarkButton from "../components/BookmarkButton";

function JobPostings() {
  const [jobPostings, setJobPostings] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState(true); // To handle loading state

  useEffect(() => {
    const fetchJobs = async () => {
      const accessToken = localStorage.getItem("accessToken");

      const res = await fetch(
        "https://akil-backend.onrender.com/opportunities/search",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const jobPostings: JobPostingsProps = await res.json();
      setJobPostings(jobPostings.data);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-20 max-w-[66rem] pt-10 space-y-10">
        <Title resultNo={jobPostings.length} title=" Opportunities" />
        {loading ? (
          <p>Loading...</p> // Optionally, you can have a loading state
        ) : jobPostings.length > 0 ? (
          jobPostings.map((job) => (
            <div
              key={job.id}
              className="relative flex max-w-[66rem] w-full rounded-xl bg-clip-border text-gray-700 shadow"
            >
              <div className="absolute top-3 right-3 z-10">
                <BookmarkButton id={job.id} marked={job.isBookmarked} />
              </div>

              <Link
                href={{
                  pathname: `/description/${job.id}`,
                  query: {
                    id: job.id,
                  },
                }}
              >
                <JobListCard
                  title={job.title}
                  orgName={job.orgName}
                  description={job.description}
                  logoUrl={job.logoUrl ? job.logoUrl : "/job1.png"}
                  location={job.location}
                  opType={job.opType}
                  id={job.id}
                />
              </Link>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">
            <p>No job opportunities found.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default JobPostings;
