/*
 * @Date: 2019-09-08 15:59:15
 * @LastEditTime: 2019-09-08 21:53:37
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import SWAPI from '../../utils/swapi';
import { appendPeople, setPerson } from '../people/actions';

function* fetchPeople(action) {
  try {
    const res = yield call([SWAPI, SWAPI.people], action.payload);
    yield put(appendPeople({ people: res.results, next: res.next, total: res.count }));
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}


function* fetchPerson(action) {
  try {
    const res = yield call([SWAPI, SWAPI.person], action.payload);
    yield put(setPerson(res));
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

function* mySaga() {
  console.log('Hello mySaga');
  yield takeEvery('PEOPLE_FETCH_REQUESTED', fetchPeople);
  yield takeEvery('PERSON_FETCH_REQUESTED', fetchPerson);
}

export default mySaga;
