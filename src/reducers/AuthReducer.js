import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER_START
} from '../actions/types';

const INITIAL_STATE = { 
	email: '', 
	password: '',
	user: null,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload, error: '' };
		case LOGIN_USER_START:
			return { ...state, loading: true, password: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, 
				user: action.payload, 
				loading: false,
				email: '',
				password: '' };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: '', loading: false };

		default:
			return state;
	}
};
