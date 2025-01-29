"use client";
import { addBookmark, deleteBookmark } from "@/app/types";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleBookMark } from "../lib/features/jobs/opportunitiesSlice";
import { removeBookmark } from "../lib/features/jobs/bookMarkSlice";

interface bookMarkProps {
  id: string;
  marked: boolean;
}
function BookmarkButton({ id, marked }: bookMarkProps) {
  const [bookmark, setBookmark] = useState(marked);
  const dispatch = useDispatch();
  async function toggleBookmark() {
    dispatch(toggleBookMark(id));
    // to bookmark
    if (!bookmark) {
      const response = await addBookmark(id);
      setBookmark(!bookmark);
    } else {
      // delete
      const response = await deleteBookmark(id);
      setBookmark(!bookmark);
      dispatch(removeBookmark(id));
    }
  }
  return (
    <button onClick={() => toggleBookmark()}>
      {!bookmark ? <FaRegBookmark /> : <FaBookmark />}
    </button>
  );
}
export default BookmarkButton;
