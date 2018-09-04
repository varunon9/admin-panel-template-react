import { toast } from 'react-toastify';

import { 
  SHOW_MESSAGE, 
  SHOW_LOADER,
  HIDE_LOADER
} from '../actions/ActionTypes';

const initialState = {
  isLoading: false
};

const UtilReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE: {
      toast[action.payload.type](action.payload.messageElement, {
        position: toast.POSITION.BOTTOM_LEFT
      });
      return state;
    }

    case SHOW_LOADER: {
      return { ...state, isLoading: true };
    }

    case HIDE_LOADER: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};

export default UtilReducer;
