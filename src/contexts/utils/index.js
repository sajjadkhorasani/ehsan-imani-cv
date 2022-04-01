import {useContext} from 'react';
import {MainContext} from '../core';

export const useMainState = () => {
	const mainState = useContext(MainContext);
	if (!mainState) {
		throw new Error('useMainState must be used within a MainProvider');
	}
	return mainState;
};

export const useSelector = () => {
	const [store] = useContext(MainContext);
	if (!store) {
		throw new Error('useSelector must be used within a MainProvider');
	}
	return store;
};

export const useDispatch = () => {
	const [, dispatch] = useContext(MainContext);
	if (!dispatch) {
		throw new Error('useDispatch must be used within a MainProvider');
	}
	return dispatch;
};
