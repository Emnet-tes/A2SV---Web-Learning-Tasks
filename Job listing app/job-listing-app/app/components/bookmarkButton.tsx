"use client";
import { addBookmark, deleteBookmark } from "@/app/types";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
interface Props {
  id: string;
  marked: boolean;
}

function BookmarkButton({ id, marked }: Props) {
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
