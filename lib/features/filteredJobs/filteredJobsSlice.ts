import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface filteredJobsType {
  id: string;
  title: string;
  img: string | null;
  author: string;
  salaryMin: number | null;
  salaryMax: number | null;
  location: string;
  description: string;
  employmentType: string | null;
  createdAt: Date;
}

interface FilteredJobsState {
  filteredJobs: filteredJobsType[];
}

// Define the initial state using that type
const initialState: FilteredJobsState = {
  filteredJobs: [],
};

export const filteredJobsSlice = createSlice({
  name: 'jobs',

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setFilteredJobs: (state, action: PayloadAction<filteredJobsType[]>) => {
      state.filteredJobs = action.payload;
    },
  },
});

export const { setFilteredJobs } = filteredJobsSlice.actions;

export default filteredJobsSlice.reducer;
