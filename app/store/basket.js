import {createSlice, createSelector} from '@reduxjs/toolkit';
import {apiCallBegan} from './middleware/api';
const slice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    deleteFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (item, index) => index !== action.payload,
      );
    },
  },
});

export const {addToBasket, deleteFromBasket} = slice.actions;
export default slice.reducer;

export const selectBasket = createSelector(
  state => state[slice.name].basket,
  data => data,
);
