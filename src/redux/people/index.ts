/*
 * @Date: 2019-08-29 22:32:44
 * @LastEditTime: 2019-09-08 21:46:31
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import { APPEND_PEOPLE, SET_PERSON, PeopleActionTypes } from './types';
import People from 'swapi-typescript/dist/models/People';


export type State = Readonly<{
  list: People[];
  total: number;
  current?: People;
  page: string;
}>;

const initialState: State = {
  list: [],
  total: 0,
  current: null,
  page: ''
};

export default function (state = initialState, action: PeopleActionTypes): State {
  switch (action.type) {
    case APPEND_PEOPLE:
      return {
        ...state,
        total: action.payload.total,
        list: action.payload.people,
        page: action.payload.next
      };
    case SET_PERSON:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
