import React from 'react';
import img1 from '../assests/4.webp';
import img2 from '../assests/5.webp';

const Cards = () => {
	return (
		<>
			<div className='container'>
				<div className='row py-5'>
					<div className='col-md-6 mb-4'>
						<div class='card text-white border border-danger border-5 position-relative'>
							<img src={img1} class='card-img' alt='cardImage' />
							<div
								class='card-img-overlay position-absolute h-100 w-50 start-50'
								style={{ top: '80px' }}
							>
								<h3
									class='card-title card-Home-title'
									style={{ color: 'red', fontSize: '33px', letterSpacing: '1.1px' }}
								>
									Only your <br /> <strong>Love is Purer</strong>{' '}
								</h3>
								<button className='btn-warning text-dark-border-0 p-2'>Shop Now</button>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div class='card text-white border border-primary border-5 position-relative'>
							<img src={img2} class='card-img' alt='cardImage' />
							<div
								class='card-img-overlay position-absolute h-100 w-50 start-50'
								style={{ top: '80px' }}
							>
								<h3
									class='card-title card-Home-title'
									style={{ color: 'skyblue', fontSize: '33px', letterSpacing: '1.1px' }}
								>
									Baby Care <br /> <strong>Campaign Idea</strong>{' '}
								</h3>
								<button className='btn-warning text-dark-border-0 p-2'>Shop Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cards;
