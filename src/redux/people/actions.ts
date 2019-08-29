import { APPEND_PEOPLE, SET_PERSON, PeopleActionTypes } from './types';
import People from 'swapi-typescript/dist/models/People';

export function appendPeople(payload: { people: People[], next: string }): PeopleActionTypes {
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
