import axios from 'axios';

import { TOAST_TYPE } from '../constants';
import { SHOW_MESSAGE } from '../actions/ActionTypes';

export const makeHttpRequest = async (config, dispatch) => {
  try {
    return await axios.request(config);
  } catch (error) {
    let message;
    if (error.response 
        && error.response.data) {
      message = error.response.data.message;
    }
    if (!message) {
      message = error.message;
    }
    dispatch({
      type: SHOW_MESSAGE,
      payload: {
        type: TOAST_TYPE.ERROR,
        message
      }
    });
  }
};
