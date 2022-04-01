import {useMemo, useReducer} from 'react';
import {initialState, MainContext} from '../core';
import {mainReducer} from '../reducer';

export const MainStateProvider = ({children}) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);
	const store = useMemo(() => [state, dispatch], [state]);

	return <MainContext.Provider value={store}>{children}</MainContext.Provider>;
};
