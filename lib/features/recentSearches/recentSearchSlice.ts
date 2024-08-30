// features/jobSearch/jobSearchSlice.ts
import { RootState } from '@/lib/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JobSearchState {
  jobTitle: string;
  jobLocation: string;
  recentSearches: { jobTitle: string; jobLocation: string }[];
}

const initialState: JobSearchState = {
  jobTitle: '',
  jobLocation: '',
  recentSearches: [],
};

export const recentSearchSlice = createSlice({
  name: 'recentSearch',
  initialState,
  reducers: {
    setJobTitle: (state, action: PayloadAction<string>) => {
      state.jobTitle = action.payload;
    },
    setJobLocation: (state, action: PayloadAction<string>) => {
      state.jobLocation = action.payload;
    },
    addSearch: (
      state,
      action: PayloadAction<{ jobTitle: string; jobLocation: string }>
    ) => {
      if (action.payload.jobTitle !== '' && action.payload.jobLocation !== '') {
        state.recentSearches.push(action.payload);
      }
    },
  },
});

export const { setJobTitle, setJobLocation, addSearch } =
  recentSearchSlice.actions;

export const searched = (state: RootState) => state.recentSearch;

export default recentSearchSlice.reducer;
