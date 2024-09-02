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

const maxRecentSearch = 5;

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
        if (state.recentSearches.length >= maxRecentSearch) {
          state.recentSearches.shift();
        }
        state.recentSearches.push(action.payload);
      }
    },
    removeSearch: (state, action: PayloadAction<number>) => {
      state.recentSearches.splice(action.payload, 1);
    },
  },
});

export const { setJobTitle, setJobLocation, addSearch, removeSearch } =
  recentSearchSlice.actions;

export const searched = (state: RootState) => state.recentSearch;

export default recentSearchSlice.reducer;
