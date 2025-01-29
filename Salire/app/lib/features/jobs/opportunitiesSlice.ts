import JobPostingsProps from "@/app/types/Job";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
const intialState: JobPostingsProps = {
    success:false,
        message:"",
        data:[]
}

const opportunitiesSlice = createSlice({
  name: "opportunities",
  initialState: intialState,
  reducers: {
    setOpportunities(state, action: PayloadAction<JobPostingsProps["data"]>) {
      state.data = action.payload;
    },
    setOpportunitiesSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload;
    },
    setOpportunitiesMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    toggleBookMark(state, action: PayloadAction<string>) {
      const jobId = action.payload;
      const job = state.data.find((job) => job.id === jobId);
      if (job) {
        job.isBookmarked = !job.isBookmarked;
      }
    },
  },
});

export const { setOpportunities, setOpportunitiesSuccess, setOpportunitiesMessage,toggleBookMark } = opportunitiesSlice.actions;
export default opportunitiesSlice.reducer;