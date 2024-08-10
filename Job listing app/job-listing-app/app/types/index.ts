import JobPostingProps from "@/app/types/Job";


export async function addBookmark(_id: string) {
  try {
    const accessToken = localStorage.getItem("accessToken");

    // Check if accessToken is available
    if (!accessToken) {
      alert("Access token is missing.");
      return;
    }

    // Make the POST request
    const res = await fetch(`https://akil-backend.onrender.com/bookmarks/${_id}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`, // Include the token
      },
      body: null // Explicitly send a null body to ensure no payload is sent
    });

    console.log(res); // Log the full response for debugging

    if (!res.ok) {
      const errorData = await res.json(); // Parse the error response
      console.error("Error details:", errorData);
      alert(`Failed to add bookmark: ${errorData.message || "Unknown error"}`);
    } else {
      alert('Bookmark added successfully!');
    }
  } catch (error) {
    console.error("An error occurred:", error);
    alert('An unexpected error occurred. Please try again later.');
  }
}


export async function deleteBookmark(_id:string){
  const accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);
  const res= await fetch(`https://akil-backend.onrender.com/bookmarks/${_id}`, {
  method: 'DELETE', 
  headers: {
     Authorization: `Bearer ${accessToken}`,
  },
  body:null
});
  
    if(!res.ok){
     throw new Error("faild to add data");
  } else{
    alert('job delted');
  }

}
export async function getBookmarks(){
  const accessToken = localStorage.getItem("accessToken");
  console.log(accessToken)
  const res= await fetch(`https://akil-backend.onrender.com/bookmarks`, {
  method: 'GET', 
  headers: {
    
     Authorization: `Bearer ${accessToken}`,
  },
 body:null
});
  console.log(res)
    if(!res.ok){
     throw new Error("faild to get data");
  }  
  const bookmarks: JobPostingProps = await res.json();

  return bookmarks.data;
}
// export async function getJobPostings() {
  // npm install json-server -g
  // json-server --watch --port 4000 ./app/data.json
    // const accessToken = localStorage.getItem("accessToken");

  // const res = await fetch("https://akil-backend.onrender.com/opportunities/search",
  //   {
  // method: 'GET', 
  // headers: {
  //   'Content-Type': 'application/json', 
  //    Authorization: `Bearer ${accessToken}`,
  // },
// }
//   );
//   if(!res.ok){
//      throw new Error("faild to fetch data");
//   }
//   const jobPostings: JobPostingProps = await res.json();

//   return jobPostings.data;
// }


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


function toggleBookmark(event: React.MouseEvent<HTMLButtonElement>) {
  event.stopPropagation(); // Prevent the click from propagating to parent elements

  const button = event.currentTarget;
  const regBookmarkIcon = button.querySelector(".reg-bookmark");
  const bookmarkIcon = button.querySelector(".bookmark");

  if (regBookmarkIcon && bookmarkIcon) {
    regBookmarkIcon.classList.toggle("hidden");
    bookmarkIcon.classList.toggle("hidden");
  }
}