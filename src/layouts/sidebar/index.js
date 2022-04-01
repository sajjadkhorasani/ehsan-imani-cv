import {useMainState} from 'contexts';
import {MenuItem} from 'components';

import {STORE_CONSTANTS} from 'constants/store';

import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Sidebar = () => {
	const [{menu, darkMode}, dispatch] = useMainState();

	const onClickLink = (e) => {
		e.preventDefault();
		dispatch({type: STORE_CONSTANTS.SET_MENU, payload: false});
	};

	return (
		<div className={darkMode ? styles.left_wrapper_dark : styles.left_wrapper_light} data-show={menu}>
			<div>
				<span>Ehsan Imani</span>
				<button onClick={onClickLink}>
					<FontAwesomeIcon icon={['far', 'times-circle']} size='1x' />
				</button>
			</div>

			<ul onClick={onClickLink}>
				<MenuItem href='#about-me' title='ABOUT ME' />
				<MenuItem href='#education' title='EDUCATION' />
				<MenuItem href='#experience' title='EXPERIENCE' />
				<MenuItem href='#certificates' title='CERTIFICATES' />
				<MenuItem href='#skills' title='SKILLS' />
				<MenuItem href='#language-skills' title='ENGLISH LANGUAGE SKILLS' />
				<MenuItem href='#teaching-experience' title='TEACHING EXPERIENCE' />
			</ul>

			<p>All Information Reserved Copyright © 2021 Ehsan Imani</p>
		</div>
	);
};
