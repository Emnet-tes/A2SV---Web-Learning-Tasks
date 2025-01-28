import { configureStore } from '@reduxjs/toolkit';
import opportunitiesReducer from './features/jobs/opportunitiesSlice';
import bookMarkReducer from './features/jobs/bookMarkSlice';

const store = configureStore({
    reducer: {
        jobPostings: opportunitiesReducer,
        bookMarks: bookMarkReducer,
      
    },
    });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;