import { AboutCard } from "@/app/components/aboutCard";
import { CategoriesCard } from "@/app/components/categoriesCard";
import { IdealCandidate } from "@/app/components/IdealCandidate";
import { Navbar } from "@/app/components/Navbar";
import { RequiredSkillsCard } from "@/app/components/RequiredSkillsCard";
import { ResponsibilitesCard } from "@/app/components/ResponsibilitesCard";
import { WhenAndWhere } from "@/app/components/WhenAndWhere";
import { formatDate, SingleJobPost } from "@/app/types";
import { epilogue, poppins } from "@/app/ui/fonts";

interface IdProps {
  searchParams: { [key: string]: string };
}
export default async function Id({ searchParams }: IdProps) {
  const jobPost = await SingleJobPost(searchParams.id);

  const jobPosts = Array.isArray(jobPost) ? jobPost : [jobPost];

  return jobPosts.map((job) => (
    <>
      <Navbar />
      <div className="m-[32px] flex">
        <div className="flex-col  max-w-[816px] min-w-[816px] block items-start space-y-[55px] my-[46px] mr-[62px]">
          {/* description */}
          <div className="w-full space-y-[16px]">
            <h5
              className={`${poppins.className}  text-[24px] leading-[120%] text-[#25324B] text-left`}
              style={{ fontWeight: 900 }}
            >
              Description
            </h5>
            <div className="p-0 mb-4 items-start ">
              <p
                className={`block ${epilogue.className}  text-[16px] leading-[160%] text-[#25324B] text-left`}
                style={{ fontWeight: 400 }}
              >
                {job.description}
              </p>
            </div>
          </div>

          {/* responsibilities */}
          <div className="w-full space-y-[16px] flex-col">
            <h5
              className={`${poppins.className}  text-[24px] leading-[120%] text-[#25324B] text-left`}
              style={{ fontWeight: 900 }}
            >
              Responsibilities
            </h5>

            <div className="space-y-[8px] ">
              {job.responsibilities
                .split(".")
                .filter((res) => res.trim() !== "")
                .map((res, index) => (
                  <ResponsibilitesCard key={index} text={res} />
                ))}
            </div>
          </div>

          {/* ideal candidate */}
          <div className="w-full space-y-[16px]">
            <h5
              className={`${poppins.className}  text-[24px] leading-[120%] text-[#25324B] text-left `}
              style={{ fontWeight: 900 }}
            >
              Ideal Candidate We Want
            </h5>
            <div className="space-y-[8px]">
              {job.idealCandidate
                .split(".")
                .filter((res) => res.trim() !== "")
                .map((res, index) => (
                  <IdealCandidate key={index} text={res} />
                ))}
            </div>
          </div>

          {/* when & where */}

          <div className="w-full space-y-[23px]">
            <h5
              className={`${poppins.className}  text-[24px] leading-[120%] text-[#25324B] text-left`}
              style={{ fontWeight: 900 }}
            >
              When & Where
            </h5>
            <WhenAndWhere text={job.whenAndWhere} />
          </div>
        </div>

        <div className="flex-col w-full space-y-[20px] items-start">
          {/* about */}

          <div className="space-y-[23px]">
            <h5
              className={`${poppins.className}  text-[24px] leading-[120%] text-[#25324B] text-left `}
              style={{ fontWeight: 900 }}
            >
              About
            </h5>
            <AboutCard text="Posted On" value={formatDate(job.datePosted)} />
            <AboutCard text="Deadline" value={formatDate(job.deadline)} />

            {Array.isArray(job.location) ? (
              <AboutCard text="Location" value={job.location} />
            ) : (
              <AboutCard text="Location" value={[job.location]} />
            )}

            <AboutCard text="Start Date" value={formatDate(job.startDate)} />

            <AboutCard text="End Date" value={formatDate(job.endDate)} />
          </div>

          {/* categories */}
          <p className="border-t"></p>

          <div className=" space-y-[24px] flex-col">
            <h5
              className={`${poppins.className}  text-[24px] leading-[120%] text-[#25324B] text-left `}
              style={{ fontWeight: 900 }}
            >
              Categories
            </h5>
            <div className="space-x-[8px]  space-y-[8px] items-start flex-col">
              {job.categories.map((category, index) => (
                <CategoriesCard key={index} text={category} />
              ))}
            </div>
          </div>

          {/* required skills */}
          <p className="border-b"></p>

          <div className=" max-w-[294px] max-h-[121px] space-y-[24px] flex-col">
            <h5
              className={`${poppins.className}  text-[24px] leading-[120%] text-[#25324B] text-left `}
              style={{ fontWeight: 900 }}
            >
              Required Skills
            </h5>
            <div className="flex flex-wrap gap-[8px]">
              {job.requiredSkills.map((skill, index) => (
                <RequiredSkillsCard key={index} text={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  ));
}
