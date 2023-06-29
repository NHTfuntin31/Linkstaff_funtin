// slices/FilterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  searchText: string;
}

const initialState: FilterState = {
  searchText: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<any>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = filterSlice.actions;
export default filterSlice.reducer;
