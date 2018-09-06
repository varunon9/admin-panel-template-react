import {  
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions/ActionTypes';

const initialState = {
  authToken: 'a',
  email: 'a',
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

    case LOGOUT: {
      return { ...state, ...initialState };
    }

    default:
      return state;
  }
};

export default AuthReducer;
