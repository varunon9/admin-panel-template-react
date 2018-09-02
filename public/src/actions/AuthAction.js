import { URLS, REQUEST_METHODS } from '../constants';
import { SHOW_MESSAGE } from './ActionTypes';
import { makeHttpRequest } from '../utils';

export const showToastMessage = (payload) => {
  return {
    type: SHOW_MESSAGE,
    payload
  };
};

export const login = (params) => {
  return async (dispatch) => {
    const config = {
      method: REQUEST_METHODS.POST,
      url: URLS.LOGIN,
      data: params
    };

    const response = await makeHttpRequest(config, dispatch);
    if (response) {
      console.log(response);
    } 
  };
};
