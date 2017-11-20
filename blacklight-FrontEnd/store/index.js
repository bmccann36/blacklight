import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


//REDUCERS WE MAKE GO HERE
import memory from './memory'
import auth from './auth'
import user from './user'
import memEntry from './memEntry'

const reducer = combineReducers({
  memory,
  auth,
  user,
  memEntry
})

// WITH LOGGER
const middleware = applyMiddleware(thunkMiddleware, logger)

// NO LOGGER
// const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware);

export default store
export * from './memory'
export * from './auth'
export * from './user'
export * from './memEntry'
