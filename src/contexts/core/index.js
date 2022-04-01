import {createContext} from 'react';

export const initialState = {
	darkMode: false,
	menu: false,
	scroll: 0,
};

export const MainContext = createContext(null);
