import { Action } from 'redux';
import {
	REGISTER_USER,
	REGISTER_USER_FAILED,
	LOGINING_USER,
	LOGIN_USER_FAILED,
} from '../types/userTypes';

const initState = {
	isAuthenticated: false,
	status: 400,
};

interface IAction extends Action {
	type: string;
	payload: any;
}

const authReducer = (state = initState, action: IAction) => {
	switch (action.type) {
		case REGISTER_USER:
			if (action.payload.status === 200) {
				return {
					...state,
					isAuthenticated: true,
				};
			}
			return state;
		case REGISTER_USER_FAILED:
			return {
				...state,
				isAuthenticated: false,
			};
		case LOGINING_USER:
			if (action.payload.status === 200) {
				return { ...state, isAuthenticated: true };
			}
			return state;
		case LOGIN_USER_FAILED:
			return { ...state, isAuthenticated: false };
		default:
			return state;
	}
};

export default authReducer;
