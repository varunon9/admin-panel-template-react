import React from 'react';
import axios from 'axios';

import { TOAST_TYPES } from '../constants';
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

    const payload = {
      type: TOAST_TYPES.ERROR,
      messageArray: [message]
    };
    showToastMessage(payload, dispatch);
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
