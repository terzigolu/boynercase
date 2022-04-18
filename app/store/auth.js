import {createSlice, createSelector} from '@reduxjs/toolkit';
import {apiCallBegan} from './middleware/api';
import {AsyncStorage} from 'react-native';
const slice = createSlice({
  name: 'auth',
  initialState: {
    success: false,
    error: null,
    loading: false,
    token: '',
    user: null,
    isLoggedIn: false,
    isSessionChecked: false,
    wrongEmailOrPassword: false,
  },
  reducers: {
    requestStarted: (state, action) => {
      state.loading = true;
    },
    requestFailed: (state, action) => {
      state.wrongEmailOrPassword = true;
      state.loading = false;
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      AsyncStorage.setItem('token', action.payload.result.token);
      state.error = null;
      state.wrongEmailOrPassword = false;
      state.loading = false;
      state.isLoggedIn = action.payload.result?.status;
      state.token = action.payload.result?.token;
      GET_CURRENT_USER();
    },
    getUserSuccess: (state, action) => {
      state.error = null;
      state.loading = false;
      state.user = action.payload;
    },
    sessionSearch: (state, action) => {
      state.loading = true;
    },
    sessionFound: (state, action) => {
      state.error = null;
      state.loading = false;
      state.isLoggedIn = true;
      state.isSessionChecked = true;
      state.token = action.payload?.token;
    },
    sessionNotFound: (state, action) => {
      state.error = null;
      state.loading = false;
      state.isLoggedIn = false;
      state.isSessionChecked = true;
      state.token = null;
    },
  },
});

const {
  requestStarted,
  requestFailed,
  loginSuccess,
  sessionFound,
  sessionSearch,
  sessionNotFound,
  getUserSuccess,
} = slice.actions;

export {sessionSearch, sessionFound, sessionNotFound};
export default slice.reducer;

export const POST_LOGIN = data =>
  apiCallBegan({
    data,
    method: 'POST',
    url: '/login',
    onStart: requestStarted.type,
    onError: requestFailed.type,
    onSuccess: loginSuccess.type,
  });

export const GET_CURRENT_USER = () =>
  apiCallBegan({
    method: 'GET',
    url: '/me',
    onStart: requestStarted.type,
    onError: requestFailed.type,
    onSuccess: getUserSuccess.type,
  });

export const selectState = createSelector(
  state => state,
  state => state,
);

export const checkUser = async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    sessionFound(selectState, sessionFound.type);
  } else if (token === null) {
    sessionNotFound();
  }
};

export const selectLoading = createSelector(
  state => state.auth.loading,
  data => data,
);
export const selectIsLoggedIn = createSelector(
  state => state.auth.isLoggedIn,
  data => data,
);
export const selectIsSessionChecked = createSelector(
  state => state.auth.isSessionChecked,
  data => data,
);
export const selectUser = createSelector(
  state => state.auth.user,
  data => data,
);
export const selectWrongEmailOrPassword = createSelector(
  state => state.auth.wrongEmailOrPassword,
  data => data,
);
