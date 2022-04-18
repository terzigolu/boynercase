import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth';
import productsReducer from './products';
import basketReducer from './basket';
import filtersReducer from './filters';

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  basket: basketReducer,
  filters: filtersReducer,
});
