"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import BookmarkCard from "../components/BookmarkCard";
import { Navbar } from "../components/Navbar";
import Title from "../components/Title";
import { fetchBookmarks } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { setBookmark } from "../lib/features/jobs/bookMarkSlice";
import { toast } from "react-toastify";
const Bookmarks: React.FC = () => {
  const bookmarks = useSelector((state: RootState) => state.bookMarks);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const data = await fetchBookmarks();
        dispatch(setBookmark(data));
      } catch (error) {
        toast.error("Unknown error", {
          position: "top-center",
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    };

    loadBookmarks();

    setLoading(false);
  }, [bookmarks.length, dispatch]);

  return (
    <div>
      <Navbar />

      <div className="mx-20 max-w-[66rem] pt-10 space-y-10">
        <Title resultNo={bookmarks.length} title="Bookmarks" />
        {loading ? (
          <p data-testid="Loading">Loading...</p>
        ) : bookmarks.length === 0 ? (
          <p>No bookmarks available.</p>
        ) : (
          bookmarks.map((bookmark) => (
            <div
              key={bookmark.eventID}
              className="relative flex max-w-[66rem] rounded-xl bg-clip-border text-gray-700 shadow my-[72px] mx-[124px] bookmark-card"
            >
              <Link
                href={{
                  pathname: `/description/${bookmark.eventID}`,
                  query: {
                    id: bookmark.eventID,
                  },
                }}
              >
                <BookmarkCard
                  eventID={bookmark.eventID}
                  title={bookmark.title}
                  orgName={bookmark.orgName}
                  logoUrl={bookmark.logoUrl || "/job1.png"}
                  location={bookmark.location}
                  opType={bookmark.opType}
                  dateBookmarked={bookmark.dateBookmarked}
                  datePosted={bookmark.datePosted}
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
