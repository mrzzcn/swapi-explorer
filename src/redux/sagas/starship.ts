/*
 * @Date: 2019-09-08 22:15:48
 * @LastEditTime: 2019-09-08 22:27:24
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import { call, put, takeEvery } from 'redux-saga/effects'

import SWAPI from '../../utils/swapi';
import { appendStarship, setStarship } from '../starship/actions';

function* fetchStarships(action) {
  try {
    const res = yield call([SWAPI, SWAPI.starships], action.payload);
    yield put(appendStarship({ starships: res.results, next: res.next, total: res.count }));
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}


function* fetchStarship(action) {
  try {
    const res = yield call([SWAPI, SWAPI.starship], action.payload);
    yield put(setStarship(res));
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

function* starshipSaga() {
  yield takeEvery('STARSHIPS_FETCH_REQUESTED', fetchStarships);
  yield takeEvery('STARSHIP_FETCH_REQUESTED', fetchStarship);
}

export default starshipSaga;
