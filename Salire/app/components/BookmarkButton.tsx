"use client";
import { addBookmark, deleteBookmark } from "@/app/types";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { bookMarkProps } from "../lib/features/jobs/bookMarkSlice";

function BookmarkButton({ id, marked }: bookMarkProps) {
  const [bookmark, setBookmark] = useState(marked);

  async function toggleBookmark() {
    // to bookmark
    if (!bookmark) {
      const response = await addBookmark(id);
      
      setBookmark(!bookmark);
    } else {
      // delete
      setBookmark(!bookmark);
      const response = await deleteBookmark(id);
    }
  }
  return (
    <button onClick={() => toggleBookmark()}>
      {!bookmark ? <FaRegBookmark /> : <FaBookmark />}
    </button>
  );
}
export default BookmarkButton;
