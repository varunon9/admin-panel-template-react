import { toast } from 'react-toastify';

import { 
  SHOW_MESSAGE, 
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS
} from '../actions/ActionTypes';

const initialState = {
  authToken: '',
  email: '',
  profile: {}
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE: {
      toast[action.payload.type](action.payload.messageElement, {
        position: toast.POSITION.BOTTOM_LEFT
      });
      return state;
    }

    case SIGNUP_SUCCESS: {
      return { ...state, ...action.payload };
    }

    case LOGIN_SUCCESS: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};

export default AuthReducer;
