import {  
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
