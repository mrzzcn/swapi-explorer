/*
 * @Date: 2019-08-29 22:47:03
 * @LastEditTime: 2019-09-08 17:06:03
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import People from 'swapi-typescript/dist/models/People';

export const APPEND_PEOPLE = 'APPEND_PEOPLE';
export const SET_PERSON = 'SET_PERSON';

export interface AppendPeoplePayload { people: People[], next: string, total: number };

interface AppendPeopleAction {
  type: typeof APPEND_PEOPLE,
  payload: AppendPeoplePayload
}

interface SetPersonAction {
  type: typeof SET_PERSON,
  payload: People
}

export type PeopleActionTypes = AppendPeopleAction | SetPersonAction;
