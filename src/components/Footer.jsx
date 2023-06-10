import React from 'react';
import logo from '../assests/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PublicIcon from '@mui/icons-material/Public';

const socialStyle = {
	marginRight: '10px',
	cursor: 'pointer',
};

const Footer = () => {
	return (
		<footer className='container-fluid'>
			<div className='row mx-auto p-5'>
				<div className='col-md-3 f-1'>
					<img src={logo} alt='' />
					<br />
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore itaque
						omnis, nesciunt culpa eius recusandae, tempore soluta libero veniam quasi
						voluptatibus quibusdam.
					</p>
				</div>
				<div className='col-md-3 f-2'>
					<h3>Contact Us</h3>
					<ul>
						<li>
							<a href='!#' target='_blank' rel='noopener noreferrer'>
								<EmailIcon style={socialStyle} /> mumscare.patna@gmail.com
							</a>
						</li>
						<li>
							<a href='!#' target='_blank' rel='noopener noreferrer'>
								<LocalPhoneIcon style={socialStyle} /> +91 093046 33740
							</a>
						</li>
						<li>
							<a href='!#' target='_blank' rel='noopener noreferrer'>
								<PublicIcon style={socialStyle} /> Rajeshwar Complex, <br /> Shop No -
								3,
								<br /> Kankarbagh Main Road, <br /> Below Vishal Megha Mart, <br />{' '}
								Patna, Bihar India.
							</a>
						</li>
					</ul>
				</div>
				<div className='col-md-3 f-3'>
					<h3>Quick Links</h3>
					<ul>
						<li>
							<a href='!#' target='_blank' rel='noopener noreferrer'>
								{' '}
								Brand
							</a>
						</li>
						<li>
							<a href='!#' target='_blank' rel='noopener noreferrer'>
								{' '}
								Brand
							</a>
						</li>
						<li>
							<a href='!#' target='_blank' rel='noopener noreferrer'>
								{' '}
								Brand
							</a>
						</li>
						<li>
							<a href='!#' target='_blank' rel='noopener noreferrer'>
								{' '}
								Brand
							</a>
						</li>
					</ul>
				</div>
				<div className='col-md-3 f-4'>
					<h4>Newsletter</h4>
					<p>Subscribe to our newsletter to get latest updates and offers.</p>
					<form>
						<div className='form-group'>
							<input type='email' className='form-control' placeholder='Enter email' />
						</div>
					</form>
				</div>
			</div>
			<hr />
			<div className='container'>
				<div className='row mx-auto'>
					<div className='col-md-6 copyright'>Copyright @ 2023 Mums Care</div>
					<div className='col-md-6 social-links'>
						<ul className='d-flex'>
							<li>
								<FacebookIcon />
							</li>
							<li>
								<InstagramIcon />
							</li>
							<li>
								<TwitterIcon />
							</li>
							<li>
								<WhatsAppIcon />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
