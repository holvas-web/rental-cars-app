import { createSlice } from '@reduxjs/toolkit';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    list: [],
    favorites: []
    // Додайте інші поля, як-от isLoading, error тощо.
  },
  reducers: {
    setCars: (state, action) => {
      state.list = action.payload;
    },
    // Додайте інші reducers для управління favorites тощо.
  },
});

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;