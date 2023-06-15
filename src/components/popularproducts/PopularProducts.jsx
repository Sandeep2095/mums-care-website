import React from 'react';
import Data from './PPDATA.json';
import './Products.css';
import p1 from '../../assests/p1.webp';

const PopularProducts = () => {
	return (
		<div className='py-5 bg-light'>
			<div className='container'>
				<h1 className='text-center p-3'>Popular Products</h1>
				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
					{Data.map((data) => {
						return (
							<div className='col'>
								<div className='card shadow-sm'>
									<img src={p1} alt='ProductsImage' style={{ height: '300px' }} />
									<hr />

									<div className='card-body text-center'>
										<h5 className='card-text'> {data.name} </h5>
										<h6 className='card-text'> {data.price} </h6>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PopularProducts;
