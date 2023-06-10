import React, { useRef } from 'react';
import './Herosection.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../assests/1.webp';
import img2 from '../../assests/2.webp';
import img3 from '../../assests/3.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Herosection = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className='mySwiper'
			>
				<SwiperSlide>
					<img src={img1} alt='herosection' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img2} alt='herosection' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img3} alt='herosection' />
				</SwiperSlide>

				<div className='autoplay-progress' slot='container-end'>
					<svg viewBox='0 0 48 48' ref={progressCircle}>
						<circle cx='24' cy='24' r='20'></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</>
	);
};

export default Herosection;
