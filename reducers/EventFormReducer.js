import {
  EVENT_UPDATE,
  EVENT_CREATE,
  EVENT_SAVE_SUCCESS
} from '../actions/types';

/*
* Initial state of the form when a user click 'Create Event'
*/
const INITIAL_STATE = {
  title: '',
  time: '',
  location: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EVENT_CREATE:
      return INITIAL_STATE;
    case EVENT_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
