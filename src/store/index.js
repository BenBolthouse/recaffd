import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import queues from './queues';
import feeds from './feeds';

const rootReducer = combineReducers({
  session,
  queues,
  feeds,
});

// setup redux store and thunk based on environment type
let enhancer;
if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
}
else {
  const logger = require('redux-logger').default;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
const configureStore = preloadedState => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
