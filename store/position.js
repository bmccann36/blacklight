
let intvl = null;

// ACTION TYPES
const LOCATION_CHANGED = 'LOCATION_CHANGED';
const STOP_WATCHING = 'STOP_WATCHING';

// ACTION CREATORS

export const locationChanged = loc => ({ type: LOCATION_CHANGED, loc });
export const stopWatching = () => ({ type: STOP_WATCHING });


// THUNK ACTION!!
export const watchLocation = () => function thunk(dispatch) {
  clearInterval(intvl);
  intvl = setInterval(() => {
    Expo.Location.getCurrentPositionAsync({ enableHighAccuracy: true })
      .then((result) => {
        dispatch( locationChanged({ latitude: result.coords.latitude, longitude: result.coords.longitude }) )
      })
  }, 1000);
};
// export const watchLocation = () => function thunk(dispatch) {
//   console.log('totally watching ur location bro')
//   let latitude;
//   let longitude;
//   watchID = navigator.geolocation.watchPosition((position) => {
//     latitude = parseFloat(position.coords.latitude);
//     longitude = parseFloat(position.coords.longitude);
//     dispatch(locationChanged({ latitude: latitude, longitude: longitude }))
//   });
// };


// REDUCER
export default (state = {}, action) => {
  switch (action.type) {
    case LOCATION_CHANGED:
      return Object.assign({}, state, { latitude: action.loc.latitude, longitude: action.loc.longitude });

    case STOP_WATCHING:
      clearInterval(intvl);
      return {...state};
    // case STOP_WATCHING:
    //   navigator.geolocation.clearWatch(watchID);
    //   return [...state];

    default:
      return state;
  }
};
