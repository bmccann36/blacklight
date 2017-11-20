

const INITIAL_STATE = {
  title: '',
  text: '',
  location: [] // ARRAY OF LAT, LON
}

//ACTION TYPES
TITLE_CHANGED = 'TITLE_CHANGED'
TEXT_CHANGED = 'TEXT_CHANGED'
RECEIVED_LOCATION = 'RECEIVED_LOCATION'

// ACTION CREATORS
export const titleChanged = (text) => ({ type: TITLE_CHANGED, text: text })

// REDUCER
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TITLE_CHANGED:
      return {...state, title: action.text }

    // case PASSWORD_CHANGED:
    //   return {...state, password: action.text}

    default:
      return state;
  }
}
