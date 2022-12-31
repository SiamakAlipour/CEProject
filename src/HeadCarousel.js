import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './HeadCarousel.scss';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const images = [
	{
		url: 'https://picsum.photos/1280',
		caption: 'Slide 1',
	},
	{
		url: 'https://picsum.photos/1286',
		caption: 'Slide 2',
	},
	{
		url: 'https://picsum.photos/1285',
		caption: 'Slide 3',
	},
	{
		url: 'https://picsum.photos/1281',
		caption: 'Slide 3',
	},
	{
		url: 'https://picsum.photos/1282',
		caption: 'Slide 3',
	},
	{
		url: 'https://picsum.photos/1283',
		caption: 'Slide 3',
	},
];
function HeadCarousel() {
	return (
		<div className='head-carousel'>
			<Carousel
				responsive={responsive}
				showDots={true}
				autoPlay={true}
				draggable={true}>
				{images.map((d) => (
					<img
						src={d.url}
						alt='carousel images'
						className='head-carousel__image'
					/>
				))}
			</Carousel>
		</div>
	);
}

export default HeadCarousel;
