import { LOGINING_USER, LOGIN_USER_FAILED } from '../types/userTypes';

export const loginUser = (user: any) => (dispatch: Function) => {
	try {
		dispatch({ type: LOGINING_USER, payload: user });
	} catch (error) {
		dispatch({ type: LOGIN_USER_FAILED, payload: error });
	}
};
