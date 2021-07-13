import { REGISTER_USER, REGISTER_USER_FAILED } from '../types/userTypes';

export const registerUser = (user: any) => (dispatch: Function) => {
	try {
		dispatch({ type: REGISTER_USER, payload: user });
	} catch (error) {
		dispatch({ type: REGISTER_USER_FAILED, payload: error });
	}
};
