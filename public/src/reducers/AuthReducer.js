import {  
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  UPDATE_PROFILE,
  LOGOUT
} from '../actions/ActionTypes';

const initialState = {
  authToken: '',
  email: '',
  profile: {}
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS: {
      return { ...state, ...action.payload };
    }

    case LOGIN_SUCCESS: {
      return { ...state, ...action.payload };
    }

    case UPDATE_PROFILE: {
      return { ...state, ...action.payload };
    }

    case LOGOUT: {
      return { ...state, ...initialState };
    }

    default:
      return state;
  }
};

export default AuthReducer;
