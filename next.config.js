/**
 * @type {import('next').NextConfig}
 **/

const withPWA = require('next-pwa');
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) =>
	withPWA({
		swcMinify: true,
		reactStrictMode: true,
		pwa: {
			dest: 'public',
			register: true,
			skipWaiting: true,
			disable: phase === PHASE_DEVELOPMENT_SERVER,
		},
	});
