import { Action } from 'redux';
import { REGISTER_USER, REGISTER_USER_FAILED } from '../types/userTypes';

const initState = {
	isAuthenticated: false,
	user: null,
	error: null,
};

interface IAction extends Action {
	type: string;
	payload: any;
}

const authReducer = (state = initState, action: IAction) => {
	switch (action.type) {
		case REGISTER_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
			};
		case REGISTER_USER_FAILED:
			return {
				...state,
				isAuthenticated: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
};

export default authReducer;
