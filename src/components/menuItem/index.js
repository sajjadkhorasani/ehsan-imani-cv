import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from './styles.module.css';

export const MenuItem = ({href, title}) => {
	const router = useRouter();

	const activePath = (path) => {
		return router.asPath.replace('/', '') === path ? styles.link_active : styles.link;
	};

	return (
		<li className={activePath(href)}>
			<Link passHref href={href}>
				<a>{title}</a>
			</Link>
		</li>
	);
};
