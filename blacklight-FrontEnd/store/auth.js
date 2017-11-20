import axios from 'axios';



const INITIAL_STATE = {email: '', password: '', user: {}}

//ACTION TYPES
EMAIL_CHANGED = 'EMAIL_CHANGED'
PASSWORD_CHANGED = 'PASSWORD_CHANGED'
CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
// ACTION CREATORS
export const emailChanged = (text) => ({type: EMAIL_CHANGED, text: text })
export const passwordChanged = (text) => ({ type: PASSWORD_CHANGED, text: text})
export const createUserSuccess = (user) => ({type: CREATE_USER_SUCCESS, user: user})

//THUNK CREATORS
export const createUserOnServer = (newUser) => {
  return function thunk(dispatch) {
    return axios.post('https://blacklight-app.herokuapp.com/auth/signup', newUser )
      .then(res => res.data)
      .then(user => {
        // console.log('brand new user', user)
        dispatch(createUserSuccess(user));
      })
      .catch(err => console.log(err))
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.text}

    case PASSWORD_CHANGED:
      return {...state, password: action.text}

    case CREATE_USER_SUCCESS:
      return {...state, user: action.user}

    default:
      return state;
  }
}
