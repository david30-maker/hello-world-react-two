import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greetingReducer.js'; // Add .js extension here
// Rest of the code...

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
