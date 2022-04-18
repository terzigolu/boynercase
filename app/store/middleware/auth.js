import {createAction} from '@reduxjs/toolkit';
import {sessionSearch, sessionFound, sessionNotFound} from '../auth';
import {AsyncStorage} from 'react-native';

const auth =
  ({dispatch, getState}) =>
  next =>
  async action => {
    if (![sessionSearch.type].includes(action.type)) {
      return next(action);
    }
    //console.log('Auth Middleware')
    next(action);

    // Session Search
    if (action.type === sessionSearch.type) {
      //const session = await getSession();
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        dispatch({type: sessionNotFound.type});
        return;
      }

      dispatch({type: sessionFound.type, payload: token});
    }
  };

export default auth;
