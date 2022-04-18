import {createSlice, createSelector} from '@reduxjs/toolkit';
import {apiCallBegan} from './middleware/api';
const slice = createSlice({
  name: 'filters',
  initialState: {
    filters: [],
    loading: false,
    error: false,
  },
  reducers: {
    requestStarted: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    requestFailed: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    getFiltersDone: (state, action) => {
      state.loading = false;
      state.error = false;
      state.filters = action.payload.data;
    },
  },
});

export const {getFiltersDone, requestStarted, requestFailed} = slice.actions;
export default slice.reducer;

export const GET_FILTER = () =>
  apiCallBegan({
    url: '/filter',
    method: 'GET',
    onStart: requestStarted.type,
    onError: requestFailed.type,
    onSuccess: getFiltersDone.type,
  });

export const selectFilters = createSelector(
  state => state[slice.name].filters,
  data => data,
);
export const selectLoading = createSelector(
  state => state[slice.name].loading,
  data => data,
);
export const selectError = createSelector(
  state => state[slice.name].error,
  data => data,
);
