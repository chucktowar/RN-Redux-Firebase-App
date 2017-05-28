import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EventFormReducer from './EventFormReducer';
import EventReducer from './EventReducer';

export default combineReducers({
  auth: AuthReducer,
  eventForm: EventFormReducer,
  events: EventReducer
});
