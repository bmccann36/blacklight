
const INITIAL_STATE = {email: '', password: '', user: {}}

//ACTION TYPES
EMAIL_CHANGED = 'EMAIL_CHANGED'
PASSWORD_CHANGED = 'PASSWORD_CHANGED'

// ACTION CREATORS
export const emailChanged = (text) => ({type: EMAIL_CHANGED, text: text })
export const passwordChanged = (text) => ({ type: PASSWORD_CHANGED, text: text})

// REDUCER
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.text}

    case PASSWORD_CHANGED:
      return {...state, password: action.text}

    default:
      return state;
  }
}
