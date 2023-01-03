// imports
import React from 'react';

//
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__navigator'>
				<div className='footer__socials'>
					<InstagramIcon />
					<WhatsAppIcon />
					<FacebookIcon />
				</div>
				<div className='footer__nav'>
					<ul>
						<li>
							<a href=''>Categories</a>
						</li>
						<li>
							<a href=''>Contact</a>
						</li>
						<li>
							<a href=''>About</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer__copyright'>
				&copy; Created by Siamak Alipour -{' '}
				<a href='https://github.com/SiamakAlipour/CEProject' target='_blank'>
					Github
				</a>
			</div>
		</div>
	);
};

export default Footer;
