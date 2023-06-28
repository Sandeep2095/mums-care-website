import React, { useState, useEffect } from 'react';
// import "./Navbar.css";
import logo from '../assests/logo.png';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);

	const clickOnBurger = () => {
		setOpen(!open);
	};

	const onClickMobileBurger = (link) => {
		document
			.getElementById('mobile_hamburger')
			.classList.toggle('burger-menu-container');
		if (link !== '') navigate(`${link}`);
	};

	useEffect(() => {
		if (open) {
			document.getElementById('hamburger').classList.add('burger-menu-container');
			document.getElementById('nav-bottom-links').style.opacity = '1';
			document.getElementById('nav-bottom-links').style.zIndex = '99';
			document.getElementById('logo-bg-line-cont').style.transform = 'scaleY(1)';
			document.getElementById('navbar-heading').style.fontSize = '2rem';
			document.getElementById('navbar-heading').style.marginTop = '30px';
			document.getElementById('app-header').style.height = '200px';
			document.getElementById('navbar_logo').style.height = '100px';
		} else {
			document
				.getElementById('hamburger')
				.classList.remove('burger-menu-container');
			document.getElementById('nav-bottom-links').style.opacity = '0';
			document.getElementById('nav-bottom-links').style.zIndex = '-9';
			document.getElementById('logo-bg-line-cont').style.transform = 'scaleY(0)';
			document.getElementById('navbar-heading').style.fontSize = '1.5rem';
			document.getElementById('navbar-heading').style.marginTop = '00px';
			document.getElementById('app-header').style.height = '100px';
			document.getElementById('navbar_logo').style.height = '80px';
		}
	}, [open]);

	return (
		<>
			<header id='app-header' className='app-header'>
				<nav className='nav-header'>
					<div className='container-div'>
						<ul>
							{/* navbar for mobile and tab */}
							<li
								id='mobile_hamburger'
								className='ham-burger-menu'
								onClick={() => onClickMobileBurger('')}
								data-bs-toggle='offcanvas'
								data-bs-target='#offcanvasExample'
								aria-controls='offcanvasExample'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									viewBox='0 0 30 30'
									fill='#fff'
								>
									<path
										d='M28,22.3c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.4-0.7,0.4l0,0H3.3c-0.2,0-0.6-0.1-0.7-0.4
	                    c-0.1-0.2-0.2-0.6-0.2-0.8c0-0.2-0.4-0.2-0.4,0c0,0.1,0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8
	                    c0.1-0.3,0.5-0.4,0.7-0.4h23.5c0.2,0,0.6,0.1,0.7,0.4c0.1,0.2,0.2,0.6,0.2,0.8c0,0.2,0.4,0.2,0.4,0C28,24.2,28,22.3,28,22.3L28,22.3
	                    z'
										transform='rotate(45deg)'
									></path>
									<path
										d='M28,15.2c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.4-0.7,0.4H3.3c-0.2,0-0.6-0.1-0.7-0.4
	                    c-0.1-0.2-0.2-0.6-0.2-0.8C2.4,13,2,13,2,13.2c0,0.1,0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8C2.7,16.1,3,16,3.3,16
	                    h23.5c0.2,0,0.6,0.1,0.7,0.4c0.1,0.2,0.2,0.6,0.2,0.8c0,0.2,0.4,0.2,0.4,0C28,17.1,28,15.2,28,15.2L28,15.2z'
									></path>
									<path
										d='M28,8.1c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.3-0.7,0.4H3.3C3,7.3,2.7,7.2,2.5,6.9
	                     C2.4,6.7,2.4,6.3,2.4,6.1C2.4,6,2,6,2,6.1s0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8C2.7,9,3,9,3.3,8.9h23.5
	                     C27,9,27.3,9,27.5,9.3c0.1,0.2,0.2,0.6,0.2,0.8s0.4,0.2,0.4,0C28,10,28,8.1,28,8.1L28,8.1L28,8.1z'
									></path>
								</svg>
							</li>
							{/* menu for desktop only */}
							<li
								id='hamburger'
								className={'ham-burger-menu ' + (open && 'burger-menu-container')}
								onClick={() => clickOnBurger()}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									viewBox='0 0 30 30'
									fill='#fff'
								>
									<path
										d='M28,22.3c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.4-0.7,0.4l0,0H3.3c-0.2,0-0.6-0.1-0.7-0.4
	                    c-0.1-0.2-0.2-0.6-0.2-0.8c0-0.2-0.4-0.2-0.4,0c0,0.1,0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8
	                    c0.1-0.3,0.5-0.4,0.7-0.4h23.5c0.2,0,0.6,0.1,0.7,0.4c0.1,0.2,0.2,0.6,0.2,0.8c0,0.2,0.4,0.2,0.4,0C28,24.2,28,22.3,28,22.3L28,22.3
	                    z'
										transform='rotate(45deg)'
									></path>
									<path
										d='M28,15.2c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.4-0.7,0.4H3.3c-0.2,0-0.6-0.1-0.7-0.4
	                    c-0.1-0.2-0.2-0.6-0.2-0.8C2.4,13,2,13,2,13.2c0,0.1,0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8C2.7,16.1,3,16,3.3,16
	                    h23.5c0.2,0,0.6,0.1,0.7,0.4c0.1,0.2,0.2,0.6,0.2,0.8c0,0.2,0.4,0.2,0.4,0C28,17.1,28,15.2,28,15.2L28,15.2z'
									></path>
									<path
										d='M28,8.1c0,0,0-1.9,0-2s-0.4-0.2-0.4,0s0,0.6-0.2,0.8c-0.1,0.3-0.5,0.3-0.7,0.4H3.3C3,7.3,2.7,7.2,2.5,6.9
	                     C2.4,6.7,2.4,6.3,2.4,6.1C2.4,6,2,6,2,6.1s0,2,0,2l0,0c0,0,0,1.9,0,2s0.4,0.2,0.4,0s0-0.6,0.2-0.8C2.7,9,3,9,3.3,8.9h23.5
	                     C27,9,27.3,9,27.5,9.3c0.1,0.2,0.2,0.6,0.2,0.8s0.4,0.2,0.4,0C28,10,28,8.1,28,8.1L28,8.1L28,8.1z'
									></path>
								</svg>
							</li>
						</ul>

						<div id='navbar-heading' className='navbar-heading'>
							<img
								onClick={() => navigate('/')}
								id='navbar_logo'
								src={logo}
								alt='logo of alankar jewellers'
							/>
						</div>

						<ul>
							{/* location icon */}
							<li onClick={() => navigate('/profile')}>
								<Person2Icon style={{ color: '#fff', width: '30px', height: '30px' }} />
							</li>
							<li onClick={() => navigate('/')}>
								{' '}
								<ShoppingCartIcon
									style={{ color: '#fff', width: '30px', height: '30px' }}
								/>{' '}
							</li>
							<li onClick={() => navigate('/signup')}>
								{' '}
								<LoginIcon
									style={{ color: '#fff', width: '30px', height: '30px' }}
								/>{' '}
							</li>
						</ul>
					</div>
					<div id='logo-bg-line-cont' className='logo-bg-line-cont'>
						<hr
							style={{
								margin: '35px auto 0px',
								borderTop: '1px solid red',
							}}
						/>
					</div>
					<div id='nav-bottom-links' className='nav-bottom-links'>
						<ul>
							<li
								onClick={() => {
									setOpen(!open);
									navigate('/about');
								}}
							>
								Brand
							</li>
							<li
								onClick={() => {
									setOpen(!open);
									navigate('/store');
								}}
							>
								Category
							</li>
							<li
								onClick={() => {
									setOpen(!open);
									navigate('/engagementandbridal');
								}}
							>
								New Born
							</li>
							<li
								onClick={() => {
									setOpen(!open);
									navigate('/watches');
								}}
							>
								Kids
							</li>
							<li
								onClick={() => {
									setOpen(!open);
									navigate('/media');
								}}
							>
								Accessories
							</li>
							<li
								onClick={() => {
									setOpen(!open);
									navigate('/contactus');
								}}
							>
								Contact Us
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<div
				class='offcanvas offcanvas-start'
				tabindex='-1'
				id='offcanvasExample'
				aria-labelledby='offcanvasExampleLabel'
			>
				<div class='offcanvas-header'>
					<h5 class='offcanvas-title' id='offcanvasExampleLabel'>
						Offcanvas
					</h5>
					<button
						type='button'
						class='btn-close text-reset'
						data-bs-dismiss='offcanvas'
						aria-label='Close'
					></button>
				</div>
				<div class='offcanvas-body'>
					<ul style={{ paddingLeft: '0px' }} className='mobile_links_container'>
						<li
							className='mobile_nav_link'
							data-bs-dismiss='offcanvas'
							aria-label='Close'
							onClick={() => onClickMobileBurger('/about')}
						>
							Brand
						</li>
						<li
							className='mobile_nav_link'
							data-bs-dismiss='offcanvas'
							aria-label='Close'
							onClick={() => onClickMobileBurger('/store')}
						>
							Category
						</li>
						<li
							className='mobile_nav_link'
							data-bs-dismiss='offcanvas'
							aria-label='Close'
							onClick={() => onClickMobileBurger('/engagementandbridal')}
						>
							New Born
						</li>
						<li
							className='mobile_nav_link'
							data-bs-dismiss='offcanvas'
							aria-label='Close'
							onClick={() => onClickMobileBurger('/watches')}
						>
							Kids
						</li>
						<li
							className='mobile_nav_link'
							data-bs-dismiss='offcanvas'
							aria-label='Close'
							onClick={() => onClickMobileBurger('/media')}
						>
							Accessories
						</li>
						<li
							className='mobile_nav_link'
							data-bs-dismiss='offcanvas'
							aria-label='Close'
							onClick={() => onClickMobileBurger('/contactus')}
						>
							Pages
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
