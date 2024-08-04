import getAgeGroup, { SingleJobPost } from "@/app/types";
import { epilogue, poppins } from "@/app/ui/fonts";
import { AboutCard } from "@/components/aboutCard";
import { CategoriesCard } from "@/components/categoriesCard";
import { IdealCandidate } from "@/components/IdealCandidate";
import { RequiredSkillsCard } from "@/components/RequiredSkillsCard";
import { ResponsibilitesCard } from "@/components/ResponsibilitesCard";
import { WhenAndWhere } from "@/components/WhenAndWhere";

interface IdProps {
  searchParams: { [key: string]: string };
}
export default async function Id({ searchParams }: IdProps) {
  const jobPost = await SingleJobPost(searchParams.id);
  const title = jobPost?.title;
  const description = jobPost?.description;
  const responsibilitites = jobPost?.responsibilities;
  const ideal_candidate = jobPost?.ideal_candidate;
  const when_where = jobPost?.when_where;
  const about = jobPost?.about;
  const categories = jobPost?.about.categories;
  const requiredSkills = jobPost?.about.required_skills;
  const gender =
    ideal_candidate?.gender !== "Any" ? ideal_candidate?.gender : "";
  const candidate = `${getAgeGroup(
    ideal_candidate?.age
  ).trim()} ${gender} ${title}`;

  return (
    <div className="m-[32px] flex">
      <div className="flex-col  max-w-[816px] block items-start space-y-[55px] my-[46px] mr-[62px]">
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
              {description}
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
          {responsibilitites?.map((res) => (
            <ResponsibilitesCard text={res} />
          ))}
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
            <IdealCandidate text={candidate} />
            {ideal_candidate?.traits.map((trait) => (
              <IdealCandidate text={trait} />
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
          <WhenAndWhere text={when_where} />
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
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
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
          <CategoriesCard />
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
          <RequiredSkillsCard />
        </div>
      </div>
    </div>
  );
}
