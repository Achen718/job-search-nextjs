import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { JobType } from '@/types/jobTypes';

// Define a type for the slice state
interface CounterState {
  value: number;
}

interface FilteredJobsState {
  filteredJobs: JobType[];
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
    setFilteredJobs: (state, action: PayloadAction<JobType[]>) => {
      console.log(state, action);
      state.filteredJobs = action.payload;
    },
  },
});

export const { setFilteredJobs } = filteredJobsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default filteredJobsSlice.reducer;
