import React from 'react';
import logo from '../assests/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const iconStyle = {
	marginRight: '20px',
	height: '40px',
	width: '40px',
	cursor: 'pointer',
};

const Navbar = () => {
	return (
		<div style={{ maxHeight: '60vh' }}>
			<section>
				<nav>
					<div className='nav-logo'>
						<img src={logo} alt='' />
					</div>
					<div className='page-links'>
						<ul className='nav-links'>
							<li>HOME</li>
							<li>BRAND</li>
							<li>CATEGORY</li>
							<li>NEW BORN</li>
							<li>KIDS</li>
							<li>ACCESSORIES</li>
							<li>PAGES</li>
						</ul>
					</div>
					<div className='nav-right'>
						<SearchIcon style={iconStyle} />
						<ShoppingBagIcon style={iconStyle} />
						<FavoriteBorderIcon style={iconStyle} />
					</div>
				</nav>
			</section>
		</div>
	);
};

export default Navbar;
