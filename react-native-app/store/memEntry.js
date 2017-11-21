

const INITIAL_STATE = {
  title: '',
  text: '',
  location: {} // Will format depending on what I get from API - Brian
}

//ACTION TYPES
const TITLE_CHANGED = 'TITLE_CHANGED'
const TEXT_CHANGED = 'TEXT_CHANGED'
const RECEIVED_LOCATION = 'RECEIVED_LOCATION'
// const MEMORY_SAVED = 'MEMORY_SAVED'

// ACTION CREATORS
export const titleChanged = (text) => ({ type: TITLE_CHANGED, text: text })
export const textChanged = (text) => ({ type: TEXT_CHANGED, text: text })
export const receivedLocation = (location) => ({ type: RECEIVED_LOCATION, location: location })
// export const memorySaved = () => ({ type: MEMORY_SAVED })

//THUNK CREATORS

// this should go in the memories part of the store !!!
// export const commitMemory = (details) => {
//   return function thunk(dispatch) {
//     return axios.post('https://blacklight-app.herokuapp.com/api/memories', details)
//     .then(res=> res.data)
//     .then(memory => {
//       dispatch(memorySaved())
//     })
//   }
// }


// REDUCER
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TITLE_CHANGED:
      return { ...state, title: action.text }

    case TEXT_CHANGED:
      return { ...state, text: action.text }

    case RECEIVED_LOCATION:
      return { ...state, location: action.location }

    default:
      return state;
  }
}
