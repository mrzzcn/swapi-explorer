/*
 * @Date: 2019-09-08 22:16:26
 * @LastEditTime: 2019-09-08 22:18:52
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import { APPEND_STARSHIP, SET_STARSHIP, StarshipActionTypes, AppendStarshipPayload } from './types';
import Starship from 'swapi-typescript/dist/models/Starship';

export function appendStarship(payload: AppendStarshipPayload): StarshipActionTypes {
  return {
    type: APPEND_STARSHIP,
    payload
  };
}

export function setStarship(person: Starship): StarshipActionTypes {
  return {
    type: SET_STARSHIP,
    payload: person
  };
}
