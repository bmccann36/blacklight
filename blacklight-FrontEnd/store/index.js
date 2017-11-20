import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';


//REDUCERS WE MAKE GO HERE
import memory from './memory'
import auth from './auth'

const reducer = combineReducers({
  memory,
  auth
})

const middleware = applyMiddleware(
  thunkMiddleware,logger)


const store = createStore(reducer, middleware);


export default store
export * from './memory'
export * from './auth'
