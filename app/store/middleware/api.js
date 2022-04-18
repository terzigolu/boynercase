import axios from 'axios';
import {createAction} from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import {AsyncStorage} from 'react-native';
import {GET_COMMAND_LIST} from '../products';

// Actions
export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

const api =
  ({dispatch, getState}) =>
  next =>
  async action => {
    if (action.type !== apiCallBegan.type) {
      return next(action);
    }
    //apiCallBegan gözükmesi isteniyorsa;
    //next(action);
    const state = getState();

    const {url, method, data, onStart, onSuccess, onError} = action.payload;

    if (onStart) {
      dispatch({type: onStart});
    }
    try {
      const axiosInstance = axios.create();

      // Check token and initialize (if api has auth service)
      var token = await AsyncStorage.getItem('token');
      if (token && state.auth.isLoggedIn && !state.auth.sessionSearch) {
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      }

      const response = await axiosInstance.request({
        baseURL: 'https://www.mockachino.com/42a008d9-66a2-41',
        url,
        method,
        data,
      });

      if (onSuccess) {
        console.log(response.data);
        dispatch({
          type: onSuccess,
          payload: {
            data: response.data,
            url: url,
            method: method,
            requestData: data,
          },
        });
      }
    } catch (error) {
      //dispatch(apiCallFailed(error.message));
      if (onError) {
        dispatch({
          type: onError,
          payload: error,
        });
      }
    }
  };

api.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  data: PropTypes.any,
  onStart: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onSuccessMsg: PropTypes.any,
  onError: PropTypes.any.isRequired,
  onErrorMsg: PropTypes.any,
};

export default api;
