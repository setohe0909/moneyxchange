import convertState from '../state/convertState';
import { GET_CONVERT } from '../actionTypes';

function convertReducer(state = convertState, action) {
  switch (action.type) {
    case GET_CONVERT:
      return {
        ...state
      };

    default:
      return state;
  }
}

export default convertReducer;
