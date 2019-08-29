import { APPEND_PEOPLE, SET_PERSON, PeopleActionTypes } from './types';
import People from 'swapi-typescript/dist/models/People';


export type State = Readonly<{
  list: People[];
  current?: People;
  page: string;
}>;

const initialState: State = {
  list: [],
  current: null,
  page: ''
};

export default function (state = initialState, action: PeopleActionTypes): State {
  switch (action.type) {
    case APPEND_PEOPLE:
      return {
        ...state,
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
