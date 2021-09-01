import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import events_reducer from './event';
import categories_reducer from './category';
import venues_reducer from './venue';
import tickets_reducer from './ticket';
import hearts_reducer from './heart';
import followers_reducer from './follower';

const rootReducer = combineReducers({
  session,
  events_reducer,
  categories_reducer,
  venues_reducer,
  tickets_reducer,
  hearts_reducer,
  followers_reducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
