import {useRef} from 'react';
import Head from 'next/head';
import {useMainState} from 'contexts';
import {STORE_CONSTANTS} from 'constants';
import {Sidebar, Header, Footer} from 'layouts';

import styles from 'styles/Home.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Home() {
	const pageRef = useRef(null);
	const [{darkMode, scroll}, dispatch] = useMainState();

	const scrollReset = (e) => {
		e.preventDefault();
		pageRef.current.scrollTo(0, 0);
	};

	const setScrollTop = (e) => {
		dispatch({type: STORE_CONSTANTS.SET_SCROLL, payload: pageRef.current.scrollTop});
	};

	return (
		<>
			<Head>
				<title>Ehsan Imani</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1'></meta>
			</Head>

			<button className={styles.reset_scroll} onClick={scrollReset} disabled={scroll < 500}>
				<FontAwesomeIcon icon='arrow-up' size='1x' />
			</button>

			<main className={darkMode ? styles.container_dark : styles.container_light}>
				<Sidebar />

				<div ref={pageRef} className={styles.self_page} onScroll={setScrollTop}>
					<Header />

					<main className={styles.main}>
						<h1 className={styles.title}>Ehsan Imani</h1>
						<small>Born May 28,1996 in Tehran</small>

						<div className={styles.card}>
							<h3 id='about-me'>ABOUT ME</h3>
							<p>
								I am a network engineer and have been studying conputer network and computer network security since 2015. My major studies are in CISCO technologies, JUNIPER Networks firewalls and
								routers, FORTINET firewalls and solutions and PALOALTO Firewalls. I have been teaching network security and firewalls since 2020.
							</p>
						</div>

						<div className={styles.card}>
							<h3 id='education'>EDUCATION</h3>
							<h4>● Karaj Islamic Azad University</h4>
							<p>2015- 2020 | Bacheler of Computer software Engineering</p>
						</div>

						<div className={styles.card}>
							<h3 id='experience'>EXPERIENCE</h3>
							<h4>2016-2018 ZAP Consulting Engineers</h4>
							<section>
								<li>Network Administrator</li>
								<li>designing and implementing network infrastructure.</li>

								<br />

								<h4>2018-2019 Ministry-of-Economic-Affairs-and-Finance</h4>
								<li>Network engineer and network security engineer datacenter facilities technician.</li>
								<li>Implementing Cisco Prime to centralize configurations.</li>

								<br />

								<h4>2019 Communications Regulatory Authority of Iran</h4>
								<li>Network Engineer and data center facilities technician.</li>
							</section>
						</div>

						<div className={styles.card}>
							<h3 id='certificates'>CERTIFICATES</h3>
							<span>CCNA R&S issued by Cisco (March 15,2017)</span>
							<span>CCNP R&S issued by MFT (2016)</span>
							<span>CCIE R&S issued bt Candoo institute (2017)</span>
							<span>MCSE 2012 R2 issued by MFT (2019)</span>
							<span>Fortinet NSE1 issued by Fortinet (Dec 7,2020)</span>
							<span>Fortinet NSE2 issued by Fortinet (Dec 14,2020)</span>
							<span>Vmware Vsphere installation and configuration issued by ArjangInstitute (2018)</span>
							<span>CCNA~CCIE Security issued bt Arjang Institute (2019)</span>
						</div>

						<div className={styles.card}>
							<h3 id='skills'>SKILLS</h3>
							<li>Ability to implement and configure JuniperNetworks Firewalls and Routers(SRX,MX) JNCIA &JNCIS</li>
							<li>Ability to implement and configure FortinetFirewalls NSE4</li>
							<li>Ability to implement and configure Cisco ASAFirewall and Firepower Firewall</li>
							<li>Ability to implement and configure Paloaltofirewalls PCNSA</li>
							<li>Cisco ISE (Device Access)</li>
							<li>Implementing and configuring DMVPN,IPSecurity, TCP/IP, BGP, QOS, OSPF, EIGRP,Etherchannel, Layer2 security solutions, GRETunnel, Kerio Control, PRTG,</li>
							<li>HP ProLiant Servers</li>
						</div>

						<div className={styles.card}>
							<h3 id='language-skills'>ENGLISH LANGUAGE SKILLS</h3>
							<table>
								<thead></thead>
								<tbody>
									<tr>
										<td>Speaking</td>
										<td>
											<div>
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
											</div>
										</td>
									</tr>
									<tr>
										<td>Listening</td>
										<td>
											<div>
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
											</div>
										</td>
									</tr>
									<tr>
										<td>Reading</td>
										<td>
											<div>
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
											</div>
										</td>
									</tr>
									<tr>
										<td>Writing</td>
										<td>
											<div>
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
												<FontAwesomeIcon icon='award' color='#fff' size='1x' />
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className={styles.card}>
							<h3 id='teaching-experience'>TEACHING EXPERIENCE</h3>
							<li>Fortinet Firewall</li>
							<li>Juniper Firewall (SRX)</li>
						</div>
					</main>

					<Footer />
				</div>
			</main>
		</>
	);
}
