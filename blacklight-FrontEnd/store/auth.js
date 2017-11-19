
const INITIAL_STATE = {email: ''}

//ACTION TYPES
EMAIL_CHANGED = 'EMAIL_CHANGED'


// ACTION CREATORS
export const emailChanged = (text) => ({type: EMAIL_CHANGED, text: text })

// const getAllMemories = (memories) => ({ type: GET_ALL_MEMORIES, memories });


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.text}

    default:
      return state;
  }
}
