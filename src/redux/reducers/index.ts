import { combineReducers } from 'redux';

import peopleReducer from '../people/index';

export default combineReducers({ people: peopleReducer });

