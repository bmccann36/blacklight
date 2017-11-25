

const INITIAL_STATE = {
  latitude: 0,
  longitude: 0,
};

//ACTION TYPES
const LOCATION_CHANGED = 'LOCATION_CHANGED';


// ACTION CREATORS

export const locationChanged = loc => ({ type: LOCATION_CHANGED, loc });

// REDUCER
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_CHANGED:
      return { latitude: action.loc.latitude, longitutude: action.loc.longitude };


    default:
      return state;
  }
};
