import { REGISTER_USER, REGISTER_USER_FAILED } from '../types/userTypes';

export const registerUser = (user: any) => {
	try {
		return {
			type: REGISTER_USER,
			payload: user,
		};
	} catch (error) {
		return {
			type: REGISTER_USER_FAILED,
			payload: error,
		};
	}
};
