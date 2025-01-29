import { addBookmark } from "@/app/types";
import { Bookmark } from "@/app/types/Job";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Bookmark[] = [];

const bookMarkSlice = createSlice({
  name: "bookMarks",
  initialState,
  reducers: {
    setBookmark(state, action: PayloadAction<Bookmark[]>) {
      return action.payload; 
    },
    removeBookmark(state, action: PayloadAction<string>) {
      return state.filter((bookmark) => bookmark.eventID !== action.payload);
    }
   
  },
});

export const { setBookmark , removeBookmark} =
  bookMarkSlice.actions;
export default bookMarkSlice.reducer;
