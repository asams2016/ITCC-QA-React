import { createStore, applyMiddleware } from 'redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Import reducers
import pageReducer from './reducers/pageReducer';

// Create the store by combining reducers
// and assigning them to a given property
const store = createStore(combineReducers({
	page: pageReducer,
}), applyMiddleware(thunk));

export default store;
