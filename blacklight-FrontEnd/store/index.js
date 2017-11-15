import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '../App';

//action types
const GET_ALL_MEMORIES = 'GET_ALL_MEMORIES';



// action creators


//initial state
const initialState = {
  memories: []
}

export const reducer = (state = initialState, action) => {


}


const store = createStore(reducer);
export default store;

// import {createStore, combineReducers, applyMiddleware} from 'redux'
// import createLogger from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
