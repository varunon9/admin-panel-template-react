import React from 'react';
import axios from 'axios';

import { TOAST_TYPES } from '../constants';
import { 
  SHOW_MESSAGE, 
  SHOW_LOADER, 
  HIDE_LOADER 
} from '../actions/ActionTypes';

export const makeHttpRequest = async (config, dispatch) => {
  try {
    // show loader
    dispatch({
      type: SHOW_LOADER
    });

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

    const payload = {
      type: TOAST_TYPES.ERROR,
      messageArray: [message]
    };
    showToastMessage(payload, dispatch);
  } finally {
    // hide loader
    dispatch({
      type: HIDE_LOADER
    });
  }
};

export const showToastMessage = (payload, dispatch) => {
  payload.messageElement = (
    <div>
      {
        payload.messageArray.map((message, index) => {
          return (
            <p key={index}>
              {message}
            </p>
          );
        })
      }
    </div>
  );
  
  dispatch({
    type: SHOW_MESSAGE,
    payload
  });
};
