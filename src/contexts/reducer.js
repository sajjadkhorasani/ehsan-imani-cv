import {STORE_CONSTANTS} from 'constants/store';

export const mainReducer = (state, action) => {
	switch (action.type) {
		case STORE_CONSTANTS.SET_MENU:
			return {...state, menu: action.payload};

		case STORE_CONSTANTS.SET_SCROLL:
			return {...state, scroll: action.payload};

		case STORE_CONSTANTS.SET_THEME:
			return {...state, darkMode: action.payload};

		default:
			return state;
	}
};
