import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {createSlice, createSelector} from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';
import auth from './middleware/auth';

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware({serializableCheck: false}),
      auth,
      api,
    ],
  });
}
