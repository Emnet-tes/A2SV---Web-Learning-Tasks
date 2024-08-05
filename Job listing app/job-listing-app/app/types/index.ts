import JobPostingProps from "@/app/types/Job";

export async function getJobPostings() {
  // npm install json-server -g
  // json-server --watch --port 4000 ./app/data.json
  const res = await fetch("https://akil-backend.onrender.com/opportunities/search");
  if(!res.ok){
     throw new Error("faild to fetch data");
  }
  const jobPostings: JobPostingProps = await res.json();

  return jobPostings.data;
}


export async function SingleJobPost(_id:string){
   const res = await fetch(`https://akil-backend.onrender.com/opportunities/${_id}`);
   if(!res.ok){
     throw new Error("faild to fetch data");
  } 
   const jobPost : JobPostingProps = await res.json();
  return jobPost.data;
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


export  function formatDate(date:string){
  const ios = new Date(date);
  
  var m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
return m[(ios.getMonth())]+' '+ ios.getFullYear()+','+ios.getDate();
// Jul 1, 2023
}