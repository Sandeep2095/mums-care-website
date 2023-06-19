import React from 'react';
import logo from '../assests/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
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
		<footer>
			<div className='footer-outer-div'>
				<div className='container-fluid'>
					<footer className='p-5'>
						<div className='row'>
							<div className='col-md-3 col-sm-6 mb-3'>
								<div className='Footer-logo'>
									<img src={logo} alt='logoInFooter' />
								</div>
								<p className='footer-text my-5 w-75'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos
									voluptas harum vero, officiis, sit magni suscipit mollitia quasi,
									molestiae dolorum dolorem eos velit dolor?
								</p>
							</div>

							<div className='col-md-3 col-sm-6 mb-3'>
								<h3 className='footer-h3'>CONTACT US</h3>
								<div className='footer-reach-us'>
									<ul>
										<li>
											<a
												href='mailto:mumscare.patna@gmail.com'
												target='_blank'
												rel='noopener noreferrer'
											>
												<EmailIcon style={socialStyle} /> mumscare.patna@gmail.com
											</a>
										</li>
										<li>
											<a
												href='tel:+91930-463-3740'
												// target='_blank'
												// rel='noopener noreferrer'
											>
												<LocalPhoneIcon style={socialStyle} /> +91 93046 33740
											</a>
										</li>
										<li>
											<a href='!#' target='_blank' rel='noopener noreferrer'>
												<PublicIcon style={socialStyle} /> Rajeshwar Complex, <br /> Shop No
												- 3,
												<br /> Kankarbagh Main Road, <br /> Below Vishal Megha Mart, <br />{' '}
												Patna, Bihar India.
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className='col-md-3 col-sm-6 mb-3'>
								<h3 className='footer-h3'>QUICK LINKS</h3>
								<ul className='nav flex-column'>
									<li className='nav-item mb-2'>
										<a
											href='/store'
											target='_blank'
											rel='noreferrer'
											className='nav-link p-0'
										>
											Collections
										</a>
									</li>
									<li className='nav-item mb-2'>
										<a
											href='/store'
											target='_blank'
											rel='noreferrer'
											className='nav-link p-0'
										>
											Collections
										</a>
									</li>
									<li className='nav-item mb-2'>
										<a
											href='/store'
											target='_blank'
											rel='noreferrer'
											className='nav-link p-0'
										>
											Collections
										</a>
									</li>
									<li className='nav-item mb-2'>
										<a
											target='_blank'
											rel='noreferrer'
											href='https://play.google.com/store/apps/details?id=com.dsoft.alankar'
											className='nav-link p-0'
										>
											Collections
										</a>
									</li>
									<li className='nav-item mb-2'>
										<a
											href='!#'
											target='_blank'
											rel='noreferrer'
											className='nav-link p-0'
										>
											Collections
										</a>
									</li>
									<li className='nav-item mb-2'>
										<a
											href='/contactus'
											target='_blank'
											rel='noreferrer'
											className='nav-link p-0'
										>
											Collections
										</a>
									</li>
								</ul>
							</div>

							<div className='write col-md-3 col-sm-6 mb-3'>
								<h3 className='footer-h3'>WRITE TO US</h3>
								<div className='footer-form'>
									<div className=''>
										<div className='form-floating mb-3'>
											<input
												type='text'
												className='form-control'
												id='floatingInput'
												placeholder='Name'
											/>
											<label for='floatingInput'>Name</label>
										</div>
										<div className='form-floating mb-3'>
											<input
												type='email'
												className='form-control'
												style={{ background: '#000000' }}
												id='floatingInput'
												placeholder='EmailAddress'
											/>
											<label for='floatingPassword'>Email address</label>
										</div>
										<div className='form-floating mb-3'>
											<input
												type='password'
												className='form-control'
												style={{ background: '#000000' }}
												id='floatingPassword'
												placeholder='Password'
											/>
											<label for='floatingPassword'>Password</label>
										</div>
										<div class='form-floating mb-3'>
											<textarea
												class='form-control'
												placeholder='Leave a comment here'
												id='floatingTextarea2'
												style={{ height: '100px', background: '#000000' }}
											></textarea>
											<label for='floatingTextarea2'>Message</label>
										</div>

										<div
											className='btn btn-primary px-4'
											style={{ background: '#000000', border: '1px solid #fbbc93' }}
										>
											Send
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='d-flex flex-column flex-sm-row justify-content-between py-4 border-top'>
							<div>
								<p
									style={{
										fontSize: '14px',
										letterSpacing: '1px',
										fontFamily: 'RegularCaslon',
										marginBotttom: '0px',
										color: '#fff',
									}}
								>
									© 2023 Alankar, Inc. All rights reserved.
								</p>
							</div>
							<div className='social-links'>
								<ul class='nav'>
									<li class='nav-item'>
										<a
											href='https://www.facebook.com/alankarpatna'
											target='_blank'
											rel='noreferrer'
											class='nav-link p-0'
										>
											<FacebookIcon />
										</a>
									</li>
									<li class='nav-item'>
										<a
											href='https://instagram.com/alankar_jewellers?igshid=YmMyMTA2M2Y='
											target='_blank'
											rel='noreferrer'
											class='nav-link p-0 social-links'
										>
											<InstagramIcon />
										</a>
									</li>

									<li class='nav-item'>
										<a href='!#' target='_blank' class='nav-link p-0 social-links'>
											<WhatsAppIcon />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
