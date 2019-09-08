/*
 * @Date: 2019-09-08 22:16:40
 * @LastEditTime: 2019-09-08 22:21:08
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import { APPEND_STARSHIP, SET_STARSHIP, StarshipActionTypes } from './types';
import Starship from 'swapi-typescript/dist/models/Starship';


export type State = Readonly<{
  list: Starship[];
  total: number;
  current?: Starship;
  page: string;
}>;

const initialState: State = {
  list: [],
  total: 0,
  current: null,
  page: ''
};

export default function (state = initialState, action: StarshipActionTypes): State {
  switch (action.type) {
    case APPEND_STARSHIP:
      return {
        ...state,
        total: action.payload.total,
        list: action.payload.starships,
        page: action.payload.next
      };
    case SET_STARSHIP:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
