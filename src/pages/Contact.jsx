import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
	return (
		<div className='contactUSPage'>
			<div className='contactUs'>
				<div className='title mb-3'>
					<h2>Get in Touch</h2>
				</div>
				<div className='box'>
					<div className='contact form'>
						<h3>Send a Message</h3>
						<form>
							<div className='formBox'>
								<div className='row50'>
									<div className='inputBox'>
										<span>First Name</span>
										<input type='text' placeholder='First Name' />
									</div>
									<div className='inputBox'>
										<span>Last Name</span>
										<input type='text' placeholder='Last Name' />
									</div>
								</div>

								<div className='row50'>
									<div className='inputBox'>
										<span>Email Address</span>
										<input type='text' placeholder='example@email.com' />
									</div>
									<div className='inputBox'>
										<span>Mobile</span>
										<input type='text' placeholder='+91 12345 67890' />
									</div>
								</div>

								<div className='row100'>
									<div className='inputBox'>
										<span>Message</span>
										<textarea placeholder='Write your message here . . .'></textarea>
									</div>
								</div>

								<div className='row100'>
									<div className='inputBox'>
										<input type='submit' value='SEND' />
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className='contact info'>
						<h3>Contact Info</h3>
						<div className='infoBox'>
							<div>
								<span>
									<LocationOnIcon />
								</span>
								<p className='my-2'>
									Cannaught Palace, New Delhi <br />
									INDIA
								</p>
							</div>
							<div className='mb-4'>
								<span>
									<EmailIcon />
								</span>
								<a
									target='_blank'
									rel='noreferrer'
									href='mailto:mumscare.patna@gmail.com'
								>
									mumscare.patna@gmail.com
								</a>
							</div>
							<div>
								<span>
									<LocalPhoneIcon />
								</span>
								<a href='tel:+919304633740' target='_blank' rel='noreferrer'>
									+91 93046 33740
								</a>
							</div>

							{/* Social Links */}
							<ul className='sci'>
								<li>
									<a
										href='https://www.facebook.com/mumscarepatna/'
										target='_blank'
										rel='noreferrer'
									>
										<FacebookIcon />
									</a>
								</li>
								<li>
									<a href='#!' target='_blank' rel='noreferrer'>
										{' '}
										<TwitterIcon />
									</a>
								</li>
								<li>
									<a href='#!' target='_blank' rel='noreferrer'>
										{' '}
										<InstagramIcon />
									</a>
								</li>
								<li>
									<a href='#!' target='_blank' rel='noreferrer'>
										<LinkedInIcon />
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='contact map'>
						<iframe
							title='myMap'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7196.46184715684!2d85.15209209544722!3d25.597241735683806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590d1ed3866f%3A0x9a2daaf5ef3be417!2sMUM&#39;S%20CARE!5e0!3m2!1sen!2sin!4v1687075710633!5m2!1sen!2sin'
							width='600'
							height='450'
							style={{ border: '0' }}
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
