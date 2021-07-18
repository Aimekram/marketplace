import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import OfferPreview from '../OfferPreview';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const sliderSettings = {
	dots: true,
	infinite: true,
	// autoplay: true,
	autoplaySpeed: 3500,
	slidesToShow: 3,
	centerPadding: '50%',
};

const CardsSlider = ({ cards }) => {
	// console.log(cards);
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={30}
			loop={true}
			loopFillGroupWithBlank={true}
			grabCursor={true}
			// centeredSlides={true}
			// pagination={{
			// 	clickable: true,
			// }}
			navigation={true}
		>
			<SwiperSlide
				style={{
					width: '200px',
					height: '300px',
					border: '2px solid red',
				}}
			>
				one
			</SwiperSlide>
			<SwiperSlide
				style={{
					width: '200px',
					height: '300px',
					border: '2px solid red',
				}}
			>
				two
			</SwiperSlide>
			<SwiperSlide
				style={{
					width: '200px',
					height: '300px',
					border: '2px solid red',
				}}
			>
				three
			</SwiperSlide>
			<SwiperSlide
				style={{
					width: '200px',
					height: '300px',
					border: '2px solid red',
				}}
			>
				four
			</SwiperSlide>
			<SwiperSlide
				style={{
					width: '200px',
					height: '300px',
					border: '2px solid red',
				}}
			>
				five
			</SwiperSlide>
			{/* {cards.length ? (
				cards.map(({ id, processor, graphics, price, loc }) => {
					return (
						<OfferPreview
							key={id}
							id={id}
							processor={processor}
							graphics={graphics}
							price={price}
							loc={loc}
						/>
					);
				})
			) : (
				<p>Wczytywanie ogłoszeń...</p>
			)} */}
		</Swiper>
	);
};

export default CardsSlider;
