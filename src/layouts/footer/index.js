import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Link href='tel:09120413526' passHref>
				<a target='_blank'>
					(+98) 09120413526
					<FontAwesomeIcon icon='phone-alt' color='#15AABF' />
				</a>
			</Link>
			<Link href='https://www.linkedin.com/in/ehsan-imanii?trk=people-guest_people_search-card' passHref>
				<a target='blank'>
					Linkdin
					<FontAwesomeIcon icon={['fab', 'linkedin']} color='#0077B5' />
				</a>
			</Link>
			<Link href='mailto:ehsanimani1000@yahoo.com?subject=test&body=test' passHref>
				<a target='_blank'>
					ehsanimani1000@yahoo.com
					<FontAwesomeIcon icon='envelope-open-text' color='#82C91E' />
				</a>
			</Link>
		</footer>
	);
};
