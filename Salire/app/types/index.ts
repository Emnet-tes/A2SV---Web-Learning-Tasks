import JobPostingProps, { BookmarkingsProps } from "@/app/types/Job";
import { toast } from "react-toastify";
export async function addBookmark(_id: string) {
  try {
    const accessToken = localStorage.getItem("accessToken");

    // Check if accessToken is available
    if (!accessToken) {
      toast.error("Server error", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    // Make the POST request
    const res = await fetch(
      `https://akil-backend.onrender.com/bookmarks/${_id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the token
        },
        body: null, // Explicitly send a null body to ensure no payload is sent
      }
    );

    if (!res.ok) {
      toast.error("Unknown error", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.success("Bookmark added", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  } catch (error) {
    toast.error("Unknown error", {
      position: "top-center",
      autoClose: 2000,
    });
  }
}

export async function deleteBookmark(_id: string) {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(
    `https://akil-backend.onrender.com/bookmarks/${_id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: null,
    }
  );

  if (!res.ok) {
    throw new Error("failed to add data");
  } else {
    toast.success("Bookmark deleted", {
      position: "top-center",
      autoClose: 2000,
    });
  }
}

export async function getBookmarks() {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(`https://akil-backend.onrender.com/bookmarks`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: null,
  });
  if (!res.ok) {
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

export async function fetchBookmarks() {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch("https://akil-backend.onrender.com/bookmarks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch bookmarks");
  }
  const bookmarks: BookmarkingsProps = await res.json();
  return bookmarks.data;
}

export async function SingleJobPost(_id: string) {
  const res = await fetch(
    `https://akil-backend.onrender.com/opportunities/${_id}`
  );
  if (!res.ok) {
    throw new Error("faild to fetch data");
  }
  const jobPost: JobPostingProps = await res.json();
  return jobPost.data;
}

export function getAgeGroup(age: string | undefined): string {
  let group: string = "";
  switch (age) {
    case "18-24":
      group = "Young";
      break;
    case "25-44":
      group = "Adult";
      break;
    case "45-64":
      group = "Elder";
      break;
    default:
      return group;
  }

  return `${group}(${age})`;
}

export function formatDate(date: string) {
  const ios = new Date(date);

  var m = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return m[ios.getMonth()] + " " + ios.getFullYear() + "," + ios.getDate();
  // Jul 1, 2023
}
