/*
 * @Date: 2019-08-29 22:46:58
 * @LastEditTime: 2019-09-08 17:06:18
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import { APPEND_PEOPLE, SET_PERSON, PeopleActionTypes, AppendPeoplePayload } from './types';
import People from 'swapi-typescript/dist/models/People';

export function appendPeople(payload: AppendPeoplePayload): PeopleActionTypes {
  return {
    type: APPEND_PEOPLE,
    payload
  };
}

export function setPerson(person: People): PeopleActionTypes {
  return {
    type: SET_PERSON,
    payload: person
  };
}
