import firebase from 'firebase';
import {
  EVENT_UPDATE,
  EVENT_CREATE,
  EVENTS_FETCH_SUCCESS,
  EVENT_SAVE_SUCCESS
} from './types';

export const eventUpdate = ({ prop, value }) => {
  return {
    type: EVENT_UPDATE,
    payload: { prop, value }
  };
};

export const eventCreate = ({ title, time, location }) => {
  // Get a reference to where the post will be created.
  const newPostKey = firebase.database().ref('/events').push().key;
  const { currentUser } = firebase.auth();
  const update = {};

  const postDetails = {
    timestamp: firebase.database.ServerValue.TIMESTAMP,
    title,
    time,
    location,
    going: [
      currentUser.uid
    ],
    user: {
      uid: currentUser.uid,
      email: currentUser.email
    }
  };

  update[`/events/${newPostKey}`] = postDetails;

  return (dispatch) => {
    firebase.database().ref()
      .update(update)
      .then(() => {
        dispatch({ type: EVENT_CREATE });
      })
      .then(() => newPostKey);
  };
};

/*
* Fetch a list of all events
*/
export const eventsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/events/`)
      .on('value', snapshot => {
        dispatch({ type: EVENTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const eventSave = ({ title, time, location, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/events/${uid}`)
      .set({ title, time, location })
      .then(() => {
        dispatch({ type: EVENT_SAVE_SUCCESS });
      });
  };
};

export const eventDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/events/${uid}`)
      .remove();
  };
};
