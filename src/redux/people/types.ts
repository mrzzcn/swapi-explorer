import People from 'swapi-typescript/dist/models/People';

export const APPEND_PEOPLE = 'APPEND_PEOPLE';
export const SET_PERSON = 'SET_PERSON';

interface AppendPeopleAction {
  type: typeof APPEND_PEOPLE,
  payload: { people: People[], next: string }
}

interface SetPersonAction {
  type: typeof SET_PERSON,
  payload: People
}

export type PeopleActionTypes = AppendPeopleAction | SetPersonAction;
