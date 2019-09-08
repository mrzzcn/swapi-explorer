/*
 * @Date: 2019-09-08 22:12:28
 * @LastEditTime: 2019-09-08 22:23:36
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import { fork } from 'redux-saga/effects'

import peopleSaga from './people';
import starshipSaga from './starship';

export default function* root() {
  yield fork(peopleSaga);
  yield fork(starshipSaga);
}
