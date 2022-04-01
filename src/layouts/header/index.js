import React from 'react';
import {useMainState} from 'contexts';
import {STORE_CONSTANTS} from 'constants';

import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Header = () => {
	const [{menu, darkMode}, dispatch] = useMainState();

	const onToggleMenuHandler = (e) => {
		e.preventDefault();
		dispatch({type: STORE_CONSTANTS.SET_MENU, payload: !menu});
	};

	const onToggleDarkModeHandler = (e) => {
		e.preventDefault();
		dispatch({type: STORE_CONSTANTS.SET_THEME, payload: !darkMode});
	};

	return (
		<header className={styles.header}>
			<button onClick={onToggleMenuHandler}>
				<FontAwesomeIcon icon='bars' size='2x' />
			</button>
			<button onClick={onToggleDarkModeHandler}>
				<FontAwesomeIcon icon='adjust' size='2x' />
			</button>
		</header>
	);
};
