/*
 * @Date: 2019-08-29 22:30:52
 * @LastEditTime: 2019-09-08 22:05:47
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import mySaga from './sagas/people';

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true
  }) : compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

export type AppState = ReturnType<typeof rootReducer>
