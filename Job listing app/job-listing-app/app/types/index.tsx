import JobPostingProps from "@/app/types/Job";

export async function getJobPostings() {
  const res = await fetch("http://localhost:4000/job_postings");
  if(!res.ok){
     throw new Error("faild to fetch data");
  }
  const jobPostings: JobPostingProps[] = await res.json();
  return jobPostings;
}


export async function SingleJobPost(_id:string){
  const jobposts = await getJobPostings();
  const jobpost = await jobposts.find((job:any)=>job.id === _id)
  return jobpost;
}

export default function getAgeGroup(age:string|undefined):string{
  let group :string='';
  switch(age){
    case '18-24' :
      group = 'Young'
      break;
    case '25-44':
      group='Adult'
      break;
    case '45-64':
      group='Elder'
      break;
    default:
      return group;
  }
  
  
  return `${group}(${age})`;
    
}