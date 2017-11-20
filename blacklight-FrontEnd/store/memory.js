import axios from 'axios';

//ACTION TYPES
const GET_ALL_MEMORIES = 'GET_ALL_MEMORIES';

// ACTION CREATORS
const getAllMemories = (memories) => ({ type: GET_ALL_MEMORIES, memories });

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

//REDUCER
export default function(state = [], action) {
  switch (action.type) {
    case GET_ALL_MEMORIES:
      return action.memories

    default:
      return state;
  }
}
