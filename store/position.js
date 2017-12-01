
let watchID = null;

// ACTION TYPES
const LOCATION_CHANGED = 'LOCATION_CHANGED';
const STOP_WATCHING = 'STOP_WATCHING';

// ACTION CREATORS

export const locationChanged = loc => ({ type: LOCATION_CHANGED, loc });
export const stopWatching = () => ({ type: STOP_WATCHING });


// THUNK ACTION!!
export const watchLocation = () => function thunk(dispatch) {
  clearInterval(watchID);
  watchID = setInterval(() => {
    Expo.Location.getCurrentPositionAsync({ enableHighAccuracy: true })
      .then((result) => {
        dispatch( locationChanged({ latitude: result.coords.latitude, longitude: result.coords.longitude }) )
      })
  }, 1000);
};


// REDUCER
export default (state = {}, action) => {
  switch (action.type) {
    case LOCATION_CHANGED:
      return Object.assign({}, state, { latitude: action.loc.latitude, longitude: action.loc.longitude });

    case STOP_WATCHING:
      clearInterval(watchID);
      return {...state};

    default:
      return state;
  }
};
