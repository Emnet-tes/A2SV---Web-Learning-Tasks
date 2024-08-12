"use client"; // This ensures the component is rendered on the client side

import Link from "next/link";
import React, { useEffect, useState } from "react";
import BookmarkCard from "../components/BookmarkCard";
import { Navbar } from "../components/Navbar";
import Title from "../components/Title";
import { Bookmark, BookmarkingsProps } from "../types/Job";

const Bookmarks: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(
          "https://akil-backend.onrender.com/bookmarks",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch bookmarks");
        }

        const result: BookmarkingsProps = await response.json();
        console.log(result, "result");
        setBookmarks(result.data); // Assuming your API returns bookmarks array
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
      }
    };

    fetchBookmarks();
  }, []);


  return (
    <div>
      <Navbar />
      <div className="mx-20 max-w-[66rem] pt-10  space-y-10">
        <Title resultNo={bookmarks.length} title="Bookmarks" />
        {bookmarks.map((bookmark) => (
          <div className="relative flex max-w-[66rem]   rounded-xl bg-clip-border text-gray-700 shadow my-[72px] mx-[124px] bookmark-card">
            <Link
              href={{
                pathname: `/description/${bookmark.eventID}`,
                query: {
                  id: bookmark.eventID,
                },
              }}
            >
              <BookmarkCard
                eventID={bookmark.eventID} // Add key prop here to avoid React warnings
                title={bookmark.title}
                orgName={bookmark.orgName}
                logoUrl={bookmark.logoUrl ? bookmark.logoUrl : "/job1.png"}
                location={bookmark.location}
                opType={bookmark.opType}
                dateBookmarked={bookmark.dateBookmarked}
                datePosted={bookmark.datePosted}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
