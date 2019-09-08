/*
 * @Date: 2019-08-29 22:30:52
 * @LastEditTime: 2019-09-08 21:55:48
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/index';
// @ts-ignore
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export default createStore(
  rootReducer,
  reduxDevTools()
);

export type AppState = ReturnType<typeof rootReducer>
