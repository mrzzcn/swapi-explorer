import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/index';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
export default createStore(
  rootReducer,
  composeEnhancers()
);

export type AppState = ReturnType<typeof rootReducer>
