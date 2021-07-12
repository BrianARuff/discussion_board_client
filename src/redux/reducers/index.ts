import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer from './authReducer';

const middleware = [thunk, logger];

const store = createStore(
	combineReducers({
		authReducer,
	}),
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
