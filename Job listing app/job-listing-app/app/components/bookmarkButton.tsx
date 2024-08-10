"use client";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";
import { addBookmark, deleteBookmark } from "@/app/types";
interface Props {
  id: string;
  marked: boolean;
 
}

function BookmarkButton({ id, marked }: Props) {
  const [bookmark, setBookmark] = useState(marked);

  async function toggleBookmark() {
    // event.stopPropagation();
    // to bookmark
    if (!bookmark) {
      const response = await addBookmark(id);
      setBookmark(!bookmark);

      // console.log(response)
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
