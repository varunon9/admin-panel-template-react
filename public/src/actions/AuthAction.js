import { 
  URLS, 
  REQUEST_METHODS, 
  TOAST_TYPES,
  AUTH_TOKEN
} from '../constants';
import { 
  LOGIN_SUCCESS, 
  SIGNUP_SUCCESS, 
  LOGOUT,
  UPDATE_PROFILE 
} from './ActionTypes';
import { makeHttpRequest, showToastMessage } from '../utils';

export const login = (params) => {
  return async (dispatch) => {
    const config = {
      method: REQUEST_METHODS.POST,
      url: URLS.LOGIN,
      data: params
    };

    const response = await makeHttpRequest(config, dispatch);
    if (response && response.data && response.data.result) {
      const action = {
        type: LOGIN_SUCCESS,
        payload: {
          authToken: response.data.authToken,
          email: response.data.result.email,
          profile: response.data.result
        }
      };

      dispatch(action);
    } 
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const signup = (params) => {
  return async (dispatch) => {
    let isError = false;
    const messageArray = [];
    if (!params.firstName) {
      isError = true;
      messageArray.push('First Name is mandatory.');
    }
    if (!params.lastName) {
      isError = true;
      messageArray.push('Last Name is mandatory.');
    }
    if (!params.mobile || (params.mobile.length != 10)) {
      isError = true;
      messageArray.push('Please enter 10 digits mobile number.');
    }
    if (!params.email) {
      isError = true;
      messageArray.push('Email is mandatory.');
    }
    if (!params.password || (params.password.length < 8)) {
      isError = true;
      messageArray.push('Password must be of minimum 8 characters.');
    }

    if (isError) {
      const payload = {
        type: TOAST_TYPES.ERROR,
        messageArray
      };
      showToastMessage(payload, dispatch);
    } else {
      const config = {
        method: REQUEST_METHODS.POST,
        url: URLS.SIGNUP,
        data: params
      };

      const response = await makeHttpRequest(config, dispatch);
      if (response && response.data && response.data.result) {
        const action = {
          type: SIGNUP_SUCCESS,
          payload: {
            authToken: response.data.authToken,
            email: response.data.result.email,
            profile: response.data.result
          }
        };

        dispatch(action);
      } 
    }
  };
};

export const updateProfile = (params) => {
  return async (dispatch, getState) => {
    let isError = false;
    const messageArray = [];
    if (!params.firstName) {
      isError = true;
      messageArray.push('First Name is mandatory.');
    }
    if (!params.lastName) {
      isError = true;
      messageArray.push('Last Name is mandatory.');
    }
    if (params.password && (params.password.length < 8)) {
      isError = true;
      messageArray.push('Password must be of minimum 8 characters.');
    }

    if (isError) {
      const payload = {
        type: TOAST_TYPES.ERROR,
        messageArray
      };
      showToastMessage(payload, dispatch);
    } else {
      const headers = {};
      headers[AUTH_TOKEN] = getState().auth.authToken;
      
      const config = {
        method: REQUEST_METHODS.PUT,
        url: URLS.PROFILE,
        data: params,
        headers
      };

      const response = await makeHttpRequest(config, dispatch);
      if (response && response.data && response.data.result) {
        const action = {
          type: UPDATE_PROFILE,
          payload: {
            profile: response.data.result
          }
        };

        dispatch(action);

        const payload = {
          type: TOAST_TYPES.SUCCESS,
          messageArray: ['Profile updated']
        };
        showToastMessage(payload, dispatch);
      } 
    }
  };
};
