import axios from 'axios';

//ACTION TYPES
const GET_ALL_MEMORIES = 'GET_ALL_MEMORIES';
const MEMORY_SAVED = 'MEMORY_SAVED'

// ACTION CREATORS
const getAllMemories = (memories) => ({ type: GET_ALL_MEMORIES, memories });
const memorySaved = (memory) => ({ type: MEMORY_SAVED, memory })

//THUNK CREATORS
export const fetchMemories = () => {
  // console.log('calling fetch mem')
  return function thunk(dispatch) {
    return axios.get('https://blacklight-app.herokuapp.com/api/memories')
      .then(res => res.data)
      .then(memories => {
        dispatch(getAllMemories(memories));
      });
  }
}

export const commitMemory = (details) => {
  // console.log('firing', details)
  return function thunk(dispatch) {
    return axios.post('https://blacklight-app.herokuapp.com/api/memories', details)
      .then(res => res.data)
      .then(memory => {
        dispatch(memorySaved(memory))
      })
  }
}

//REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_MEMORIES:
      return action.memories
    case MEMORY_SAVED:
      return  [action.memory, ...state]

    default:
      return state;
  }
}
