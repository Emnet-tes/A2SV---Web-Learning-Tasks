import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface bookMarkProps {
  id: string;
  marked: boolean;
}
const initialState: bookMarkProps = {
    id: "",
    marked: false,
    };
const bookMarkSlice = createSlice({
    name: "bookMark",
    initialState: initialState,
    reducers: {
        setBookMark(state, action:PayloadAction<bookMarkProps>) {
            state.id = action.payload.id;
            state.marked = action.payload.marked;
        },
    }
});

export const { setBookMark } = bookMarkSlice.actions;
export default bookMarkSlice.reducer;

