import { combineReducers } from 'redux';

import convertReducer from '../redux/reducers/convert';

const appReducer = combineReducers({
  convert: convertReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
