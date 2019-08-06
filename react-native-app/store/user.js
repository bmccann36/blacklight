'use strict';
import axios from 'axios';

const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'

export const createUserSuccess = (user) => ({ type: CREATE_USER_SUCCESS, user })
export const loginUserSuccess = (user) => ({ type: LOGIN_USER_SUCCESS, user })

//THUNK CREATORS

export const getUser = (info) => {
  return function thunk(dispatch) {
    return axios.post('https://blacklight-app.herokuapp.com/auth/login', info)
      .then(res => res.data)
      .then(user => dispatch(loginUserSuccess(user)))
      .catch(err => console.error(err))
  }
}


export const createUserOnServer = (newUser) => {
  return function thunk(dispatch) {
    return axios.post('https://blacklight-app.herokuapp.com/auth/signup', newUser)
      .then(res => res.data)
      .then(user => dispatch(createUserSuccess(user)))
      .catch(err => console.error(err))
  }
}

// Do we need this? I think we should get rid of it... -thetrevlore
export const initialState = {
  email: "Guest@gmail.com",
  id: 26,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return action.user

    case LOGIN_USER_SUCCESS:
      return action.user

    default:
      return state;
  }
}
