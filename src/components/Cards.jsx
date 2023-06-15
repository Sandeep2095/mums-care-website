import React from 'react';
import img1 from '../assests/4.webp';
import img2 from '../assests/5.webp';

const Cards = () => {
	return (
		<>
			<div className='container'>
				<div className='row py-5'>
					<div className='col-md-6'>
						<div className='card text-white position-relative border border-danger border-5'>
							<img src={img1} alt='cardImage' className='card-img' />
							<div
								className='card-img-overlay h-50 w-50 position-absolute start-50'
								style={{ top: '80px' }}
							>
								<h3
									style={{ color: 'skyblue', fontSize: '36px', letterSpacing: '1.1px' }}
								>
									Only your <br /> Love is Purer{' '}
								</h3>
								<button className='btn-warning text-dark-border-0 p-2'>Shop Now</button>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='card text-white position-relative border border-primary border-5'>
							<img src={img2} alt='cardImage' className='card-img' />
							<div
								className='card-img-overlay h-50 w-50 position-absolute start-50'
								style={{ top: '80px' }}
							>
								<div>
									<h3
										style={{ color: 'skyblue', fontSize: '33px', letterSpacing: '1.1px' }}
									>
										Baby Care <br /> Campaign{' '}
									</h3>
									<button className='btn-warning text-dark-border-0 p-2'>
										Shop Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cards;
