import { toast } from 'react-toastify';

import { SHOW_MESSAGE } from '../actions/ActionTypes';

const initialState = {
  authToken: '',
  email: '',
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      toast[action.payload.type](action.payload.message, {
        position: toast.POSITION.BOTTOM_LEFT
      });
      return state;
    default:
      return state;
  }
};

export default AuthReducer;
