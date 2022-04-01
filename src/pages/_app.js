import '../styles/globals.css';
import {MainStateProvider} from 'contexts';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

function MyApp({Component, pageProps}) {
	library.add(fab, far, fas);
	return (
		<MainStateProvider>
			<Component {...pageProps} />
		</MainStateProvider>
	);
}

export default MyApp;
