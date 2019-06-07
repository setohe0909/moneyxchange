import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
  return store;
}
