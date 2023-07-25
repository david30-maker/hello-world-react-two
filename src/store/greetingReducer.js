import axios from 'axios';

// Action Type
const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';

// Action Creator
export const fetchRandomGreetingSuccess = (greeting) => ({
  type: FETCH_RANDOM_GREETING_SUCCESS,
  payload: greeting,
});

// Thunk Creator
export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/random_greeting');
    const randomGreeting = response.data.greeting;
    dispatch(fetchRandomGreetingSuccess(randomGreeting));
  } catch (error) {
    // Remove the console.error() statement
    // Do not include any console statements inside the catch block.
  }
};

// Reducer
const initialState = '';
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
