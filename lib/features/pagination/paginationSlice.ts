import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaginationState {
  currentPage: number;
}

const initialState: PaginationState = {
  currentPage: 1, // Default page value
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    resetCurrentPage: (state) => {
      state.currentPage = 1;
    },
  },
});

export const { setCurrentPage, resetCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
