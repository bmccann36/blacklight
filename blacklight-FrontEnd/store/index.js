import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
// import { composeWithDevTools } from 'redux-devtools-extension';

import App from '../App';

// const list = [
//   { id: 0, name: 'John is dead' },
//   { id: 1, name: 'Bruce is also dead' },
//   { id: 2, name: 'Brian is still alive' },
//   { id: 3, name: 'Matt is .....' },
//   { id: 4, name: 'David ... who knows' },
//   { id: 5, name: 'Jane is gone' },
//   { id: 6, name: 'Molly left' },
// ];





//action types
const GET_ALL_MEMORIES = 'GET_ALL_MEMORIES';



// action creators
const getAllMemories = (memories) => ({ type: GET_ALL_MEMORIES, memories });

//initial state
const initialState = {
  memories: []
};

//thunk creators
export const fetchMemories = () => {
  // console.log('INSIDE THE THUNK');
  return function thunk(dispatch) {

    return axios.get('https://blacklight-app.herokuapp.com/api/memories')
    .then(res => res.data)
    .then(memories => {
      dispatch(getAllMemories(memories));
      // console.log('FROM THE SERVER', memories);
    });

    // return fetch('https://money-store.herokuapp.com/api/products')
    // .then(res => res.json())
    // .then(memories => {
    //   dispatch(getAllMemories(memories));
    //   console.log('MEMORIES', memories)
    // });
  }
}




export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MEMORIES:
      return Object.assign({}, state, { memories: action.memories });




    default:
      return state;
  }
}

const middleware = applyMiddleware(
  thunkMiddleware
  // createLogger({collapsed: true})
);

const store = createStore(reducer, middleware);
export default store;

// import {createStore, combineReducers, applyMiddleware} from 'redux'
// import createLogger from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
