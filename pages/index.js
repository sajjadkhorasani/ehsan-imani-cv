import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import {useState} from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className={darkMode ? styles.container_dark : styles.container_light}>
			<div className={darkMode ? styles.left_wrapper_dark : styles.left_wrapper_light}>
				<span>Ehsan Imani</span>
				<ul>
					<li>
						<Link href='#about-me' passHref>
							<a>ABOUT ME</a>
						</Link>
					</li>
					<li>
						<Link href='#education' passHref>
							<a>EDUCATION</a>
						</Link>
					</li>
					<li>
						<Link href='#experience' passHref>
							<a>EXPERIENCE</a>
						</Link>
					</li>
					<li>
						<Link href='#certificates' passHref>
							<a>CERTIFICATES</a>
						</Link>
					</li>
					<li>
						<Link href='#skills' passHref>
							<a>SKILLS</a>
						</Link>
					</li>
					<li>
						<Link href='#language-skills' passHref>
							<a>ENGLISH LANGUAGE SKILLS</a>
						</Link>
					</li>
					<li>
						<Link href='#teaching-experience' passHref>
							<a>TEACHING EXPERIENCE</a>
						</Link>
					</li>
				</ul>

				<p>All Information Reserved Copyright © 2021 Ehsan Imani</p>
			</div>
			<div className={styles.self_page}>
				<Head>
					<title>Ehsan Imani Resume</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<header className={styles.header}>
					<Link href='tel:09120413526' passHref>
						<a target='_blank'>
							<FontAwesomeIcon icon='phone-alt' color='#15AABF' />
							(+98) 09120413526
						</a>
					</Link>
					<Link
						href='https://www.linkedin.com/in/ehsan-imanii?trk=people-guest_people_search-card'
						passHref>
						<a target='blank'>
							<FontAwesomeIcon icon={['fab', 'linkedin']} color='#0077B5' />
							Linkdin
						</a>
					</Link>
					<Link href='mailto:ehsanimani1000@yahoo.com?subject=test&body=test' passHref>
						<a target='_blank'>
							<FontAwesomeIcon icon='envelope-open-text' color='#82C91E' />
							ehsanimani1000@yahoo.com
						</a>
					</Link>

					<button onClick={() => setDarkMode(!darkMode)}>
						<FontAwesomeIcon icon='adjust' size='2x' />
					</button>
				</header>

				<main className={styles.main}>
					<h1 className={styles.title}>Ehsan Imani</h1>
					<small>Born May 28,1996 in Tehran</small>

					<div className={styles.card}>
						<h3 id='about-me'>ABOUT ME</h3>
						<p>
							I am a network engineer and have been studying conputer network and computer network
							security since 2015. My major studies are in CISCO technologies, JUNIPER Networks
							firewalls and routers, FORTINET firewalls and solutions and PALOALTO Firewalls. I have
							been teaching network security and firewalls since 2020.
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
							<li>
								Network engineer and network security engineer datacenter facilities technician.
							</li>
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
						<span>
							Vmware Vsphere installation and configuration issued by ArjangInstitute (2018)
						</span>
						<span>CCNA~CCIE Security issued bt Arjang Institute (2019)</span>
					</div>

					<div className={styles.card}>
						<h3 id='skills'>SKILLS</h3>
						<li>
							Ability to implement and configure JuniperNetworks Firewalls and Routers(SRX,MX) JNCIA
							&JNCIS
						</li>
						<li>Ability to implement and configure FortinetFirewalls NSE4</li>
						<li>Ability to implement and configure Cisco ASAFirewall and Firepower Firewall</li>
						<li>Ability to implement and configure Paloaltofirewalls PCNSA</li>
						<li>Cisco ISE (Device Access)</li>
						<li>
							Implementing and configuring DMVPN,IPSecurity, TCP/IP, BGP, QOS, OSPF,
							EIGRP,Etherchannel, Layer2 security solutions, GRETunnel, Kerio Control, PRTG,
						</li>
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
										&#x2B22;&#x2B22;&#x2B22;&#x2B22;<b>&#x2B22;</b>
									</td>
								</tr>
								<tr>
									<td>Listening</td>
									<td>
										&#x2B22;&#x2B22;&#x2B22;&#x2B22;<b>&#x2B22;</b>
									</td>
								</tr>
								<tr>
									<td>Reading</td>
									<td>
										&#x2B22;&#x2B22;&#x2B22;&#x2B22;<b>&#x2B22;</b>
									</td>
								</tr>
								<tr>
									<td>Writing</td>
									<td>
										&#x2B22;&#x2B22;&#x2B22;&#x2B22;<b>&#x2B22;</b>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className={styles.card}>
						<h3 id='teaching-experience'>TEACHING EXPERIENCE</h3>
						<li>Fortinet Firewall CBT</li>
						<li>Juniper Firewall (SRX) CBT</li>
					</div>
				</main>
			</div>
		</div>
	);
}
