import {createSlice, createSelector} from '@reduxjs/toolkit';
import {apiCallBegan} from './middleware/api';
import PropTypes from 'prop-types';
const slice = createSlice({
  name: 'products',
  initialState: {
    error: null,
    loading: false,
    products: null,
  },
  reducers: {
    requestStarted: (state, action) => {
      state.loading = true;
    },
    requestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productListGetDone: (state, action) => {
      state.products = action.payload.data;
      state.error = null;
      state.loading = false;
    },
  },
});

const {requestStarted, requestFailed, productListGetDone} = slice.actions;
export default slice.reducer;

export const GET_PRODUCTS = () =>
  apiCallBegan({
    url: '/products',
    method: 'GET',
    onStart: requestStarted.type,
    onError: requestFailed.type,
    onSuccess: productListGetDone.type,
  });

export const selectLoading = createSelector(
  state => state[slice.name].loading,
  data => data,
);
export const selectError = createSelector(
  state => state[slice.name].error,
  data => data,
);

export const selectProducts = createSelector(
  state => state[slice.name].products,
  data => data,
);
