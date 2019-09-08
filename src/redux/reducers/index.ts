/*
 * @Date: 2019-08-29 22:32:19
 * @LastEditTime: 2019-09-08 22:28:54
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import { combineReducers } from 'redux';

import peopleReducer from '../people/index';
import starshipReducer from '../starship/index';

export default combineReducers({
  people: peopleReducer,
  starship: starshipReducer
});

